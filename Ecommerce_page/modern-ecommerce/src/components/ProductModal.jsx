import { AiOutlineClose } from 'react-icons/ai';
import StarRating from './StarRating';

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-2xl m-4 w-full max-w-2xl flex flex-col md:flex-row relative animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-colors z-10"
        >
          <AiOutlineClose size={28} />
        </button>
        <div className="md:w-1/2 p-4 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto max-h-96 object-contain"
          />
        </div>
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-primary mb-2">{product.name}</h2>
          <p className="text-md text-gray-500 mb-4">{product.category}</p>
          <div className="flex items-center mb-4">
            <StarRating rating={product.rating} />
            <span className="text-md text-gray-600 ml-2">({product.rating} stars)</span>
          </div>
          <p className="text-gray-700 mb-6 text-lg">{product.description}</p>
          <div className="flex justify-between items-center">
            <p className="text-3xl font-extrabold text-primary">${product.price.toFixed(2)}</p>
            <button className="bg-accent text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;