import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Events', path: '/events' },
        { name: 'Team', path: '/team' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', path: '/blog' },
        { name: 'Projects', path: '/projects' },
        { name: 'Workshops', path: '/workshops' },
        { name: 'FAQ', path: '/faq' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://facebook.com' },
    { icon: <FaTwitter />, url: 'https://twitter.com' },
    { icon: <FaInstagram />, url: 'https://instagram.com' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com' },
    { icon: <FaGithub />, url: 'https://github.com' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Club Info */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <span className="text-primary-400 font-bold text-2xl">TechVerse</span>
              <span className="text-white font-bold text-2xl">Club</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Empowering students through technology, innovation, and collaboration.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.path}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>123 College Avenue</p>
              <p>University Campus</p>
              <p>City, State 12345</p>
              <p className="mt-4">Email: info@techverseclub.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {currentYear} TechVerse Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;