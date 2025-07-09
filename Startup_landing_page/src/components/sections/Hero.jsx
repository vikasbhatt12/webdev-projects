import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import heroImage from '../../assets/images/hero-image.svg';

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-20 lg:pt-36 lg:pb-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 bg-primary/5 w-1/3 h-1/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 bg-secondary/5 w-1/2 h-1/2 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Hero Content */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Innovative Solutions for the <span className="text-primary">Digital Age</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              We help businesses transform their ideas into powerful digital solutions. Discover how NovaTech can elevate your company to new heights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="contact" smooth duration={500}>
                <motion.button 
                  className="btn btn-primary w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </Link>
              <Link to="features" smooth duration={500}>
                <motion.button 
                  className="btn btn-outline w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <img src={heroImage} alt="NovaTech Digital Solutions" className="w-full h-auto" />
              
              {/* Floating Elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/10 rounded-full"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 py-8 px-6 bg-white rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {[
            { value: '500+', label: 'Clients' },
            { value: '95%', label: 'Satisfaction' },
            { value: '24/7', label: 'Support' },
            { value: '100+', label: 'Solutions' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;