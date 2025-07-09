import { motion } from 'framer-motion';
import { FaLightbulb, FaUsers, FaRocket, FaGraduationCap } from 'react-icons/fa';

import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import ScrollAnimation from '../components/ui/ScrollAnimation';

const About = () => {
  const values = [
    {
      id: 1,
      icon: <FaLightbulb className="text-4xl text-primary-500 mb-4" />,
      title: 'Innovation',
      description: 'We foster a culture of innovation and creative problem-solving, encouraging members to think outside the box.'
    },
    {
      id: 2,
      icon: <FaUsers className="text-4xl text-primary-500 mb-4" />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and collaboration, working together to achieve common goals.'
    },
    {
      id: 3,
      icon: <FaRocket className="text-4xl text-primary-500 mb-4" />,
      title: 'Growth',
      description: 'We are committed to continuous learning and personal growth, always striving to improve our skills.'
    },
    {
      id: 4,
      icon: <FaGraduationCap className="text-4xl text-primary-500 mb-4" />,
      title: 'Education',
      description: 'We are dedicated to sharing knowledge and helping each other learn new technologies and skills.'
    }
  ];

  const timeline = [
    {
      id: 1,
      year: '2018',
      title: 'Club Foundation',
      description: 'TechVerse Club was founded by a group of passionate students with a vision to create a community for tech enthusiasts.'
    },
    {
      id: 2,
      year: '2019',
      title: 'First Hackathon',
      description: 'We organized our first hackathon, bringing together students from various departments to solve real-world problems.'
    },
    {
      id: 3,
      year: '2020',
      title: 'Virtual Transition',
      description: 'Adapted to the pandemic by transitioning to virtual events and workshops, expanding our reach beyond campus.'
    },
    {
      id: 4,
      year: '2021',
      title: 'Industry Partnerships',
      description: 'Established partnerships with leading tech companies, providing members with internship and networking opportunities.'
    },
    {
      id: 5,
      year: '2022',
      title: 'Community Outreach',
      description: 'Launched initiatives to teach coding to underprivileged students, making technology education more accessible.'
    },
    {
      id: 6,
      year: '2023',
      title: 'Club Expansion',
      description: 'Expanded our club with specialized interest groups in AI, web development, cybersecurity, and game development.'
    }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About TechVerse Club</h1>
            <p className="text-xl">Empowering students through technology, innovation, and collaboration since 2018.</p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <ScrollAnimation animation="slide-right">
              <div className="bg-primary-50 p-8 rounded-lg border-l-4 border-primary-500 h-full">
                <h2 className="text-2xl font-bold text-primary-600 mb-4">Our Mission</h2>
                <p className="text-gray-700">
                  To create a vibrant community of tech enthusiasts where students can learn, collaborate, 
                  and grow together. We aim to bridge the gap between academic learning and industry 
                  requirements by providing practical experiences and networking opportunities.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="slide-left">
              <div className="bg-primary-50 p-8 rounded-lg border-l-4 border-primary-500 h-full">
                <h2 className="text-2xl font-bold text-primary-600 mb-4">Our Vision</h2>
                <p className="text-gray-700">
                  To be the leading technology club that inspires and equips students with the skills, 
                  knowledge, and network needed to thrive in the ever-evolving tech industry. We envision 
                  a community where innovation flourishes and every member reaches their full potential.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <ScrollAnimation animation="fade-in">
            <SectionTitle 
              title="Our Core Values" 
              subtitle="The principles that guide everything we do at TechVerse Club."
              center
            />
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, index) => (
              <ScrollAnimation 
                key={value.id} 
                animation="slide-up"
                delay={index * 100}
              >
                <Card className="p-6 text-center h-full">
                  <div className="flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container-custom">
          <ScrollAnimation animation="fade-in">
            <SectionTitle 
              title="Our Journey" 
              subtitle="The story of TechVerse Club from its inception to the present day."
              center
            />
          </ScrollAnimation>

          <div className="mt-16 relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-100"></div>
            
            {/* Timeline items */}
            {timeline.map((item, index) => (
              <div key={item.id} className="mb-12 relative">
                <ScrollAnimation 
                  animation={index % 2 === 0 ? "slide-right" : "slide-left"}
                  className="flex flex-col md:flex-row"
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                    <div className={`bg-white p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}>
                      <span className="text-sm font-bold text-primary-500 block mb-2">{item.year}</span>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </ScrollAnimation>
                
                {/* Timeline dot */}
                <div className="hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary-500 border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom text-center">
          <ScrollAnimation animation="fade-in">
            <SectionTitle 
              title="Meet Our Team" 
              subtitle="The dedicated individuals behind TechVerse Club."
              center
            />
            <p className="mt-6 mb-8 max-w-2xl mx-auto text-gray-600">
              Our team consists of passionate students from various disciplines who work together 
              to make TechVerse Club a vibrant and inclusive community. Visit our team page to 
              learn more about the people who make it all happen.
            </p>
            <a href="/team" className="btn-primary inline-block">
              View Our Team
            </a>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default About;