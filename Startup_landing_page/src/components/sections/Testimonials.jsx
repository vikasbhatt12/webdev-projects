import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      quote: 'NovaTech transformed our business with their innovative solutions. Their team was professional, responsive, and delivered beyond our expectations. I highly recommend their services!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'CTO, GrowthLabs',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      quote: 'Working with NovaTech was a game-changer for our company. Their expertise in cloud solutions helped us scale efficiently while reducing operational costs by 40%.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Marketing Director, Elevate Media',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
      quote: 'The mobile application NovaTech developed for us received outstanding feedback from our users. Their attention to detail and focus on user experience is unmatched in the industry.',
      rating: 4,
    },
    {
      id: 4,
      name: 'David Wilson',
      position: 'Founder, InnovateCorp',
      image: 'https://randomuser.me/api/portraits/men/4.jpg',
      quote: "NovaTech's cybersecurity solutions gave us peace of mind knowing our data is protected. Their proactive approach to security has prevented several potential breaches.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Here's what our clients have to say about working with NovaTech.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                x: `-${currentIndex * 100}%`,
              }}
              transition={{ duration: 0.5 }}
              style={{ width: `${testimonials.length * 100}%` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full px-4 flex-shrink-0"
                  style={{ width: `${100 / testimonials.length}%` }}
                >
                  <div className="bg-gray-50 p-8 md:p-10 rounded-xl shadow-md">
                    <FaQuoteLeft className="text-primary text-4xl mb-6 opacity-20" />
                    <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                    
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-14 h-14 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-gray-500 text-sm">{testimonial.position}</p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <FaStar 
                              key={i} 
                              className={`text-sm ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentIndex === index ? 'bg-primary' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Join our growing list of satisfied clients</h3>
          <button className="btn btn-primary mx-auto">
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;