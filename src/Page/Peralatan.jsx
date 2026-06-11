import Icon_Filter from "../components/icon/Icon_Filter";
import Card_alat from "../components/Perlengkapan/Cart_alat";
import { Data } from "../Data/Alat";

const Peralatan = () => {
  console.log(Data);
  return (
    <div className="md:mt-8 mt-10  mb-70">
      <div className="md:mt-20 lg:text-start text-center ">
        <div className="">
          <h1 className="text-forestGreen font-semibold text-[20px]">
            Katalog Rental
          </h1>
          <h2 className="font-semibold text-[#ffffff] text-2xl md:text-[50px]">
            Peralatan Rental Kami
          </h2>
          <div className="flex lg:flex-row flex-col lg:gap-2 gap-4 mt-2">
            <p className="md:w-187.75 font-normal text-sm md:text-[15px] text-[#DCE3EC] ">
              Sewa perlengkapan pendakian Berkualitas Premium dengan jamiman
              kebersihan Maksimal. Klik Gambar alat untuk informasi detail
            </p>
            <div>
              <input
                type="search"
                placeholder="Cari nama alat atau deskripsi"
                className="px-6 py-2 w-full  bg-navyDeep md:w-123 outline-[#012552] outline-0.5 outline  text-sm md:text-[15px] rounded-lg"
              />
              <label htmlFor=""></label>
            </div>
          </div>
        </div>
        <div className="outline outline-0.5 w-full outline-[#012552] mt-10"></div>

        {/* filtering */}
        <div className="mt-20 flex items-center gap-6">
          <Icon_Filter h={28} w={30} />
          <div className="flex overflow-y-auto gap-2">
            <button className="bg-forestGreen lg:py-2 px-4 font-bold text-sm md:text-sm rounded-lg text-[#ffffff]">
              Semua
            </button>
            <button className=" sm:py-2 px-4 bg-navyLight text-sm md:text-sm rounded-md text-[#ffffff]">
              Carriel
            </button>
            <button className=" sm:py-2 px-4 bg-navyLight text-sm md:text-sm rounded-md text-[#ffffff]">
              Tenda
            </button>
            <button className="sm:py-2 px-4 bg-navyLight text-sm md:text-sm rounded-md text-[#ffffff]">
              Cooking set
            </button>
            <button className=" sm:py-2 px-4 bg-navyLight text-sm md:text-sm rounded-lg text-[#ffffff]">
              Accessories
            </button>
          </div>
        </div>
        {/* alat alat rental */}
        <section className="mt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  space-x-2 md:space-y-4 space-y-4">
          {Data.map((item, index) => (
            <Card_alat
              key={index}
              image={item.image}
              description={item.description}
              price={item.price}
              name={item.name}
            />
          ))}
        </section>
      </div>
    </div>
  );
};
export default Peralatan;
