import CardKatalok from "./CardKatalok";
import { Data } from "../../Data/Alat";
import Icon_right from "../icon/Icon_riight";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const KatalokAlat = () => {
  const navigasi = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 120,
    });
  }, []);
  return (
    <div className="flex flex-col space-y-2 justify-center items-center">
      <h2
        data-aos="fade-up"
        // delay=""
        className=" text-forestGreen font-semibold"
      >
        Katalok Alat
      </h2>

      <h1
        data-aos="fade-up"
        delay="200"
        className="font-semibold text-[40px] text-center"
      >
        Peralatan Rental Senja Adventure
      </h1>

      <div
        data-aos="fade-up"
        delay="300"
        className="outline outline-[#01132A] w-50 relative"
      >
        <div className="absolute top-0 left-15 right-15 outline outline-[#6dbe45] "></div>
      </div>
      <section className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-0  space-x-2 md:space-y-4 space-y-4">
        {Data.slice(0, 3).map((item, index) => (
          <CardKatalok
            key={index}
            description={item.description}
            image={item.image}
            name={item.name}
            price={item.price}
            kategori={item.kategori}
            kondisi={item.kondisi}
            Aos="fade-up"
            delay={index * 200}
          />
        ))}
      </section>
      <div
        data-aos="fade-up"
        className=" w-full flex justify-end gap-2 mt-2 group items-center cursor-pointer"
      >
        <button
          onClick={() => navigasi("/peralatan")}
          className="group-hover:-translate-x-2  text-forestGreen  font-semibold transition-all duration-500 cursor-pointer"
        >
          Lihat selengkapnya
        </button>
        <Icon_right />
      </div>
    </div>
  );
};

export default KatalokAlat;
