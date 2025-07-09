import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import SectionTitle from '../components/ui/SectionTitle';
import ScrollAnimation from '../components/ui/ScrollAnimation';

import { gallery } from '../utils/data';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredImages = activeCategory === 'all' 
    ? gallery 
    : gallery.filter(image => image.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'events', label: 'Events' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'hackathons', label: 'Hackathons' },
    { id: 'team', label: 'Team' }
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!selectedImage) return;
    
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowRight') {
      navigateImage('next');
    } else if (e.key === 'ArrowLeft') {
      navigateImage('prev');
    }
  };

  // Add event listener for keyboard navigation
  useState(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-primary-500 text-white py-20">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Gallery</h1>
            <p className="text-xl">Capturing moments from our events, workshops, and activities.</p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Filters */}
      <section className="py-8 bg-gray-50 sticky top-16 z-10">
        <div className="container-custom">
          <ScrollAnimation animation="fade-in">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category.id ? 'bg-primary-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <ScrollAnimation 
                key={image.id} 
                animation="fade-in"
                delay={index % 4 * 100}
                className="aspect-square overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(image)}
              >
                <img 
                  src={image.thumbnail || image.src} 
                  alt={image.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full text-white">
                    <h3 className="font-bold text-sm md:text-base">{image.title}</h3>
                    <p className="text-xs md:text-sm opacity-80">{image.date}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold mb-2">No images found</h3>
              <p className="text-gray-600">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div 
              className="relative max-w-6xl w-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button 
                className="absolute top-4 right-4 text-white hover:text-primary-300 z-10"
                onClick={closeLightbox}
                aria-label="Close lightbox"
              >
                <FaTimes size={24} />
              </button>
              
              {/* Navigation buttons */}
              <button 
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary-300 z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
                aria-label="Previous image"
              >
                <FaChevronLeft size={24} />
              </button>
              
              <button 
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary-300 z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
                aria-label="Next image"
              >
                <FaChevronRight size={24} />
              </button>
              
              {/* Image */}
              <div className="flex-grow flex items-center justify-center">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.title} 
                  className="max-h-[80vh] max-w-full object-contain"
                />
              </div>
              
              {/* Caption */}
              <div className="text-white p-4 text-center">
                <h3 className="text-xl font-bold">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.date}</p>
                {selectedImage.description && (
                  <p className="mt-2 text-gray-300">{selectedImage.description}</p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit Photos Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollAnimation animation="fade-in">
              <SectionTitle 
                title="Share Your Memories" 
                subtitle="Have photos from our events? We'd love to feature them in our gallery!"
                center
              />
              <p className="mt-6 mb-8 text-gray-600">
                If you've captured some great moments at our events or activities, please share them with us. 
                Your photos could be featured in our gallery, helping us document the journey of TechVerse Club.
              </p>
              <a href="/contact" className="btn-primary inline-block">
                Submit Your Photos
              </a>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;