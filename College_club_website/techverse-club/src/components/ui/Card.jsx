const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-md overflow-hidden ${hover ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;