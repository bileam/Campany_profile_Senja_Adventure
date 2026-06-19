const Button = ({ className = "", title, klick }) => {
  return (
    <button
      onClick={klick}
      className={`lg:py-2 px-4 text-sm md:text-sm rounded-lg text-[#ffffff] ${className}`}
    >
      {title}
    </button>
  );
};
export default Button;
