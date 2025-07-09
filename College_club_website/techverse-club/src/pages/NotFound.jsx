import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaEnvelope } from 'react-icons/fa';

import Button from '../components/ui/Button';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-lg w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-primary-500 mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Oops! The page you are looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              to="/" 
              variant="primary"
              className="flex items-center justify-center gap-2"
            >
              <FaHome /> Back to Home
            </Button>
            <Button 
              to="/contact" 
              variant="outline"
              className="flex items-center justify-center gap-2"
            >
              <FaEnvelope /> Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;