import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import ScrollAnimation from '../components/ui/ScrollAnimation';

import { team } from '../utils/data';

const Team = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredMembers = activeCategory === 'all' 
    ? team 
    : team.filter(member => member.role.toLowerCase().includes(activeCategory));

  const categories = [
    { id: 'all', label: 'All Members' },
    { id: 'lead', label: 'Leadership' },
    { id: 'tech', label: 'Technical Team' },
    { id: 'event', label: 'Event Management' },
    { id: 'content', label: 'Content Creation' }
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h1>
            <p className="text-xl">The passionate individuals behind TechVerse Club who make everything possible.</p>
          </motion.div>
        </div>
      </section>

      {/* Team Filters */}
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

      {/* Team Members Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredMembers.map((member, index) => (
              <ScrollAnimation 
                key={member.id} 
                animation="fade-in"
                delay={index % 4 * 100}
              >
                <Card className="h-full overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full">
                        <div className="flex justify-center space-x-3">
                          {member.social?.linkedin && (
                            <a 
                              href={member.social.linkedin} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-white hover:text-primary-300 transition-colors"
                              aria-label={`${member.name}'s LinkedIn`}
                            >
                              <FaLinkedin size={20} />
                            </a>
                          )}
                          {member.social?.github && (
                            <a 
                              href={member.social.github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-white hover:text-primary-300 transition-colors"
                              aria-label={`${member.name}'s GitHub`}
                            >
                              <FaGithub size={20} />
                            </a>
                          )}
                          {member.social?.twitter && (
                            <a 
                              href={member.social.twitter} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-white hover:text-primary-300 transition-colors"
                              aria-label={`${member.name}'s Twitter`}
                            >
                              <FaTwitter size={20} />
                            </a>
                          )}
                          {member.email && (
                            <a 
                              href={`mailto:${member.email}`} 
                              className="text-white hover:text-primary-300 transition-colors"
                              aria-label={`Email ${member.name}`}
                            >
                              <FaEnvelope size={20} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary-500 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          {/* Empty State */}
          {filteredMembers.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold mb-2">No members found</h3>
              <p className="text-gray-600">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Join the Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollAnimation animation="fade-in">
              <SectionTitle 
                title="Join Our Team" 
                subtitle="Interested in becoming a part of TechVerse Club? We're always looking for passionate individuals!"
                center
              />
              <p className="mt-6 mb-8 text-gray-600">
                Whether you're a coding wizard, a design enthusiast, or someone passionate about event management, 
                there's a place for you in our club. Join us to develop your skills, build your network, and make 
                a difference in our tech community.
              </p>
              <a href="/join" className="btn-primary inline-block">
                Apply to Join
              </a>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;