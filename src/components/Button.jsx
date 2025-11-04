/**
 * Button Component
 * A versatile button with multiple variants and sizes
 */
const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'rounded-xl font-medium transition-all duration-200 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow-soft hover:shadow-medium',
    secondary: 'bg-gray-100 hover:bg-gray-200 dark:bg-dark-card dark:hover:bg-dark-border text-gray-900 dark:text-dark-text',
    outline: 'border-2 border-gray-200 dark:border-dark-border hover:border-primary-500 dark:hover:border-primary-500 text-gray-700 dark:text-dark-text',
    ghost: 'hover:bg-gray-100 dark:hover:bg-dark-card text-gray-700 dark:text-dark-text',
    danger: 'bg-red-500 hover:bg-red-600 text-white shadow-soft hover:shadow-medium',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    icon: 'p-2',
  };
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
