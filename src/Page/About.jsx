import BannerHome from "../components/Home/BannerHome";
import Banner from "../components/ui/Banner";
import banner_senjaAdventure from "../assets/banner/Sejara_SenjaAdventure.jpg";
import Title from "../components/ui/Title";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Sejarah from "../components/About/Sejarah";
import Icon_protect from "../components/icon/Icon_protect";
import Keunggulan from "../components/About/Kaunggulan";

const About = () => {
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
          title="Tentang Kami"
          title2="Tentang Senjaa Adventure - Rental Alat Camping dan Hiking Terpercaya"
          description="  Senja Adventure menyediakan layanan rental alat camping dan pendakian dengan perlengkapan lengkap, terawat, dan siap digunakan untuk menemani setiap petualangan Anda."
        />
      </div>
      <div className="max-w-7xl   mx-auto  px-2 py-2 2xl:px-0 mb-10 flex flex-col">
        <Title judul="Sejara Senja Adventure" />
        <div className="flex sm:flex-row flex-col mt-2 gap-12">
          <div className="relative flex-1 h-100 rounded-xl  mt-20 ">
            <img
              data-aos="fade-up"
              delay="200"
              src={banner_senjaAdventure}
              alt="Senja Adventure"
              className="object-cover w-full h-full rounded-xl border-4 border-[#012552]"
            />
            <div
              data-aos="fade-up"
              delay="400"
              className="
              -bottom-8 z-50 -right-5
              absolute
       rounded-xl
       max-w-60
                  border
                  border-[#FFFFFF]
                  bg-[#031D3D]/90
                  px-4 py-4

                  shadow-lg
                  transition hover:scale-[1.02]
                "
            >
              <div className="flex gap-2 items-center mb-2">
                <Icon_protect width={20} height={20} />
                <h2 className="font-semibold ">Steril & Bersih</h2>
              </div>
              <p className="text-[12px]">
                Setial Peralatan di cuci bersih secara higienis sebelum
                diserahkan kepada pendaki
              </p>
            </div>
          </div>

          <Sejarah />
        </div>
        <Keunggulan />
      </div>
    </div>
  );
};

export default About;
