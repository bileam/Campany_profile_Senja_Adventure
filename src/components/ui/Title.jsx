const Title = ({ judul, delay }) => {
  return (
    <div className="w-full flex flex-col gap-2 items-center justify-center">
      <h1
        data-aos="fade-up"
        delay={delay}
        className="font-semibold md:text-[40px] text-2xl  text-center"
      >
        {judul}
      </h1>

      <div
        data-aos="fade-up"
        delay={delay}
        className="outline outline-[#01132A] w-50 relative"
      >
        <div className="absolute top-0 left-15 right-15 outline outline-[#6dbe45] "></div>
      </div>
    </div>
  );
};
export default Title;
