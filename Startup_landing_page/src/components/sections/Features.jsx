import { motion } from 'framer-motion';
import { FaLaptopCode, FaMobileAlt, FaChartLine, FaShieldAlt, FaRocket, FaHeadset } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      id: 1,
      icon: <FaLaptopCode className="text-4xl text-primary mb-4" />,
      title: 'Web Development',
      description: 'Custom web applications built with the latest technologies to meet your specific business needs.',
    },
    {
      id: 2,
      icon: <FaMobileAlt className="text-4xl text-primary mb-4" />,
      title: 'Mobile Solutions',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    },
    {
      id: 3,
      icon: <FaChartLine className="text-4xl text-primary mb-4" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our advanced analytics solutions.',
    },
    {
      id: 4,
      icon: <FaShieldAlt className="text-4xl text-primary mb-4" />,
      title: 'Cyber Security',
      description: 'Protect your business with our comprehensive security services and solutions.',
    },
    {
      id: 5,
      icon: <FaRocket className="text-4xl text-primary mb-4" />,
      title: 'Cloud Services',
      description: 'Scalable cloud solutions that grow with your business and optimize your operations.',
    },
    {
      id: 6,
      icon: <FaHeadset className="text-4xl text-primary mb-4" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support to ensure your systems are always running smoothly.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Services & Features</h2>
          <p className="section-subtitle">
            Discover the comprehensive suite of services we offer to help your business thrive in the digital landscape.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Ready to transform your business?</h3>
          <button className="btn btn-primary mx-auto">
            Schedule a Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;