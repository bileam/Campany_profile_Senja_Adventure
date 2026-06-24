import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import AOS from "aos";
import "aos/dist/aos.css";

import banner_senjaAdventure1 from "../../assets/banner/banner_senjaAdventure1.jpg";
import banner_senjaAdventure from "../../assets/banner/banner_senjaAdventure.jpg";
import banner_senjaAdventure2 from "../../assets/banner/banner_senjaAdventure2.jpg";
import banner_senjaAdventure3 from "../../assets/banner/logo_senjaAdventure02.png";
import { useEffect } from "react";

const BannerHome = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 120,
    });
  }, []);
  const banners = [
    {
      id: 1,
      image: banner_senjaAdventure3,
      title: "Rental Alat Pendakian",
      subtitle: "Peralatan camping dan hiking lengkap untuk petualanganmu",
    },
    {
      id: 2,
      image: banner_senjaAdventure,
      title: "Sewa Tenda Berkualitas",
      subtitle: "Tersedia berbagai ukuran tenda yang nyaman dan siap pakai",
    },
    {
      id: 3,
      image: banner_senjaAdventure2,
      title: "Booking Mudah via WhatsApp",
      subtitle: "Pesan perlengkapan dengan cepat dan praktis",
    },
    {
      id: 4,
      image: banner_senjaAdventure1,
      title: "Booking Mudah via WhatsApp",
      subtitle: "Pesan perlengkapan dengan cepat dan praktis",
    },
  ];

  return (
    <section className="w-full">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div
              className="relative bg-fixed h-screen bg-center object-cover bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url(${banner.image})`,
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#000000]/40 flex flex-col items-center justify-center text-center px-4">
                <h1
                  data-aos="fade-up"
                  className="text-white font-bold text-3xl sm:text-4xl md:text-6xl"
                >
                  {banner.title}
                </h1>

                <p
                  data-aos="fade-up"
                  delay="100"
                  className="text-white mt-4 max-w-2xl text-sm sm:text-base md:text-xl"
                >
                  {banner.subtitle}
                </p>
                <a
                  href=""
                  data-aos="fade-up"
                  delay="200"
                  className="mt-6 cursor-pointer bg-linear-to-r from-[#6DBE45] to-[#43CB00]/60 hover:from-emerald-500 hover:to-[#6dbe45] px-6 py-3 rounded-lg hover:opacity-90 transition"
                >
                  Konsultasi dengan kami
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BannerHome;
