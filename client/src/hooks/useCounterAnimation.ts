import { useEffect, useState, useRef, useCallback } from 'react'

interface UseCounterAnimationOptions {
  duration?: number
  startOnMount?: boolean
  decimals?: number
}

/**
 * Consolidated counter animation hook - single reusable implementation
 * Animates a number from 0 (or start value) to the target value
 */
export function useCounterAnimation(
  targetValue: number | string,
  options: UseCounterAnimationOptions = {}
) {
  const {
    duration = 2000,
    startOnMount = true,
    decimals = 0
  } = options

  const [count, setCount] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const animationRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)

  // Extract numeric value from string (handles "10+", "5,000+", etc.)
  const extractNumericValue = (value: number | string): number => {
    if (typeof value === 'number') return value
    
    // Remove all non-numeric characters except decimal point and minus sign
    const numericString = value.toString().replace(/[^\d.-]/g, '')
    const num = parseFloat(numericString)
    return isNaN(num) ? 0 : num
  }

  // Extract suffix (like "+", "%", etc.)
  const extractSuffix = (value: number | string): string => {
    if (typeof value === 'number') return ''
    const match = value.toString().match(/[^\d.,\s-]+$/)
    return match ? match[0] : ''
  }

  const numericTarget = extractNumericValue(targetValue)
  const suffix = extractSuffix(targetValue)

  const animateCounter = useCallback(() => {
    if (isAnimating) return

    setIsAnimating(true)
    setCount(0)

    const startTime = performance.now()
    startTimeRef.current = startTime

    const animate = (currentTime: number) => {
      if (!startTimeRef.current) return

      const elapsed = currentTime - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentCount = easeOut * numericTarget

      setCount(currentCount)

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      } else {
        setCount(numericTarget)
        setIsAnimating(false)
        startTimeRef.current = null
      }
    }

    animationRef.current = requestAnimationFrame(animate)
  }, [duration, numericTarget])

  useEffect(() => {
    if (startOnMount) {
      // Small delay to ensure component is mounted
      const timer = setTimeout(() => {
        animateCounter()
      }, 100)

      return () => {
        clearTimeout(timer)
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current)
        }
      }
    }
  }, [startOnMount, animateCounter])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  // Format the count with suffix
  const formatCount = (): string => {
    const formatted = decimals > 0 
      ? count.toFixed(decimals)
      : Math.floor(count).toLocaleString()
    
    return suffix ? `${formatted}${suffix}` : formatted
  }

  return {
    count: formatCount(),
    rawCount: count,
    isAnimating,
    restart: animateCounter
  }
}

