const Input = ({ 
  type = "text",
  placeholder = "",
  value = "",
  onChange,
  className = "",
  icon: Icon,
  ...props 
}) => {
  return (
    <div className="relative w-full group">
      {Icon && (
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <Icon className="w-5 h-5 text-charcoal-grey/35 group-focus-within:text-golden-amber transition-colors duration-300" />
        </div>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full ${Icon ? 'pl-12' : 'pl-5'} pr-5 py-3 border border-charcoal-grey/12 rounded-2xl focus:outline-none focus:ring-2 focus:ring-golden-amber/25 focus:border-golden-amber/35 text-charcoal-grey bg-charcoal-grey/2 hover:bg-charcoal-grey/4 transition-all duration-300 placeholder:text-charcoal-grey/30 text-sm font-medium shadow-sm hover:shadow-md focus:shadow-lg ${className}`}
        {...props}
      />
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-golden-amber/0 to-transparent group-focus-within:via-golden-amber/3 pointer-events-none transition-all duration-300"></div>
    </div>
  );
};

export default Input;
