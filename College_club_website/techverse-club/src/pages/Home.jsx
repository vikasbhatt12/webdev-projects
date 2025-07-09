import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import ScrollAnimation from '../components/ui/ScrollAnimation';

import { events, testimonials, stats } from '../utils/data';
import { fadeIn, slideUp, staggerContainer } from '../utils/animations';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-400 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              variants={fadeIn}
            >
              Welcome to <span className="text-white">TechVerse</span> Club
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-100"
              variants={fadeIn}
            >
              Empowering students through technology, innovation, and collaboration.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={fadeIn}
            >
              <Button 
                to="/join" 
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100"
              >
                Join Our Community
              </Button>
              <Button 
                to="/events" 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Upcoming Events
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <ScrollAnimation key={stat.id} animation="fade-in" delay={stat.id * 100}>
                <div className="text-center">
                  <h3 className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slide-right">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
                  alt="TechVerse Club Team" 
                  className="w-full h-auto"
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-left">
              <SectionTitle 
                title="About Our Club" 
                subtitle="TechVerse Club is a student-led organization dedicated to fostering a community of tech enthusiasts."
              />
              <p className="text-gray-600 mb-6">
                Founded in 2018, our club brings together students passionate about technology, 
                providing a platform to learn, collaborate, and grow together. We organize workshops, 
                hackathons, tech talks, and networking events to help members enhance their skills 
                and connect with industry professionals.
              </p>
              <Button to="/about" variant="secondary" className="flex items-center gap-2">
                Learn More <FaArrowRight />
              </Button>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <ScrollAnimation animation="fade-in">
            <SectionTitle 
              title="Upcoming Events" 
              subtitle="Join us for our exciting upcoming events and activities."
              center
            />
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {events.upcoming.slice(0, 3).map((event, index) => (
              <ScrollAnimation 
                key={event.id} 
                animation="slide-up"
                delay={index * 100}
              >
                <Card className="h-full flex flex-col">
                  <img 
                    src={`${event.image}?w=600&h=400&fit=crop`} 
                    alt={event.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-500 mb-4">{event.date} • {event.time}</p>
                    <p className="text-gray-600 mb-6 flex-grow">{event.description.substring(0, 120)}...</p>
                    <Button to={`/events#event-${event.id}`} variant="secondary" className="self-start">
                      Learn More
                    </Button>
                  </div>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button to="/events" variant="primary">
              View All Events
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container-custom">
          <ScrollAnimation animation="fade-in">
            <SectionTitle 
              title="What Our Members Say" 
              subtitle="Hear from our members about their experiences with TechVerse Club."
              center
            />
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimation 
                key={testimonial.id} 
                animation="fade-in"
                delay={index * 100}
              >
                <Card className="p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic flex-grow">"{testimonial.quote}"</p>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="container-custom text-center">
          <ScrollAnimation animation="fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Become a part of TechVerse Club and unlock opportunities to learn, grow, and connect with fellow tech enthusiasts.</p>
            <Button 
              to="/join" 
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              Join TechVerse Club Today
            </Button>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Home;