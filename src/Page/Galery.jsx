import Banner from "../components/ui/Banner";
import banner_senjaAdventure from "../assets/banner/Sejara_SenjaAdventure.jpg";
import GaleryCard from "../components/Galery/Galery";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Galery = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 120,
    });
  }, []);
  return (
    <div className="md:mt-3 mt-3  mb-2 overflow-hidden">
      <div className="overflow-hidden relative mb-20">
        <Banner
          img={banner_senjaAdventure}
          title="Galery Senja Adventure"
          title2="Galeri Petualangan Bersama Senja Adventure"
          description="Setiap foto menyimpan cerita petualangan. Temukan inspirasi perjalanan alam, camping, dan pendakian melalui galeri Senja Adventure yang menghadirkan perlengkapan outdoor terbaik untuk menemani langkah Anda."
        />
      </div>
      <div className="max-w-7xl   mx-auto  px-2 py-2 2xl:px-0 mb-10 flex flex-col">
        <GaleryCard />
      </div>
    </div>
  );
};
export default Galery;
