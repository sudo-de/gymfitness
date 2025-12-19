import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/constants'
import { useCounterAnimation } from '../../hooks/useCounterAnimation'
import './index.css'

function Home() {
  // Consolidated counter animations - single reusable hook
  const yearsCounter = useCounterAnimation('10+', { duration: 2000 })
  const membersCounter = useCounterAnimation('5,000+', { duration: 2500 })
  const trainersCounter = useCounterAnimation('50+', { duration: 2000 })

  return (
    <div className="app">
      {/* Skip to Content Link for Accessibility */}
      <a href="#home" className="skip-to-content">Skip to main content</a>

      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo-container">
            <h1 className="logo">Gym<span className="logo-accent">Fitness</span></h1>
            <p className="tagline">Transform Your Body</p>
          </div>
          <nav className="nav">
            <a href="#benefits">Benefits</a>
            <a href="#membership">Membership</a>
            <a href="#training">Training</a>
            <a href="#about">About</a>
            <a href="#classes">Classes</a>
            <a href="#contact">Contact</a>
            <Link to={ROUTES.LOGIN}>Login</Link>
            <Link to={ROUTES.REGISTER}>Start Free Trial</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background">
          <video 
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/Gym_Promotional.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h2 className="hero-title">Transform Your Body, Transform Your Life</h2>
          <p className="hero-subtitle">Join GymFitness today and start your fitness journey</p>
          <div className="hero-buttons">
            <Link to="/register" className="btn btn-primary">Start Free Trial</Link>
            <button className="btn btn-secondary">View Classes</button>
          </div>
        </div>
      </section>

      {/* Rest of the content remains the same - truncated for brevity */}
      {/* Gym Benefits Section */}
      <section id="benefits" className="features">
        <div className="container">
          <h2 className="section-title">Why Choose GymFitness?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-card">💪</div>
              <h3>Expert Trainers</h3>
              <p>Certified professionals dedicated to your success</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-card">🏋️</div>
              <h3>Modern Equipment</h3>
              <p>State-of-the-art fitness equipment and facilities</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-card">⏰</div>
              <h3>Flexible Hours</h3>
              <p>Open 24/7 to fit your busy schedule</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-card">👥</div>
              <h3>Community Support</h3>
              <p>Join a supportive community of fitness enthusiasts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="membership-section">
        <div className="container">
          <div className="membership-header">
            <div className="membership-eyebrow">Join GymFitness</div>
            <h2 className="membership-title">Choose Your Perfect Plan</h2>
            <p className="membership-subtitle">Start your fitness journey today with flexible membership options. All plans include a 7-day free trial - no credit card required.</p>
          </div>
          
          <div className="membership-benefits-bar">
            <div className="benefit-item">
              <span className="benefit-icon">✓</span>
              <span>7-Day Free Trial</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✓</span>
              <span>Cancel Anytime</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✓</span>
              <span>24/7 Access</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✓</span>
              <span>All Classes Included</span>
            </div>
          </div>

          <div className="membership-plans-grid">
            <div className="membership-plan-card">
              <div className="plan-header">
                <h3>Month to Month</h3>
                <span className="plan-badge">Flexible</span>
              </div>
              <div className="plan-pricing">
                <div className="price-main">
                  <span className="currency">$</span>
                  <span className="price-amount">165</span>
                  <span className="price-period">/month</span>
                </div>
                <p className="price-note">Billed monthly</p>
              </div>
              <div className="plan-features">
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>All fitness classes</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>All member events</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Full gym access 24/7</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Cancel anytime</span>
                </div>
              </div>
              <Link to="/register" className="btn btn-secondary plan-btn">Start Free Trial</Link>
            </div>

            <div className="membership-plan-card featured-plan">
              <div className="plan-badge-popular">Most Popular</div>
              <div className="plan-header">
                <h3>6 Month Plan</h3>
              </div>
              <div className="plan-pricing">
                <div className="price-main">
                  <span className="currency">$</span>
                  <span className="price-amount">145</span>
                  <span className="price-period">/month</span>
                </div>
                <div className="price-comparison">
                  <span className="old-price">$165/mo</span>
                  <span className="savings-amount">Save $20/month</span>
                </div>
                <p className="price-note">Billed every 6 months ($870 total)</p>
              </div>
              <div className="plan-features">
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>All fitness classes</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>All member events</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Full gym access 24/7</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Priority class booking</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Guest passes (2/month)</span>
                </div>
              </div>
              <Link to="/register" className="btn btn-primary plan-btn">Start Free Trial</Link>
            </div>

            <div className="membership-plan-card best-value-plan">
              <div className="plan-badge-best">Best Value</div>
              <div className="plan-header">
                <h3>1 Year Plan</h3>
              </div>
              <div className="plan-pricing">
                <div className="price-main">
                  <span className="currency">$</span>
                  <span className="price-amount">125</span>
                  <span className="price-period">/month</span>
                </div>
                <div className="price-comparison">
                  <span className="old-price">$165/mo</span>
                  <span className="savings-amount">Save $40/month</span>
                </div>
                <p className="price-note">Billed annually ($1,500 total)</p>
              </div>
              <div className="plan-features">
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>All fitness classes</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>All member events</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Full gym access 24/7</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Priority class booking</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Guest passes (4/month)</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Free nutrition consultation</span>
                </div>
              </div>
              <Link to="/register" className="btn btn-primary plan-btn">Start Free Trial</Link>
            </div>
          </div>

          {/* Money-Back Guarantee */}
          <div className="guarantee-section">
            <div className="guarantee-card">
              <div className="guarantee-icon">🛡️</div>
              <div className="guarantee-content">
                <h3 className="guarantee-title">30-Day Money-Back Guarantee</h3>
                <p className="guarantee-text">Not satisfied? Get a full refund within 30 days. No questions asked. We're confident you'll love GymFitness, but if you don't, we'll make it right.</p>
                <div className="guarantee-features">
                  <div className="guarantee-feature">
                    <span className="guarantee-check">✓</span>
                    <span>Full refund within 30 days</span>
                  </div>
                  <div className="guarantee-feature">
                    <span className="guarantee-check">✓</span>
                    <span>No questions asked</span>
                  </div>
                  <div className="guarantee-feature">
                    <span className="guarantee-check">✓</span>
                    <span>100% risk-free trial</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Member Only Events */}
          <div className="member-events-section">
            <div className="member-events-card">
              <div className="events-content">
                <div className="events-eyebrow">Community</div>
                <h2 className="events-title">Member Only Events</h2>
                <p className="events-text">Make new friends and get competitive with fun member events</p>
                <div className="events-list">
                  <div className="events-item">
                    <span className="events-check">✓</span>
                    <span>Friendly competitions</span>
                  </div>
                  <div className="events-item">
                    <span className="events-check">✓</span>
                    <span>Monthly challenges</span>
                  </div>
                  <div className="events-item">
                    <span className="events-check">✓</span>
                    <span>Summer potlucks and games</span>
                  </div>
                </div>
              </div>
              <div className="events-image-container">
                <img src="/2.jpg" alt="Member Events" className="events-image" />
                <div className="events-image-overlay"></div>
              </div>
            </div>
          </div>

          {/* Personal Training Add-on */}
          <div className="personal-training-section">
            <div className="training-card">
              <div className="training-image-container">
                <img src="/one-on-one.png" alt="Personal Training" className="training-image" />
                <div className="training-image-overlay"></div>
              </div>
              <div className="training-content-wrapper">
                <div className="training-header">
                  <div className="training-icon-large"></div>
                  <div>
                    <h3>Personal Training</h3>
                    <p className="training-tagline">One-on-one sessions tailored to your goals</p>
                  </div>
                </div>
                <div className="training-content">
                  <div className="training-benefits-grid">
                    <div className="training-benefit">
                      <span className="benefit-icon">✓</span>
                      <div>
                        <strong>Customized Plans</strong>
                        <p>Workout plans designed for you</p>
                      </div>
                    </div>
                    <div className="training-benefit">
                      <span className="benefit-icon">✓</span>
                      <div>
                        <strong>Expert Guidance</strong>
                        <p>Certified trainers by your side</p>
                      </div>
                    </div>
                    <div className="training-benefit">
                      <span className="benefit-icon">✓</span>
                      <div>
                        <strong>Progress Tracking</strong>
                        <p>Monitor your fitness journey</p>
                      </div>
                    </div>
                    <div className="training-benefit">
                      <span className="benefit-icon">✓</span>
                      <div>
                        <strong>Flexible Schedule</strong>
                        <p>Book sessions at your convenience</p>
                      </div>
                    </div>
                  </div>
                  <div className="training-pricing-box">
                    <span className="training-price-label">Starting at</span>
                    <div className="training-price-main">
                      <span className="training-currency">$</span>
                      <span className="training-amount">60</span>
                      <span className="training-unit">/session</span>
                    </div>
                    <button className="btn btn-secondary training-btn">Book Your Session</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section id="training" className="training-section">
        <div className="training-container">
          <div className="training-content-wrapper">
            <div className="training-text-content">
              <h2 className="section-title">Strength Training</h2>
              <p className="training-description">Crush any strength program with our suite of strength equipment</p>
              <ul className="training-features-list">
                <li className="training-feature-item">
                  <span className="feature-check">✓</span>
                  <span>Fully fitted powerlifting and strongman section</span>
                </li>
                <li className="training-feature-item">
                  <span className="feature-check">✓</span>
                  <span>Olympic lifting platforms, weights, and bars</span>
                </li>
                <li className="training-feature-item">
                  <span className="feature-check">✓</span>
                  <span>Dumbells ranging 5lbs-250lbs</span>
                </li>
              </ul>
            </div>
            <div className="training-video-container">
              <video 
                className="training-video"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              >
                <source src="/Gym_cinematic.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="training-video-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About GymFitness</h2>
          <p className="section-subtitle">Transforming lives through fitness, one workout at a time</p>

          {/* Hero About Content */}
          <div className="about-hero">
            <div className="about-hero-content">
              <h3 className="about-hero-title">Your Journey to Fitness Excellence Starts Here</h3>
              <p className="about-hero-text">At GymFitness, we believe that everyone deserves to achieve their fitness goals. With state-of-the-art equipment, expert trainers, and a supportive community, we provide the perfect environment for your transformation.</p>
              <p className="about-hero-text">Founded with a passion for health and wellness, GymFitness has been helping thousands of members reach their fitness goals for over a decade. Our commitment to excellence and innovation sets us apart in the fitness industry.</p>
            </div>
            <div className="about-hero-visual">
              <video 
                className="about-hero-video"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              >
                <source src="/gym_focus.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Stats Section */}
          <div className="about-stats-section">
            <div className="stat-card">
              <div className="stat-icon">🏆</div>
              <div className="stat-number">{yearsCounter.count}</div>
              <div className="stat-label">Years of Excellence</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-number">{membersCounter.count}</div>
              <div className="stat-label">Happy Members</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">💪</div>
              <div className="stat-number">{trainersCounter.count}</div>
              <div className="stat-label">Expert Trainers</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⏰</div>
              <div className="stat-number">24/7</div>
              <div className="stat-label">Access Available</div>
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="about-mvv">
            <div className="mvv-card">
              <div className="mvv-icon">🎯</div>
              <h4 className="mvv-title">Our Mission</h4>
              <p className="mvv-text">To empower individuals to achieve their fitness goals through personalized training, cutting-edge facilities, and unwavering support. We're committed to creating a welcoming environment where everyone can thrive.</p>
            </div>
            <div className="mvv-card">
              <div className="mvv-icon">🌟</div>
              <h4 className="mvv-title">Our Vision</h4>
              <p className="mvv-text">To become the leading fitness destination that transforms lives and builds stronger, healthier communities. We envision a world where fitness is accessible, enjoyable, and life-changing for everyone.</p>
            </div>
            <div className="mvv-card">
              <div className="mvv-icon">❤️</div>
              <h4 className="mvv-title">Our Values</h4>
              <p className="mvv-text">Excellence in everything we do, integrity in our relationships, innovation in our approach, and community support. These core values guide every decision we make and every interaction we have.</p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="about-why">
            <div className="why-header">
              <h3 className="about-why-title">Why Choose GymFitness?</h3>
              <p className="why-subtitle">Experience the difference that sets us apart from the rest</p>
            </div>
            
            <div className="why-grid">
              <div className="why-item">
                <div className="why-item-header">
                  <div className="why-icon-wrapper">
                    <div className="why-icon">🏋️</div>
                    <div className="why-icon-bg"></div>
                  </div>
                  <div className="why-number">01</div>
                </div>
                <h5 className="why-heading">World-Class Facilities</h5>
                <p className="why-text">State-of-the-art equipment and spacious workout areas designed for optimal performance and comfort. Our facilities feature the latest technology in fitness equipment.</p>
                <ul className="why-features">
                  <li>Premium cardio machines</li>
                  <li>Full free weights area</li>
                  <li>Functional training zone</li>
                </ul>
              </div>

              <div className="why-item featured-why">
                <div className="why-badge">Most Valued</div>
                <div className="why-item-header">
                  <div className="why-icon-wrapper">
                    <div className="why-icon">💪</div>
                    <div className="why-icon-bg"></div>
                  </div>
                  <div className="why-number">02</div>
                </div>
                <h5 className="why-heading">Expert Trainers</h5>
                <p className="why-text">Certified professionals with years of experience, dedicated to helping you achieve your fitness goals safely and effectively. Get personalized guidance every step of the way.</p>
                <ul className="why-features">
                  <li>Certified & experienced</li>
                  <li>Personalized training plans</li>
                  <li>Ongoing support & motivation</li>
                </ul>
              </div>

              <div className="why-item">
                <div className="why-item-header">
                  <div className="why-icon-wrapper">
                    <div className="why-icon">⏰</div>
                    <div className="why-icon-bg"></div>
                  </div>
                  <div className="why-number">03</div>
                </div>
                <h5 className="why-heading">Flexible Schedule</h5>
                <p className="why-text">Open 24/7 to fit your busy lifestyle. Work out when it's convenient for you, day or night. No more excuses - fitness on your terms.</p>
                <ul className="why-features">
                  <li>24/7 access</li>
                  <li>No time restrictions</li>
                  <li>Work around your schedule</li>
                </ul>
              </div>

              <div className="why-item">
                <div className="why-item-header">
                  <div className="why-icon-wrapper">
                    <div className="why-icon">👥</div>
                    <div className="why-icon-bg"></div>
                  </div>
                  <div className="why-number">04</div>
                </div>
                <h5 className="why-heading">Supportive Community</h5>
                <p className="why-text">Join a welcoming community of fitness enthusiasts who motivate and inspire each other every day. Together we achieve more.</p>
                <ul className="why-features">
                  <li>Friendly atmosphere</li>
                  <li>Group challenges & events</li>
                  <li>Success stories & motivation</li>
                </ul>
              </div>

              <div className="why-item">
                <div className="why-item-header">
                  <div className="why-icon-wrapper">
                    <div className="why-icon">💰</div>
                    <div className="why-icon-bg"></div>
                  </div>
                  <div className="why-number">05</div>
                </div>
                <h5 className="why-heading">Affordable Pricing</h5>
                <p className="why-text">Premium fitness experience at competitive prices. Flexible membership plans designed to fit every budget without compromising on quality.</p>
                <ul className="why-features">
                  <li>Flexible payment options</li>
                  <li>No hidden fees</li>
                  <li>Best value in town</li>
                </ul>
              </div>

              <div className="why-item">
                <div className="why-item-header">
                  <div className="why-icon-wrapper">
                    <div className="why-icon">🏆</div>
                    <div className="why-icon-bg"></div>
                  </div>
                  <div className="why-number">06</div>
                </div>
                <h5 className="why-heading">Proven Results</h5>
                <p className="why-text">Join thousands of members who have transformed their lives. Our proven programs and dedicated support ensure you reach your goals.</p>
                <ul className="why-features">
                  <li>95% member satisfaction</li>
                  <li>Real transformation stories</li>
                  <li>Track your progress</li>
                </ul>
              </div>
            </div>

            <div className="why-cta">
              <div className="why-cta-content">
                <h4 className="why-cta-title">Ready to Start Your Fitness Journey?</h4>
                <p className="why-cta-text">Join GymFitness today and experience the difference</p>
                <div className="why-cta-buttons">
                  <Link to="/register" className="btn btn-primary">Start Free Trial</Link>
                  <button className="btn btn-secondary">Schedule a Tour</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Classes Section */}
      <section id="classes" className="classes">
        <div className="container">
          <div className="classes-header">
            <h2 className="section-title">Popular Classes</h2>
            <p className="section-subtitle">Join our expert-led classes designed to challenge and inspire you</p>
          </div>
          
          <div className="classes-grid">
            <div className="class-card">
              <div className="class-image-wrapper">
                <div className="class-image class-yoga"></div>
                <div className="class-overlay"></div>
                <div className="class-badge">Most Popular</div>
                <div className="class-difficulty">
                  <span className="difficulty-label">Beginner</span>
                </div>
              </div>
              <div className="class-content">
                <div className="class-category">Mind & Body</div>
                <h3 className="class-title">Yoga & Meditation</h3>
                <p className="class-description">Find your inner peace and improve flexibility with our calming yoga sessions</p>
                <div className="class-info">
                  <div className="class-info-item">
                    <span className="info-icon">📅</span>
                    <span>Mon, Wed, Fri</span>
                  </div>
                  <div className="class-info-item">
                    <span className="info-icon">⏰</span>
                    <span>7:00 AM - 8:00 AM</span>
                  </div>
                  <div className="class-info-item">
                    <span className="info-icon">⏱️</span>
                    <span>60 min</span>
                  </div>
                  <div className="class-info-item">
                    <span className="info-icon">👤</span>
                    <span>Sarah Johnson</span>
                  </div>
                </div>
                <button className="btn btn-primary class-btn">Book Now</button>
              </div>
            </div>

            <div className="class-card">
              <div className="class-image-wrapper">
                <div className="class-image class-hiit"></div>
                <div className="class-overlay"></div>
                <div className="class-difficulty">
                  <span className="difficulty-label advanced">Advanced</span>
                </div>
              </div>
              <div className="class-content">
                <div className="class-category">Cardio</div>
                <h3 className="class-title">HIIT Training</h3>
                <p className="class-description">High-intensity interval training to maximize your calorie burn and boost endurance</p>
                <div className="class-info">
                  <div className="class-info-item">
                    <span className="info-icon">📅</span>
                    <span>Tue, Thu, Sat</span>
                  </div>
                  <div className="class-info-item">
                    <span className="info-icon">⏰</span>
                    <span>6:00 PM - 7:00 PM</span>
                  </div>
                  <div className="class-info-item">
                    <span className="info-icon">⏱️</span>
                    <span>45 min</span>
                  </div>
                  <div className="class-info-item">
                    <span className="info-icon">👤</span>
                    <span>Mike Chen</span>
                  </div>
                </div>
                <button className="btn btn-primary class-btn">Book Now</button>
              </div>
            </div>

            <div className="class-card">
              <div className="class-image-wrapper">
                <div className="class-image class-spin"></div>
                <div className="class-overlay"></div>
                <div className="class-difficulty">
                  <span className="difficulty-label intermediate">Intermediate</span>
                </div>
              </div>
              <div className="class-content">
                <div className="class-category">Cardio</div>
                <h3 className="class-title">Spin Class</h3>
                <p className="class-description">High-energy cycling sessions with motivating music and expert guidance</p>
                <div className="class-info">
                  <div className="class-info-item">
                    <span className="info-icon">📅</span>
                    <span>Daily</span>
                  </div>
                  <div className="class-info-item">
                    <span className="info-icon">⏰</span>
                    <span>5:30 AM - 6:30 AM</span>
                  </div>
                  <div className="class-info-item">
                    <span className="info-icon">⏱️</span>
                    <span>60 min</span>
                  </div>
                  <div className="class-info-item">
                    <span className="info-icon">👤</span>
                    <span>Emma Davis</span>
                  </div>
                </div>
                <button className="btn btn-primary class-btn">Book Now</button>
              </div>
            </div>

            <div className="class-card">
              <div className="class-image-wrapper">
                <div className="class-image class-strength"></div>
                <div className="class-overlay"></div>
                <div className="class-difficulty">
                  <span className="difficulty-label intermediate">Intermediate</span>
                </div>
              </div>
              <div className="class-content">
                <div className="class-category">Strength</div>
                <h3 className="class-title">Strength Training</h3>
                <p className="class-description">Build muscle and increase power with progressive resistance training</p>
                <div className="class-info">
                  <div className="class-info-item">
                    <span className="info-icon">📅</span>
                    <span>Mon - Fri</span>
                  </div>
                  <div className="class-info-item">
                    <span className="info-icon">⏰</span>
                    <span>8:00 AM - 9:00 AM</span>
                  </div>
                  <div className="class-info-item">
                    <span className="info-icon">⏱️</span>
                    <span>60 min</span>
                  </div>
                  <div className="class-info-item">
                    <span className="info-icon">👤</span>
                    <span>David Martinez</span>
                  </div>
                </div>
                <button className="btn btn-primary class-btn">Book Now</button>
              </div>
            </div>

            <div className="class-card">
              <div className="class-image-wrapper">
                <div className="class-image class-pilates"></div>
                <div className="class-overlay"></div>
                <div className="class-difficulty">
                  <span className="difficulty-label">Beginner</span>
                </div>
              </div>
              <div className="class-content">
                <div className="class-category">Core & Flexibility</div>
                <h3 className="class-title">Pilates</h3>
                <p className="class-description">Strengthen your core and improve posture with controlled movements</p>
                <div className="class-info">
                  <div className="class-info-item">
                    <span className="info-icon">📅</span>
                    <span>Tue, Thu</span>
                  </div>
                  <div className="class-info-item">
                    <span className="info-icon">⏰</span>
                    <span>10:00 AM - 11:00 AM</span>
                  </div>
                  <div className="class-info-item">
                    <span className="info-icon">⏱️</span>
                    <span>50 min</span>
                  </div>
                  <div className="class-info-item">
                    <span className="info-icon">👤</span>
                    <span>Lisa Anderson</span>
                  </div>
                </div>
                <button className="btn btn-primary class-btn">Book Now</button>
              </div>
            </div>

            <div className="class-card">
              <div className="class-image-wrapper">
                <div className="class-image class-boxing"></div>
                <div className="class-overlay"></div>
                <div className="class-difficulty">
                  <span className="difficulty-label advanced">Advanced</span>
                </div>
              </div>
              <div className="class-content">
                <div className="class-category">Combat</div>
                <h3 className="class-title">Boxing & Kickboxing</h3>
                <p className="class-description">Release stress and build strength with high-energy combat training</p>
                <div className="class-info">
                  <div className="class-info-item">
                    <span className="info-icon">📅</span>
                    <span>Mon, Wed, Fri</span>
                  </div>
                  <div className="class-info-item">
                    <span className="info-icon">⏰</span>
                    <span>7:00 PM - 8:00 PM</span>
                  </div>
                  <div className="class-info-item">
                    <span className="info-icon">⏱️</span>
                    <span>55 min</span>
                  </div>
                  <div className="class-info-item">
                    <span className="info-icon">👤</span>
                    <span>James Wilson</span>
                  </div>
                </div>
                <button className="btn btn-primary class-btn">Book Now</button>
              </div>
            </div>
          </div>

          <div className="classes-cta">
            <p className="cta-text">Want to see all available classes?</p>
            <button className="btn btn-secondary btn-large">View Full Schedule</button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Start Your Fitness Journey?</h2>
          <p>Join GymFitness today and get your first week free!</p>
          <Link to="/register" className="btn btn-primary btn-large">Get Started Now</Link>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="logo">Gym<span className="logo-accent">Fitness</span></h3>
              <p>Your premier destination for fitness and wellness</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <a href="#benefits">Gym Benefits</a>
              <a href="#membership">Membership</a>
              <a href="#training">Training</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
              <a href="#classes">Classes</a>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>📍 123 Fitness Street</p>
              <p>📞 (555) 123-4567</p>
              <p>✉️ info@gymfitness.com</p>
            </div>
            <div className="footer-section">
              <h4>Hours</h4>
              <p>Monday - Friday: 5:00 AM - 11:00 PM</p>
              <p>Saturday - Sunday: 6:00 AM - 10:00 PM</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 GymFitness. All rights reserved.</p>
          </div>
      </div>
      </footer>
    </div>
  )
}

export default Home
