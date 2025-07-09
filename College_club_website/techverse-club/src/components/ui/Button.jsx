import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  to, 
  href, 
  onClick, 
  className = '',
  ...props 
}) => {
  // Base classes
  const baseClasses = 'inline-block font-medium rounded-md transition-all duration-300 text-center';
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-white shadow-md hover:shadow-lg',
    secondary: 'bg-white hover:bg-gray-100 text-primary-500 border border-primary-500',
    outline: 'bg-transparent hover:bg-gray-100 text-gray-800 border border-gray-300',
    text: 'bg-transparent hover:bg-gray-100 text-primary-500 hover:text-primary-600',
  };
  
  // Size classes
  const sizeClasses = {
    sm: 'py-1 px-3 text-sm',
    md: 'py-2 px-4',
    lg: 'py-3 px-6 text-lg',
  };
  
  // Combine classes
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  // Render as Link if 'to' prop is provided
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  
  // Render as anchor if 'href' prop is provided
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }
  
  // Otherwise render as button
  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;