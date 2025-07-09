import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';

import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import ScrollAnimation from '../components/ui/ScrollAnimation';

import { events } from '../utils/data';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Events & Activities</h1>
            <p className="text-xl">Discover our exciting events, workshops, and activities designed to help you learn, connect, and grow.</p>
          </motion.div>
        </div>
      </section>

      {/* Events Tabs Section */}
      <section className="py-20">
        <div className="container-custom">
          <ScrollAnimation animation="fade-in">
            <div className="flex justify-center mb-12">
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <button
                  type="button"
                  className={`px-6 py-3 text-sm font-medium rounded-l-lg ${activeTab === 'upcoming' ? 'bg-primary-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                  onClick={() => setActiveTab('upcoming')}
                >
                  Upcoming Events
                </button>
                <button
                  type="button"
                  className={`px-6 py-3 text-sm font-medium rounded-r-lg ${activeTab === 'past' ? 'bg-primary-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                  onClick={() => setActiveTab('past')}
                >
                  Past Events
                </button>
              </div>
            </div>
          </ScrollAnimation>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events[activeTab].map((event, index) => (
              <ScrollAnimation 
                key={event.id} 
                animation="slide-up"
                delay={index * 100}
                id={`event-${event.id}`}
              >
                <Card className="h-full flex flex-col overflow-hidden">
                  <div className="relative">
                    <img 
                      src={`${event.image}?w=600&h=400&fit=crop`} 
                      alt={event.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-0 right-0 bg-primary-500 text-white px-4 py-2 text-sm font-bold">
                      {event.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                    
                    <div className="mb-4 space-y-2">
                      <div className="flex items-center text-gray-600">
                        <FaCalendarAlt className="mr-2 text-primary-500" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <FaClock className="mr-2 text-primary-500" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <FaMapMarkerAlt className="mr-2 text-primary-500" />
                        <span>{event.location}</span>
                      </div>
                      {event.capacity && (
                        <div className="flex items-center text-gray-600">
                          <FaUsers className="mr-2 text-primary-500" />
                          <span>Capacity: {event.capacity}</span>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-gray-600 mb-6 flex-grow">{event.description}</p>
                    
                    {activeTab === 'upcoming' ? (
                      <Button 
                        href={event.registrationLink || '#'} 
                        variant="primary"
                        className="self-start"
                      >
                        Register Now
                      </Button>
                    ) : (
                      <div className="mt-auto">
                        {event.resources && (
                          <div className="mt-4">
                            <h4 className="font-bold text-sm uppercase text-gray-500 mb-2">Resources</h4>
                            <div className="flex flex-wrap gap-2">
                              {event.resources.map((resource, idx) => (
                                <a 
                                  key={idx} 
                                  href={resource.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-sm bg-gray-100 hover:bg-gray-200 text-primary-600 px-3 py-1 rounded-full"
                                >
                                  {resource.name}
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          {/* Empty State */}
          {events[activeTab].length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold mb-2">
                {activeTab === 'upcoming' ? 'No upcoming events at the moment' : 'No past events to display'}
              </h3>
              <p className="text-gray-600 mb-6">
                {activeTab === 'upcoming' ? 'Check back soon for new events!' : 'Our event history will appear here.'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom text-center">
          <ScrollAnimation animation="fade-in">
            <SectionTitle 
              title="Want to Organize an Event?" 
              subtitle="Have an idea for a workshop, hackathon, or tech talk? We'd love to hear from you!"
              center
            />
            <p className="mt-6 mb-8 max-w-2xl mx-auto text-gray-600">
              TechVerse Club welcomes event proposals from members. If you have an idea for an event 
              that would benefit our community, we encourage you to reach out to us.
            </p>
            <Button to="/contact" variant="primary" size="lg">
              Submit Your Proposal
            </Button>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Events;