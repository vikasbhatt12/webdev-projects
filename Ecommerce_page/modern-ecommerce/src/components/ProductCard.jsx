import StarRating from './StarRating';

const ProductCard = ({ product, onProductClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden group transition-transform transform hover:-translate-y-1 hover:shadow-xl cursor-pointer"
      onClick={() => onProductClick(product)}
    >
      <div className="relative h-48">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-4"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-primary truncate group-hover:text-accent">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-2">{product.category}</p>
        <div className="flex justify-between items-center mb-3">
          <p className="text-xl font-bold text-primary">${product.price.toFixed(2)}</p>
          <div className="flex items-center">
            <StarRating rating={product.rating} />
            <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
          </div>
        </div>
        <button className="w-full bg-accent text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;