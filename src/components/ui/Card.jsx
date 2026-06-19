const Card = ({ children, delay }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="200"
      className="
          rounded-xl
          border
          lg:max-w-90
          border-[#6DBE45]
          bg-[#031D3D]/90
          px-4 py-4
          transition hover:scale-[1.02]
          shadow-2xl
        "
    >
      {children}
    </div>
  );
};

export default Card;
