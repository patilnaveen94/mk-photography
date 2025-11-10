import React, { useState } from 'react';
import { FaPlay, FaTimes } from 'react-icons/fa';
import './Portfolio.css';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'wedding', name: 'Wedding' },
    { id: 'pre-wedding', name: 'Pre-Wedding' },
    { id: 'birthday', name: 'Birthday' },
    { id: 'baby', name: 'Baby' },
    { id: 'corporate', name: 'Corporate' },
    { id: 'product', name: 'Product' }
  ];

  const portfolioItems = [
    {
      id: 1,
      category: 'wedding',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Elegant Wedding Ceremony',
      description: 'Beautiful outdoor wedding ceremony'
    },
    {
      id: 2,
      category: 'pre-wedding',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Romantic Pre-Wedding Shoot',
      description: 'Couple photography in natural setting'
    },
    {
      id: 3,
      category: 'wedding',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Wedding Reception',
      description: 'Joyful celebration moments'
    },
    {
      id: 4,
      category: 'birthday',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'First Birthday Celebration',
      description: 'Adorable first birthday party'
    },
    {
      id: 5,
      category: 'baby',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Newborn Portrait',
      description: 'Peaceful newborn photography'
    },
    {
      id: 6,
      category: 'corporate',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Corporate Conference',
      description: 'Professional business event'
    },
    {
      id: 7,
      category: 'product',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Product Photography',
      description: 'Commercial product shoot'
    },
    {
      id: 8,
      category: 'pre-wedding',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Beach Pre-Wedding',
      description: 'Romantic beach photography'
    },
    {
      id: 9,
      category: 'wedding',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Wedding Details',
      description: 'Beautiful wedding arrangements'
    },
    {
      id: 10,
      category: 'baby',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Baby Portrait Session',
      description: 'Cute baby photography'
    },
    {
      id: 11,
      category: 'corporate',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Business Meeting',
      description: 'Corporate photography'
    },
    {
      id: 12,
      category: 'product',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Fashion Product Shoot',
      description: 'Stylish product photography'
    }
  ];

  const videos = [
    {
      id: 1,
      title: 'Wedding Highlight Reel',
      thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      embedId: 'dQw4w9WgXcQ', // Sample YouTube ID
      description: 'Beautiful wedding day highlights'
    },
    {
      id: 2,
      title: 'Pre-Wedding Story',
      thumbnail: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      embedId: 'dQw4w9WgXcQ',
      description: 'Romantic pre-wedding video'
    },
    {
      id: 3,
      title: 'Corporate Event Coverage',
      thumbnail: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      embedId: 'dQw4w9WgXcQ',
      description: 'Professional event documentation'
    },
    {
      id: 4,
      title: 'Birthday Celebration',
      thumbnail: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      embedId: 'dQw4w9WgXcQ',
      description: 'Fun birthday party video'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const openLightbox = (image) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const openVideoModal = (video) => {
    setSelectedVideo(video);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="portfolio-page">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="container">
          <div className="portfolio-hero-content">
            <h1>Our Portfolio</h1>
            <p>Showcasing our finest photography and videography work</p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section portfolio-filter">
        <div className="container">
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="section portfolio-gallery">
        <div className="container">
          <div className="masonry-grid">
            {filteredItems.map(item => (
              <div 
                key={item.id} 
                className="portfolio-item"
                onClick={() => openLightbox(item)}
              >
                <img src={item.src} alt={item.title} />
                <div className="portfolio-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="section video-gallery">
        <div className="container">
          <h2 className="section-title">Video Gallery</h2>
          <p className="section-subtitle">Watch our cinematic creations</p>
          <div className="video-grid">
            {videos.map(video => (
              <div 
                key={video.id} 
                className="video-item"
                onClick={() => openVideoModal(video)}
              >
                <div className="video-thumbnail">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="video-play-overlay">
                    <FaPlay />
                  </div>
                </div>
                <div className="video-info">
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <FaTimes />
            </button>
            <img src={lightboxImage.src} alt={lightboxImage.title} />
            <div className="lightbox-info">
              <h3>{lightboxImage.title}</h3>
              <p>{lightboxImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <div className="video-modal-overlay" onClick={closeVideoModal}>
          <div className="video-modal-content" onClick={e => e.stopPropagation()}>
            <button className="video-modal-close" onClick={closeVideoModal}>
              <FaTimes />
            </button>
            <div className="video-wrapper">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.embedId}?autoplay=1`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-modal-info">
              <h3>{selectedVideo.title}</h3>
              <p>{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;