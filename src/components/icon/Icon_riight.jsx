const Icon_right = ({ width, height }) => {
  return (
    <div className="">
      {" "}
      <svg
        className="group-hover:translate-x-2 transition-transform duration-500"
        width={width || 18}
        height={height || 18}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8333 14.1663L15 9.99967L10.8333 5.83301M5 14.1663L9.16667 9.99967L5 5.83301"
          stroke="#6DBE45"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default Icon_right;
