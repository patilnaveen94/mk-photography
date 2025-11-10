import React, { useState, useEffect } from 'react';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaGoogle } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah & Michael Johnson',
      event: 'Wedding Photography',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      text: 'PhotoPro exceeded all our expectations! They captured every precious moment of our wedding day with such artistry and professionalism. The photos are absolutely stunning, and we couldn\'t be happier with the results.',
      date: 'October 2023',
      location: 'Beverly Hills, CA'
    },
    {
      id: 2,
      name: 'Emily Chen',
      event: 'Pre-Wedding Shoot',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      text: 'The pre-wedding shoot was magical! The photographer made us feel so comfortable and natural. The drone shots were incredible, and the editing was flawless. We received so many compliments on our engagement photos.',
      date: 'September 2023',
      location: 'Malibu, CA'
    },
    {
      id: 3,
      name: 'David Rodriguez',
      event: 'Corporate Event',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      text: 'Professional, punctual, and incredibly talented. PhotoPro documented our company\'s annual conference perfectly. The photos captured the energy and professionalism of our event. Highly recommend for corporate photography.',
      date: 'August 2023',
      location: 'Los Angeles, CA'
    },
    {
      id: 4,
      name: 'Jessica & Mark Thompson',
      event: 'Baby Photography',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      text: 'Our newborn session was absolutely perfect! The photographer was so gentle and patient with our baby. The props and setup were beautiful, and the final photos are treasures we\'ll keep forever.',
      date: 'November 2023',
      location: 'Santa Monica, CA'
    },
    {
      id: 5,
      name: 'Robert Kim',
      event: 'Product Photography',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      text: 'Outstanding product photography for our e-commerce business. The attention to detail and lighting was exceptional. Our sales increased significantly after using these professional photos on our website.',
      date: 'July 2023',
      location: 'Pasadena, CA'
    },
    {
      id: 6,
      name: 'Amanda Wilson',
      event: 'Birthday Party',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      text: 'My daughter\'s first birthday party was captured beautifully! Every smile, every moment of joy was preserved perfectly. The candid shots were amazing, and the family photos turned out gorgeous.',
      date: 'December 2023',
      location: 'Long Beach, CA'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '1000+', label: 'Events Captured' },
    { number: '50,000+', label: 'Photos Delivered' },
    { number: '4.9/5', label: 'Average Rating' }
  ];

  const googleReviews = [
    {
      name: 'Lisa Martinez',
      rating: 5,
      text: 'Incredible work! Professional and creative team.',
      date: '2 weeks ago'
    },
    {
      name: 'John Davis',
      rating: 5,
      text: 'Best photography service in the area. Highly recommended!',
      date: '1 month ago'
    },
    {
      name: 'Maria Garcia',
      rating: 5,
      text: 'Amazing quality and fast delivery. Will definitely book again.',
      date: '3 weeks ago'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="testimonials-page">
      {/* Hero Section */}
      <section className="testimonials-hero">
        <div className="container">
          <div className="testimonials-hero-content">
            <h1>Client Testimonials</h1>
            <p>Hear what our clients say about their experience with PhotoPro</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Testimonials Slider */}
      <section className="section testimonials-slider">
        <div className="container">
          <div className="slider-container">
            <button className="slider-btn prev" onClick={prevSlide}>
              <FaChevronLeft />
            </button>
            
            <div className="testimonial-slide">
              <div className="testimonial-content">
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>
                <p className="testimonial-text">
                  {testimonials[currentSlide].text}
                </p>
                <div className="testimonial-rating">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className="testimonial-author">
                  <img 
                    src={testimonials[currentSlide].image} 
                    alt={testimonials[currentSlide].name}
                  />
                  <div className="author-info">
                    <h3>{testimonials[currentSlide].name}</h3>
                    <p className="event-type">{testimonials[currentSlide].event}</p>
                    <p className="testimonial-meta">
                      {testimonials[currentSlide].date} • {testimonials[currentSlide].location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button className="slider-btn next" onClick={nextSlide}>
              <FaChevronRight />
            </button>
          </div>

          <div className="slider-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="section all-testimonials">
        <div className="container">
          <h2 className="section-title">All Client Reviews</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="card-header">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div className="client-info">
                    <h3>{testimonial.name}</h3>
                    <p className="event-type">{testimonial.event}</p>
                    <div className="rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-footer">
                  <span>{testimonial.date}</span>
                  <span>{testimonial.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="section google-reviews">
        <div className="container">
          <div className="google-header">
            <FaGoogle className="google-icon" />
            <h2>Google Reviews</h2>
            <div className="google-rating">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <span>4.9 out of 5 stars</span>
            </div>
          </div>
          
          <div className="google-reviews-grid">
            {googleReviews.map((review, index) => (
              <div key={index} className="google-review-card">
                <div className="review-header">
                  <h4>{review.name}</h4>
                  <div className="review-rating">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
                <p>{review.text}</p>
                <span className="review-date">{review.date}</span>
              </div>
            ))}
          </div>
          
          <div className="google-cta">
            <a 
              href="https://www.google.com/search?q=photopro+reviews" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View All Google Reviews
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="testimonials-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Create Your Own Success Story?</h2>
            <p>Join hundreds of satisfied clients who chose PhotoPro for their special moments</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Book Your Session</a>
              <a href="tel:+1234567890" className="btn btn-secondary">Call Now</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;