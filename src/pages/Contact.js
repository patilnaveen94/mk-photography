import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaClock, FaCheckCircle } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    eventDate: '',
    location: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const eventTypes = [
    'Wedding',
    'Pre-Wedding Shoot',
    'Birthday Party',
    'Baby Photography',
    'Corporate Event',
    'Product Photography',
    'Other'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        eventType: '',
        eventDate: '',
        location: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1>Get In Touch</h1>
            <p>Ready to capture your special moments? Let's discuss your photography needs</p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section contact-main">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and we'll get back to you within 24 hours</p>

              {isSubmitted ? (
                <div className="success-message">
                  <FaCheckCircle />
                  <h3>Thank You!</h3>
                  <p>Your message has been sent successfully. We'll contact you soon!</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="eventType">Event Type *</label>
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select event type</option>
                        {eventTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="eventDate">Event Date</label>
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="location">Event Location</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="City, State or Venue Name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Tell us more about your event, specific requirements, or any questions you have..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="contact-info-section">
              <h2>Contact Information</h2>

              <div className="contact-info-grid">
                <div className="contact-info-item">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div className="contact-details">
                    <h3>Phone</h3>
                    <p>9538684748</p>
                    <a href="tel:9538684748" className="contact-link">Call Now</a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-details">
                    <h3>Email</h3>
                    <p>mkphotgraphy@gmail.com</p>
                    <a href="mailto:mkphotgraphy@gmail.com" className="contact-link">Send Email</a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-details">
                    <h3>Address</h3>
                    <p>Khajjidoni<br />Bagalkot 587204</p>
                    <a href="https://www.google.com/maps/place/Khajjidoni,+Karnataka+587204/@16.1728302,75.4302102,14z/data=!4m15!1m8!3m7!1s0x3bc765cc61e4c439:0x2cdb79f03c725973!2sKhajjidoni,+Karnataka+587204!3b1!8m2!3d16.175708!4d75.4519516!16s%2Fg%2F11vj7f64r!3m5!1s0x3bc765cc61e4c439:0x2cdb79f03c725973!8m2!3d16.175708!4d75.4519516!16s%2Fg%2F11vj7f64r?entry=ttu&g_ep=EgoyMDI1MTEwNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="contact-link">Get Directions</a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon">
                    <FaClock />
                  </div>
                  <div className="contact-details">
                    <h3>Business Hours</h3>
                    <p>Mon - Fri: 9:00 AM - 6:00 PM<br />Sat - Sun: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="quick-contact">
                <h3>Quick Contact</h3>
                <div className="quick-contact-buttons">
                  <a
                    href="https://wa.me/919538684748"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="quick-btn whatsapp"
                  >
                    <FaWhatsapp />
                    WhatsApp
                  </a>
                  <a
                    href="tel:9538684748"
                    className="quick-btn phone"
                  >
                    <FaPhone />
                    Call Now
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="social-media">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="#" aria-label="Facebook"><FaFacebook /></a>
                  <a href="#" aria-label="Instagram"><FaInstagram /></a>
                  <a href="#" aria-label="YouTube"><FaYoutube /></a>
                  <a href="#" aria-label="Twitter"><FaTwitter /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="map-section">
        <div className="container">
          <h2 className="section-title">Find Our Studio</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.676097951576!2d75.6559312749323!3d16.199482035054998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc7c5e5530da9b7%3A0x29ebdc96350d77c1!2sKhajjidoni%2C%20Karnataka%20587402!5e0!3m2!1sen!2sin!4v1731256920000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PhotoPro Studio Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How far in advance should I book?</h3>
              <p>We recommend booking 2-3 months in advance for weddings and 2-4 weeks for other events to ensure availability.</p>
            </div>
            <div className="faq-item">
              <h3>Do you travel for events?</h3>
              <p>Yes! We travel throughout California and beyond. Travel fees may apply for locations outside our local area.</p>
            </div>
            <div className="faq-item">
              <h3>How long until I receive my photos?</h3>
              <p>Turnaround time varies by package: Silver (7 days), Gold (5 days), Platinum (3 days). Rush delivery available.</p>
            </div>
            <div className="faq-item">
              <h3>Can I customize a package?</h3>
              <p>Absolutely! We offer custom packages tailored to your specific needs and budget. Contact us for a personalized quote.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;