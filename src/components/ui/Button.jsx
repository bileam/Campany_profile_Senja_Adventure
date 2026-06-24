const Button = ({ className = "", title, klick }) => (
  <button
    onClick={klick}
    className={`lg:py-2 px-4 text-sm whitespace-nowrap md:text-sm rounded-lg text-white ${className}`}
  >
    {title}
  </button>
);

export default Button;
