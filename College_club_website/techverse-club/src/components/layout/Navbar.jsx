import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Team', path: '/team' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-primary-500 font-bold text-2xl">TechVerse</span>
          <span className="text-gray-800 font-bold text-2xl">Club</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition-colors duration-300 hover:text-primary-500 ${location.pathname === link.path ? 'text-primary-500' : 'text-gray-700'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/join" 
            className="btn-primary"
          >
            Join Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-white absolute w-full left-0 shadow-md transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen py-5 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'}`}
      >
        <div className="container-custom flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium py-2 transition-colors duration-300 hover:text-primary-500 ${location.pathname === link.path ? 'text-primary-500' : 'text-gray-700'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/join" 
            className="btn-primary text-center"
          >
            Join Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;