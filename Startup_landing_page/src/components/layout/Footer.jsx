import { Link } from 'react-scroll';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import logo from '../../assets/images/logo.svg';

const Footer = () => {
  const links = [
    { id: 1, link: 'home', title: 'Home' },
    { id: 2, link: 'features', title: 'Features' },
    { id: 3, link: 'testimonials', title: 'Testimonials' },
    { id: 4, link: 'pricing', title: 'Pricing' },
    { id: 5, link: 'contact', title: 'Contact' },
  ];

  const socialLinks = [
    { id: 1, icon: <FaFacebook />, href: '#' },
    { id: 2, icon: <FaTwitter />, href: '#' },
    { id: 3, icon: <FaInstagram />, href: '#' },
    { id: 4, icon: <FaLinkedin />, href: '#' },
    { id: 5, icon: <FaGithub />, href: '#' },
  ];

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { title: 'About Us', href: '#' },
        { title: 'Careers', href: '#' },
        { title: 'Blog', href: '#' },
        { title: 'Press', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { title: 'Documentation', href: '#' },
        { title: 'Help Center', href: '#' },
        { title: 'Community', href: '#' },
        { title: 'Partners', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { title: 'Privacy Policy', href: '#' },
        { title: 'Terms of Service', href: '#' },
        { title: 'Cookie Policy', href: '#' },
        { title: 'GDPR', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="home" smooth duration={500} className="cursor-pointer inline-block mb-4">
              <img src={logo} alt="NovaTech Logo" className="h-10 brightness-200 filter" />
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Empowering businesses with innovative technology solutions. We help companies transform their digital presence and achieve their goals.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ id, icon, href }) => (
                <motion.a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors duration-300 text-xl"
                  whileHover={{ y: -3 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary transition-colors duration-300"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} NovaTech. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center space-x-4">
              {links.map(({ id, link, title }) => (
                <Link
                  key={id}
                  to={link}
                  smooth
                  duration={500}
                  className="text-gray-500 hover:text-primary text-sm transition-colors duration-300 cursor-pointer"
                >
                  {title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;