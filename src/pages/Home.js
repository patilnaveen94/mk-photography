import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPlay, FaStar, FaCamera, FaVideo, FaPlane, FaClock, FaAward, FaHeart } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      title: 'Capturing Your Perfect Moments',
      subtitle: 'Professional Photography & Videography'
    },
    {
      type: 'image', 
      src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      title: 'Wedding Dreams Come True',
      subtitle: 'Timeless Memories, Beautifully Captured'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      title: 'Corporate Excellence',
      subtitle: 'Professional Event Documentation'
    }
  ];

  const services = [
    { icon: <FaCamera />, title: 'Wedding Photography', desc: 'Capture your special day with stunning photos' },
    { icon: <FaVideo />, title: '4K Videography', desc: 'Cinematic videos in ultra-high definition' },
    { icon: <FaPlane />, title: 'Drone Photography', desc: 'Aerial shots for unique perspectives' },
    { icon: <FaHeart />, title: 'Pre-Wedding Shoots', desc: 'Romantic couple photography sessions' }
  ];

  const portfolio = [
    'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  ];

  const testimonials = [
    { name: 'Sarah Johnson', text: 'Absolutely amazing work! They captured our wedding perfectly.', rating: 5 },
    { name: 'Mike Chen', text: 'Professional service and stunning results. Highly recommended!', rating: 5 },
    { name: 'Emily Davis', text: 'The drone shots were incredible. Worth every penny!', rating: 5 }
  ];

  const whyChooseUs = [
    { icon: <FaPlane />, title: 'Drone Technology', desc: 'Latest aerial photography equipment' },
    { icon: <FaVideo />, title: '4K Quality', desc: 'Ultra-high definition video recording' },
    { icon: <FaClock />, title: 'Fast Delivery', desc: '48-hour turnaround for edited photos' },
    { icon: <FaAward />, title: '5+ Years Experience', desc: 'Proven track record of excellence' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-slider">
          {heroSlides.map((slide, index) => (
            <div 
              key={index}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.src})` }}
            >
              <div className="hero-overlay">
                <div className="container">
                  <div className="hero-content">
                    <h1>{slide.title}</h1>
                    <p>{slide.subtitle}</p>
                    <div className="hero-buttons">
                      <Link to="/contact" className="btn btn-primary">Book Now</Link>
                      <Link to="/portfolio" className="btn btn-secondary">View Portfolio</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="hero-indicators">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={index === currentSlide ? 'active' : ''}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="section about-preview">
        <div className="container">
          <div className="grid grid-2">
            <div className="about-content">
              <h2>About MK Photography</h2>
              <p>With over 5 years of experience in professional photography and videography, we specialize in capturing life's most precious moments with artistic excellence and technical precision.</p>
              <p>Our team combines creativity with cutting-edge technology to deliver stunning visuals that tell your unique story.</p>
              <Link to="/about" className="btn btn-primary">Learn More</Link>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1554048612-b6a482b224b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="About Us" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section services-overview">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Professional photography and videography services for every occasion</p>
          <div className="grid grid-4">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/services" className="btn btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Featured Portfolio */}
      <section className="section portfolio-preview">
        <div className="container">
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle">A glimpse of our recent photography and videography projects</p>
          <div className="portfolio-grid">
            {portfolio.map((image, index) => (
              <div key={index} className="portfolio-item">
                <img src={image} alt={`Portfolio ${index + 1}`} />
                <div className="portfolio-overlay">
                  <FaPlay />
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/portfolio" className="btn btn-primary">View Full Portfolio</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="grid grid-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p>"{testimonial.text}"</p>
                <h4>{testimonial.name}</h4>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/testimonials" className="btn btn-primary">Read More Reviews</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-choose-us">
        <div className="container">
          <h2 className="section-title">Why Choose PhotoPro?</h2>
          <div className="grid grid-4">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="cta-strip">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Capture Your Moments?</h2>
            <p>Get in touch for a free consultation and quote</p>
            <div className="cta-buttons">
              <a href="https://wa.me/919538684748" className="btn btn-primary">WhatsApp</a>
              <a href="tel:+919538684748" className="btn btn-secondary">Call Now</a>
              <Link to="/contact" className="btn btn-primary">Get Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;