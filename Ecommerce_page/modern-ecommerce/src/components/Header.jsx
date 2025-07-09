import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';

const Header = ({ onSearch, onToggleSidebar }) => {
  return (
    <header className="bg-fuchsia-600 text-white shadow-md sticky top-0 z-20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <button onClick={onToggleSidebar} className="text-white mr-4 lg:hidden">
            <FiMenu size={24} />
          </button>
          <h1 className="text-2xl font-bold">ShopZen</h1>
        </div>
        <div className="hidden md:flex flex-grow max-w-xl mx-4 border-amber-100 text-white">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for products..."
              onChange={(e) => onSearch(e.target.value)}
              className="w-full py-2 px-4 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center">
          <button className="relative text-white hover:text-accent transition-colors">
            <FaShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
          </button>
        </div>
      </div>
      {/* Mobile Search Bar */}
      <div className="md:hidden px-4 pb-4">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => onSearch(e.target.value)}
            className="w-full py-2 px-4 rounded-full text-gray-700 focus:outline-none"
          />
          <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
      </div>
    </header>
  );
};

export default Header;