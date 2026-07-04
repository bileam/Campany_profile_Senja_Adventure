const Banner = ({ img, title, title2, description }) => {
  return (
    <div
      className="relative h-100 bg-cover bg-center bg-fixed flex flex-col justify-center items-center "
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="bg-black/80   w-full h-full z-10 absolute"></div>
      <div className="absolute py-20 px-10 z-15 flex flex-col items-center justify-center text-center">
        <span
          data-aos="fade-up"
          delay="200"
          className="text-forestGreen font-semibold text-md md:text-[20px]"
        >
          {title}
        </span>
        <h1
          data-aos="fade-up"
          delay="400"
          className="font-semibold text-[#ffffff]  text-lg md:text-2xl md:text-[50px]"
        >
          {title2}
        </h1>
        <div
          data-aos="fade-up"
          delay="600"
          className="flex lg:flex-row flex-col lg:gap-2 gap-4 mt-2"
        >
          <p className="md:w-187.75 font-normal text-sm md:text-[15px] text-[#DCE3EC] ">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
