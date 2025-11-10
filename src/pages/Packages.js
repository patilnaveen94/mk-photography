import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaTimes, FaCamera, FaVideo, FaPlane, FaBook, FaClock, FaUsers } from 'react-icons/fa';
import './Packages.css';

const Packages = () => {
  const packages = [
    {
      id: 'silver',
      name: 'Silver Package',
      price: '₹74,000',
      popular: false,
      color: '#C0C0C0',
      icon: <FaCamera />,
      description: 'Perfect for intimate celebrations and smaller events',
      features: {
        hours: '4 Hours Coverage',
        deliverables: '200+ Edited Photos',
        cameras: '1 Professional Camera',
        drone: false,
        album: false,
        videography: false,
        locations: '1 Location',
        photographers: '1 Photographer',
        turnaround: '7 Days',
        prints: '10 Prints (5x7)',
        onlineGallery: true,
        backup: true
      },
      inclusions: [
        '4 hours professional photography',
        '200+ high-resolution edited photos',
        'Online gallery for 1 year',
        '10 professional prints (5x7)',
        'USB drive with all images',
        'Basic photo editing and color correction',
        'Personal consultation before event'
      ],
      bestFor: ['Small parties', 'Intimate gatherings', 'Portrait sessions', 'Budget-conscious clients']
    },
    {
      id: 'gold',
      name: 'Gold Package',
      price: '₹1,24,000',
      popular: true,
      color: '#FFD700',
      icon: <FaVideo />,
      description: 'Most popular choice for weddings and major celebrations',
      features: {
        hours: '8 Hours Coverage',
        deliverables: '500+ Photos + Highlight Video',
        cameras: '2 Professional Cameras',
        drone: true,
        album: '50-page Premium Album',
        videography: '3-5 min Highlight Reel',
        locations: '2 Locations',
        photographers: '1 Photographer + Assistant',
        turnaround: '5 Days',
        prints: '25 Prints (8x10)',
        onlineGallery: true,
        backup: true
      },
      inclusions: [
        '8 hours comprehensive coverage',
        '500+ high-resolution edited photos',
        '3-5 minute cinematic highlight video',
        'Drone photography and videography',
        '50-page premium photo album',
        '25 professional prints (8x10)',
        'Online gallery for 2 years',
        'USB drive with all content',
        'Advanced editing and color grading',
        'Pre-event consultation and planning'
      ],
      bestFor: ['Weddings', 'Large celebrations', 'Corporate events', 'Multi-location shoots']
    },
    {
      id: 'platinum',
      name: 'Platinum Package',
      price: '₹1,90,000',
      popular: false,
      color: '#E5E4E2',
      icon: <FaPlane />,
      description: 'Ultimate luxury experience with premium features',
      features: {
        hours: '12 Hours Coverage',
        deliverables: '800+ Photos + Full Documentary',
        cameras: '3 Professional Cameras',
        drone: true,
        album: '100-page Luxury Album',
        videography: '15-20 min Documentary',
        locations: 'Unlimited Locations',
        photographers: '2 Photographers',
        turnaround: '3 Days',
        prints: '50 Prints (Various Sizes)',
        onlineGallery: true,
        backup: true
      },
      inclusions: [
        '12 hours full-day coverage',
        '800+ high-resolution edited photos',
        '15-20 minute cinematic documentary',
        'Extensive drone coverage',
        '100-page luxury leather-bound album',
        '50 professional prints (various sizes)',
        'Online gallery for lifetime',
        'USB + Cloud storage backup',
        'Professional editing and retouching',
        'Engagement/pre-event shoot included',
        'Same-day preview (50 photos)',
        'Dedicated project manager'
      ],
      bestFor: ['Luxury weddings', 'Destination events', 'Multi-day celebrations', 'Premium clients']
    }
  ];

  const addOns = [
    { name: 'Additional Hour', price: '₹12,000', icon: <FaClock /> },
    { name: 'Extra Photographer', price: '₹25,000', icon: <FaUsers /> },
    { name: 'Drone Add-on', price: '₹16,000', icon: <FaPlane /> },
    { name: 'Rush Delivery (24hrs)', price: '₹20,000', icon: <FaClock /> },
    { name: 'Additional Album', price: '₹33,000', icon: <FaBook /> },
    { name: 'Extended Video (30min)', price: '₹41,000', icon: <FaVideo /> }
  ];

  const FeatureRow = ({ label, silver, gold, platinum }) => (
    <tr>
      <td className="feature-label">{label}</td>
      <td className="feature-value">
        {typeof silver === 'boolean' ? (
          silver ? <FaCheck className="check" /> : <FaTimes className="cross" />
        ) : (
          silver
        )}
      </td>
      <td className="feature-value">
        {typeof gold === 'boolean' ? (
          gold ? <FaCheck className="check" /> : <FaTimes className="cross" />
        ) : (
          gold
        )}
      </td>
      <td className="feature-value">
        {typeof platinum === 'boolean' ? (
          platinum ? <FaCheck className="check" /> : <FaTimes className="cross" />
        ) : (
          platinum
        )}
      </td>
    </tr>
  );

  return (
    <div className="packages-page">
      {/* Hero Section */}
      <section className="packages-hero">
        <div className="container">
          <div className="packages-hero-content">
            <h1>Photography Packages</h1>
            <p>Choose the perfect package for your special occasion</p>
          </div>
        </div>
      </section>

      {/* Package Cards */}
      <section className="section packages-cards">
        <div className="container">
          <div className="packages-grid">
            {packages.map(pkg => (
              <div key={pkg.id} className={`package-card ${pkg.popular ? 'popular' : ''}`}>
                {pkg.popular && <div className="popular-badge">Most Popular</div>}
                
                <div className="package-header" style={{ borderTopColor: pkg.color }}>
                  <div className="package-icon" style={{ color: pkg.color }}>
                    {pkg.icon}
                  </div>
                  <h3>{pkg.name}</h3>
                  <div className="package-price">{pkg.price}</div>
                  <p className="package-description">{pkg.description}</p>
                </div>

                <div className="package-features">
                  <div className="feature-highlight">
                    <strong>{pkg.features.hours}</strong>
                    <span>{pkg.features.deliverables}</span>
                  </div>
                </div>

                <div className="package-inclusions">
                  <h4>What's Included:</h4>
                  <ul>
                    {pkg.inclusions.map((item, index) => (
                      <li key={index}>
                        <FaCheck className="check-icon" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="package-best-for">
                  <h4>Best For:</h4>
                  <div className="best-for-tags">
                    {pkg.bestFor.map((item, index) => (
                      <span key={index} className="tag">{item}</span>
                    ))}
                  </div>
                </div>

                <div className="package-cta">
                  <Link to="/contact" className="btn btn-primary">Choose Package</Link>
                  <Link to="/contact" className="btn btn-secondary">Get Quote</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section comparison-table">
        <div className="container">
          <h2 className="section-title">Package Comparison</h2>
          <div className="table-wrapper">
            <table className="comparison-table-content">
              <thead>
                <tr>
                  <th>Features</th>
                  <th>Silver</th>
                  <th>Gold</th>
                  <th>Platinum</th>
                </tr>
              </thead>
              <tbody>
                <FeatureRow 
                  label="Coverage Hours" 
                  silver="4 Hours" 
                  gold="8 Hours" 
                  platinum="12 Hours" 
                />
                <FeatureRow 
                  label="Edited Photos" 
                  silver="200+" 
                  gold="500+" 
                  platinum="800+" 
                />
                <FeatureRow 
                  label="Professional Cameras" 
                  silver="1" 
                  gold="2" 
                  platinum="3" 
                />
                <FeatureRow 
                  label="Drone Coverage" 
                  silver={false} 
                  gold={true} 
                  platinum={true} 
                />
                <FeatureRow 
                  label="Photo Album" 
                  silver={false} 
                  gold="50-page Premium" 
                  platinum="100-page Luxury" 
                />
                <FeatureRow 
                  label="Videography" 
                  silver={false} 
                  gold="3-5 min Highlight" 
                  platinum="15-20 min Documentary" 
                />
                <FeatureRow 
                  label="Photographers" 
                  silver="1" 
                  gold="1 + Assistant" 
                  platinum="2 Photographers" 
                />
                <FeatureRow 
                  label="Turnaround Time" 
                  silver="7 Days" 
                  gold="5 Days" 
                  platinum="3 Days" 
                />
                <FeatureRow 
                  label="Online Gallery" 
                  silver={true} 
                  gold={true} 
                  platinum={true} 
                />
                <FeatureRow 
                  label="Backup Storage" 
                  silver={true} 
                  gold={true} 
                  platinum={true} 
                />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section add-ons">
        <div className="container">
          <h2 className="section-title">Add-On Services</h2>
          <p className="section-subtitle">Enhance your package with additional services</p>
          <div className="add-ons-grid">
            {addOns.map((addon, index) => (
              <div key={index} className="addon-card">
                <div className="addon-icon">{addon.icon}</div>
                <h3>{addon.name}</h3>
                <div className="addon-price">{addon.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="packages-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Book Your Package?</h2>
            <p>Contact us for a personalized quote and consultation</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Get Custom Quote</Link>
              <a href="tel:+919538684748" className="btn btn-secondary">Call for Consultation</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;