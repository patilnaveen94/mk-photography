import React from 'react';
import { Link } from 'react-router-dom';
import { FaCamera, FaPlane, FaHeart, FaBaby, FaBuilding, FaGift } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaHeart />,
      title: 'Wedding Photography',
      description: 'Capture your special day with stunning, timeless photographs that tell your love story.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      inclusions: [
        'Pre-wedding consultation',
        '8-10 hours coverage',
        '500+ edited photos',
        'Online gallery',
        'USB with high-res images',
        'Print release'
      ],
      packages: [
        { name: 'Basic', price: '₹99,000', features: ['6 hours coverage', '300 photos', 'Online gallery'] },
        { name: 'Premium', price: '₹1,49,000', features: ['8 hours coverage', '500 photos', 'Engagement shoot', 'Album'] },
        { name: 'Luxury', price: '₹2,07,000', features: ['10 hours coverage', '800 photos', 'Two photographers', 'Premium album'] }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      ]
    },
    {
      id: 2,
      icon: <FaCamera />,
      title: 'Pre-Wedding Shoots',
      description: 'Romantic couple photography sessions to celebrate your engagement and love.',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      inclusions: [
        '2-3 hour session',
        'Multiple locations',
        '100+ edited photos',
        'Online gallery',
        'Styling consultation',
        'Same day preview'
      ],
      packages: [
        { name: 'Classic', price: '₹33,000', features: ['2 hours', '1 location', '50 photos'] },
        { name: 'Deluxe', price: '₹49,000', features: ['3 hours', '2 locations', '100 photos'] },
        { name: 'Premium', price: '₹66,000', features: ['4 hours', '3 locations', '150 photos', 'Drone shots'] }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      ]
    },
    {
      id: 3,
      icon: <FaBaby />,
      title: 'Birthday & Baby Photography',
      description: 'Precious moments of your little ones captured with care and creativity.',
      image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      inclusions: [
        '1-2 hour session',
        'Props and decorations',
        '75+ edited photos',
        'Online gallery',
        'Family group shots',
        'Individual portraits'
      ],
      packages: [
        { name: 'Mini', price: '₹20,000', features: ['1 hour', '30 photos', 'Basic props'] },
        { name: 'Standard', price: '₹33,000', features: ['1.5 hours', '75 photos', 'Custom props'] },
        { name: 'Deluxe', price: '₹49,000', features: ['2 hours', '100 photos', 'Themed setup', 'Family shots'] }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      ]
    },
    {
      id: 4,
      icon: <FaBuilding />,
      title: 'Corporate Events',
      description: 'Professional documentation of your business events, conferences, and corporate gatherings.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      inclusions: [
        'Full event coverage',
        'Candid and posed shots',
        '200+ edited photos',
        'Same day highlights',
        'Online gallery',
        'Commercial usage rights'
      ],
      packages: [
        { name: 'Half Day', price: '₹49,000', features: ['4 hours', '150 photos', 'Basic editing'] },
        { name: 'Full Day', price: '₹83,000', features: ['8 hours', '300 photos', 'Advanced editing'] },
        { name: 'Multi-Day', price: '₹1,49,000', features: ['2-3 days', '500+ photos', 'Video highlights'] }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      ]
    },
    {
      id: 5,
      icon: <FaGift />,
      title: 'Product Photography',
      description: 'High-quality product images for e-commerce, catalogs, and marketing materials.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      inclusions: [
        'Studio lighting setup',
        'Multiple angles',
        '50+ edited photos',
        'White background',
        'Lifestyle shots',
        'Commercial license'
      ],
      packages: [
        { name: 'Basic', price: '₹25,000', features: ['10 products', '3 angles each', 'White background'] },
        { name: 'Standard', price: '₹41,000', features: ['20 products', '5 angles each', 'Lifestyle shots'] },
        { name: 'Premium', price: '₹66,000', features: ['30 products', 'Unlimited angles', 'Custom backgrounds'] }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      ]
    },
    {
      id: 6,
      icon: <FaPlane />,
      title: '4K Videography',
      description: 'Cinematic video production in ultra-high definition for all your special events.',
      image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      inclusions: [
        '4K recording',
        'Professional audio',
        'Color grading',
        'Multiple camera angles',
        'Drone footage',
        'Final edited video'
      ],
      packages: [
        { name: 'Highlight', price: '₹66,000', features: ['3-5 minute video', 'Single camera', 'Basic editing'] },
        { name: 'Documentary', price: '₹1,24,000', features: ['15-20 minute video', 'Multi-camera', 'Advanced editing'] },
        { name: 'Cinematic', price: '₹2,07,000', features: ['30+ minute video', 'Drone footage', 'Professional audio'] }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      ]
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <h1>Our Services</h1>
            <p>Professional photography and videography for every occasion</p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section services-list">
        <div className="container">
          {services.map((service, index) => (
            <div key={service.id} className={`service-detail ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-content">
                <div className="service-header">
                  <div className="service-icon">{service.icon}</div>
                  <h2>{service.title}</h2>
                </div>
                <p className="service-description">{service.description}</p>
                
                <div className="service-inclusions">
                  <h3>What's Included:</h3>
                  <ul>
                    {service.inclusions.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="service-packages">
                  <h3>Packages:</h3>
                  <div className="packages-grid">
                    {service.packages.map((pkg, idx) => (
                      <div key={idx} className="package-card">
                        <h4>{pkg.name}</h4>
                        <div className="package-price">{pkg.price}</div>
                        <ul>
                          {pkg.features.map((feature, fidx) => (
                            <li key={fidx}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="service-gallery">
                  <h3>Sample Work:</h3>
                  <div className="gallery-grid">
                    {service.gallery.map((image, idx) => (
                      <div key={idx} className="gallery-item">
                        <img src={image} alt={`${service.title} sample ${idx + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="service-cta">
                  <Link to="/contact" className="btn btn-primary">Book This Service</Link>
                  <Link to="/portfolio" className="btn btn-secondary">View Portfolio</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Book Your Session?</h2>
            <p>Contact us today for a free consultation and custom quote</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Get Quote</Link>
              <a href="tel:+919538684748" className="btn btn-secondary">Call Now</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;