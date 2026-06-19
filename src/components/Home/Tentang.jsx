import banner_senjaAdventure from "../../assets/LogoSenjaAdventure/SenjaAdventure.png";
import banner_senjaAdventure02 from "../../assets/banner/logo_senjaAdventure02.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Tentang = () => {
  const navigasi = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 120,
    });
  }, []);
  return (
    <div
      className="h-100 md:h-100 relative rounded-lg bg-fixed overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${banner_senjaAdventure02})`,
      }}
    >
      <div className="absolute inset-0 bg-linear-to-r from-[#0a0f1a]/80 via-[#0a0f1a]/50 to-[#0a0f1a]/80"></div>
      {/* <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#0a0f1a]/90"></div> */}
      <div className="relative z-10 flex  h-full">
        <div className="flex flex-col items-center justify-center md:p-2 ">
          <p
            data-aos="fade-up"
            className="text-sm md:text-lg text-center  md:w-[40%]"
          >
            “ Senja Adventure hadir sebagai partnert pendakian terbaik anda
            dengan menyediakan perlengkapan premium, higienis, terawat, dan
            pelayanan ramah bersahabat yang siap menemani petualangan alam bebas
            anda. “
          </p>
          <button
            onClick={() => navigasi("/peralatan")}
            data-aos="fade-up"
            delay="100"
            className="mt-6 cursor-pointer bg-linear-to-r from-[#6DBE45] to-[#43CB00]/60 hover:from-emerald-500 hover:to-[#6dbe45] px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            Booking Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};
export default Tentang;
