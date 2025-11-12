import React from 'react';
import { FaCamera, FaAward, FaUsers, FaHeart } from 'react-icons/fa';
import './About.css';

const About = () => {
  const team = [
    {
      name: 'John Smith',
      role: 'Lead Photographer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: '10+ years experience in wedding and portrait photography'
    },
    {
      name: 'Sarah Johnson',
      role: 'Videographer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Specialist in cinematic wedding films and corporate videos'
    },
    {
      name: 'Mike Chen',
      role: 'Drone Pilot',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Licensed drone operator with expertise in aerial cinematography'
    }
  ];

  const equipment = [
    { name: 'Canon EOS R5', type: 'Camera', image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { name: 'DJI Mavic 3', type: 'Drone', image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { name: 'Sony FX3', type: '4K Camera', image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { name: 'Professional Lighting', type: 'Equipment', image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
  ];

  const achievements = [
    { icon: <FaAward />, title: '500+ Happy Couples', desc: 'Weddings captured with perfection' },
    { icon: <FaUsers />, title: '1000+ Events', desc: 'Corporate and social events documented' },
    { icon: <FaHeart />, title: '5-Star Rating', desc: 'Consistently rated by our clients' },
    { icon: <FaCamera />, title: '50,000+ Photos', desc: 'Delivered to satisfied customers' }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>About MK Photography</h1>
            <p>Passionate storytellers capturing life's most precious moments</p>
          </div>
        </div>
      </section>

      {/* Business Story */}
      <section className="section business-story">
        <div className="container">
          <div className="grid grid-2">
            <div className="story-content">
              <h2>Our Story</h2>
              <p>Founded in 2018, MK Photography began as a passion project between two friends who shared a love for capturing beautiful moments. What started as weekend wedding photography has grown into a full-service photography and videography studio.</p>
              <p>We believe that every moment tells a story, and our mission is to preserve those stories through stunning visuals that you'll treasure forever. Our team combines artistic vision with technical expertise to deliver exceptional results.</p>
              <p>Over the years, we've had the privilege of documenting thousands of weddings, corporate events, and special occasions, building lasting relationships with our clients along the way.</p>
            </div>
            <div className="story-image">
              <img src="https://images.unsplash.com/photo-1556484687-30636164638b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Our Story" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section mission-vision">
        <div className="container">
          <div className="grid grid-2">
            <div className="mission-card">
              <h3>Our Mission</h3>
              <p>To capture and preserve life's most precious moments through exceptional photography and videography, creating timeless memories that families will cherish for generations.</p>
            </div>
            <div className="vision-card">
              <h3>Our Vision</h3>
              <p>To be the most trusted and sought-after photography studio, known for our creativity, professionalism, and ability to tell unique stories through our lens.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">Talented professionals dedicated to capturing your perfect moments</p>
          <div className="grid grid-3">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <h4>{member.role}</h4>
                  <p>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Showcase */}
      <section className="section equipment-section">
        <div className="container">
          <h2 className="section-title">Professional Equipment</h2>
          <p className="section-subtitle">State-of-the-art gear for exceptional results</p>
          <div className="grid grid-4">
            {equipment.map((item, index) => (
              <div key={index} className="equipment-card">
                <div className="equipment-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="equipment-info">
                  <h3>{item.name}</h3>
                  <p>{item.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section achievements">
        <div className="container">
          <h2 className="section-title">Our Achievements</h2>
          <div className="grid grid-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-icon">{achievement.icon}</div>
                <h3>{achievement.title}</h3>
                <p>{achievement.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="section behind-scenes">
        <div className="container">
          <h2 className="section-title">Behind the Scenes</h2>
          <p className="section-subtitle">A glimpse into our creative process</p>
          <div className="behind-scenes-grid">
            <div className="behind-scene-item">
              <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Behind the scenes 1" />
            </div>
            <div className="behind-scene-item">
              <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Behind the scenes 2" />
            </div>
            <div className="behind-scene-item">
              <img src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Behind the scenes 3" />
            </div>
            <div className="behind-scene-item">
              <img src="https://images.unsplash.com/photo-1554048612-b6a482b224b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Behind the scenes 4" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;