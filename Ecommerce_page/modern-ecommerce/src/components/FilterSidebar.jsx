import { AiOutlineClose } from 'react-icons/ai';
import { categories } from '../data/products';

const FilterSidebar = ({ isOpen, onClose, filters, onFilterChange }) => {
  const handlePriceChange = (e) => {
    onFilterChange('price', Number(e.target.value));
  };
  
  const handleCategoryChange = (e) => {
    onFilterChange('category', e.target.value);
  };
  
  const handleRatingChange = (e) => {
    onFilterChange('rating', Number(e.target.value));
  };

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 w-64 bg-white h-full shadow-lg z-40 transform transition-transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:relative lg:translate-x-0 lg:w-72 lg:z-auto lg:shadow-none lg:bg-transparent lg:h-auto`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-primary">Filters</h2>
            <button onClick={onClose} className="lg:hidden text-gray-500">
              <AiOutlineClose size={24} />
            </button>
          </div>

          {/* Category Filter */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3 text-secondary">Category</h3>
            <select
              value={filters.category}
              onChange={handleCategoryChange}
              className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Price Filter */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3 text-secondary">Price</h3>
            <input
              type="range"
              min="0"
              max="300"
              step="10"
              value={filters.price}
              onChange={handlePriceChange}
              className="w-full h-2 bg-highlight rounded-lg appearance-none cursor-pointer accent-accent border border-gray-300"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>$0</span>
              <span>${filters.price}</span>
            </div>
          </div>

          {/* Rating Filter */}
          <div>
            <h3 className="font-semibold mb-3 text-secondary">Rating</h3>
            <div className="space-y-2">
              {[4, 3, 2, 1].map(rating => (
                <label key={rating} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="rating"
                    value={rating}
                    checked={filters.rating === rating}
                    onChange={handleRatingChange}
                    className="h-4 w-4 text-accent focus:ring-accent border-gray-300"
                  />
                  <span className="ml-2 text-gray-700">{rating} Stars & Up</span>
                </label>
              ))}
               <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="rating"
                    value={0}
                    checked={filters.rating === 0}
                    onChange={handleRatingChange}
                    className="h-4 w-4 text-accent focus:ring-accent border-gray-300"
                  />
                  <span className="ml-2 text-gray-700">All</span>
                </label>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default FilterSidebar;