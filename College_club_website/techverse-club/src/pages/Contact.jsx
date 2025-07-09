import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import ScrollAnimation from '../components/ui/ScrollAnimation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    // For this demo, we'll simulate a successful submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! We will get back to you soon.'
    });

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    // Reset form status after 5 seconds
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: ''
      });
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl text-primary-500" />,
      title: 'Our Location',
      details: [
        'TechVerse Club Room',
        'Engineering Building, 2nd Floor',
        'University Campus, City, State 12345'
      ]
    },
    {
      icon: <FaEnvelope className="text-2xl text-primary-500" />,
      title: 'Email Us',
      details: [
        'info@techverseclub.edu',
        'events@techverseclub.edu'
      ]
    },
    {
      icon: <FaPhone className="text-2xl text-primary-500" />,
      title: 'Call Us',
      details: [
        '+1 (123) 456-7890',
        '+1 (123) 456-7891'
      ]
    },
    {
      icon: <FaClock className="text-2xl text-primary-500" />,
      title: 'Club Hours',
      details: [
        'Monday - Friday: 10:00 AM - 6:00 PM',
        'Saturday: 11:00 AM - 3:00 PM',
        'Sunday: Closed'
      ]
    }
  ];

  const socialLinks = [
    { icon: <FaInstagram />, url: 'https://instagram.com/techverseclub', label: 'Instagram' },
    { icon: <FaTwitter />, url: 'https://twitter.com/techverseclub', label: 'Twitter' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/company/techverseclub', label: 'LinkedIn' },
    { icon: <FaGithub />, url: 'https://github.com/techverseclub', label: 'GitHub' }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl">Have questions or want to get involved? Reach out to us!</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <ScrollAnimation animation="slide-right">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <SectionTitle 
                  title="Send Us a Message" 
                  subtitle="Fill out the form below and we'll get back to you as soon as possible."
                />
                
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    ></textarea>
                  </div>
                  
                  <Button type="submit" variant="primary" className="w-full">
                    Send Message
                  </Button>
                  
                  {formStatus.submitted && (
                    <div className={`mt-4 p-3 rounded-md ${formStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {formStatus.message}
                    </div>
                  )}
                </form>
              </div>
            </ScrollAnimation>
            
            {/* Contact Information */}
            <ScrollAnimation animation="slide-left">
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
                
                {/* Social Media Links */}
                <div className="mt-8">
                  <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a 
                        key={index} 
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center hover:bg-primary-600 transition-colors"
                        aria-label={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <ScrollAnimation animation="fade-in">
            <SectionTitle 
              title="Find Us" 
              subtitle="Visit us at our campus location"
              center
            />
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg h-96 bg-gray-200">
              {/* In a real application, you would embed a Google Map or other map service here */}
              <div className="w-full h-full flex items-center justify-center bg-gray-300">
                <p className="text-gray-600 text-center p-4">
                  [Map Placeholder] <br />
                  In a real application, an interactive map would be embedded here.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container-custom">
          <ScrollAnimation animation="fade-in">
            <SectionTitle 
              title="Frequently Asked Questions" 
              subtitle="Find answers to common questions about TechVerse Club"
              center
            />
            <div className="mt-12 max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2">How can I join TechVerse Club?</h3>
                <p className="text-gray-600">You can join by filling out the membership form on our website or visiting our club room during club hours. Membership is open to all students regardless of their major or technical background.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2">Are there any membership fees?</h3>
                <p className="text-gray-600">We have a small annual membership fee of $10 that helps cover the cost of club activities, refreshments, and materials. However, most of our events are free for all students.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2">How can I propose an event or workshop?</h3>
                <p className="text-gray-600">We welcome event proposals from our members! You can submit your idea through the contact form on this page or speak directly with any of our club officers during club meetings.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2">Do I need to have technical skills to join?</h3>
                <p className="text-gray-600">Not at all! TechVerse Club welcomes members of all skill levels. We have events and activities suitable for beginners as well as more experienced tech enthusiasts. It's a great place to learn and grow your skills.</p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Contact;