import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/images/logo.svg';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { id: 1, link: 'home', title: 'Home' },
    { id: 2, link: 'features', title: 'Features' },
    { id: 3, link: 'testimonials', title: 'Testimonials' },
    { id: 4, link: 'pricing', title: 'Pricing' },
    { id: 5, link: 'contact', title: 'Contact' },
  ];

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

  const handleClick = () => setNav(!nav);

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex justify-between items-center">
        <Link to="home" smooth duration={500} className="cursor-pointer">
          <img src={logo} alt="NovaTech Logo" className="h-10" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          {links.map(({ id, link, title }) => (
            <li key={id} className="cursor-pointer hover:text-primary transition-colors duration-300">
              <Link to={link} smooth duration={500}>
                {title}
              </Link>
            </li>
          ))}
          <li>
            <button className="btn btn-primary ml-4">
              Get Started
            </button>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div
          onClick={handleClick}
          className="md:hidden z-10 cursor-pointer text-2xl"
        >
          {nav ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Menu */}
        {nav && (
          <motion.ul 
            className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white text-dark"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {links.map(({ id, link, title }) => (
              <li
                key={id}
                className="px-4 cursor-pointer py-6 text-4xl hover:text-primary transition-colors duration-300"
              >
                <Link
                  onClick={handleClick}
                  to={link}
                  smooth
                  duration={500}
                >
                  {title}
                </Link>
              </li>
            ))}
            <li className="mt-8">
              <button onClick={handleClick} className="btn btn-primary">
                Get Started
              </button>
            </li>
          </motion.ul>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;