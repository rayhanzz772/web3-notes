/**
 * Input Component
 * Modern input field with icon support and variants
 */
const Input = ({ 
  icon, 
  className = '', 
  type = 'text',
  ...props 
}) => {
  return (
    <div className="relative">
      {icon && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-dark-muted">
          {icon}
        </div>
      )}
      <input
        type={type}
        className={`
          w-full px-4 py-2.5 
          ${icon ? 'pl-10' : ''} 
          bg-white dark:bg-dark-card 
          border border-gray-200 dark:border-dark-border 
          rounded-xl 
          text-gray-900 dark:text-dark-text 
          placeholder-gray-400 dark:placeholder-dark-muted
          focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
          transition-all duration-200
          ${className}
        `}
        {...props}
      />
    </div>
  );
};

export default Input;
