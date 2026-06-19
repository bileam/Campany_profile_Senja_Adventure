import { useRef, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate, useNavigation } from "react-router-dom";

const Timeline = () => {
  const timelineRef = useRef(null);
  const navigasi = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 120,
    });
  }, []);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 30,
  });

  const data = [
    {
      title: "Rental Gear",
      desc: "Sewa perlengkapan camping dan hiking lengkap untuk petualanganmu.",
      button: "Mulai Konsultasi",
    },
    {
      title: "Outdoor Consultation",
      desc: "Tim kami siap membantu memilih perlengkapan yang sesuai.",
      button: "Mulai konsultasi",
    },
    {
      title: "Fast Booking",
      desc: "Booking perlengkapan dengan mudah melalui website dan WhatsApp.",
      button: "Booking sekarang",
    },
  ];

  return (
    <section className="py-20 mt-10">
      {/* HEADER */}
      <div className="mb-16 flex flex-col gap-3 items-center text-center px-4">
        <h2 data-aos="fade-up" className="text-forestGreen font-semibold">
          Apa layanan Kami?
        </h2>

        <h1
          data-aos="fade-up"
          className="font-semibold text-3xl md:text-[40px]"
        >
          Layanan Senja Adventure
        </h1>

        <div
          data-aos="fade-up"
          className="outline outline-[#01132A] w-32 md:w-50 relative"
        >
          <div className="absolute top-0 left-10 right-10 md:left-15 md:right-15 outline outline-[#6dbe45]" />
        </div>
      </div>

      {/* TIMELINE */}
      <div ref={timelineRef} className="max-w-5xl mx-auto px-4 relative">
        {/* LINE BACKGROUND */}
        <div className="absolute left-4 md:left-1/2 top-20 bottom-20 w-1 bg-[#01132A] md:-translate-x-1/2 rounded-full" />

        {/* LINE PROGRESS */}
        <motion.div
          className="absolute left-4 md:left-1/2 top-20 bottom-20 w-1 bg-[#6DBE45] md:-translate-x-1/2 origin-top rounded-full"
          style={{ scaleY }}
        />

        <div className="space-y-20 md:space-y-32">
          {data.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* DOT */}
              <div className="absolute left-4 md:left-1/2 top-6 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-10">
                <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#6DBE45] border-4 border-[#00142A]" />
              </div>

              {/* CARD */}
              <div
                data-aos="flip-left"
                className="
                  md:max-w-105
                  ml-10 md:ml-0
                  rounded-xl
                  border
                  border-[#0d5ea6]
                  bg-[#031D3D]/90
                  p-5 md:p-6
                  shadow-lg
                  transition hover:scale-[1.02]
                "
              >
                <span className="inline-block text-xs bg-[#143B2A] text-[#6DBE45] px-3 py-1 rounded-full">
                  Layanan
                </span>

                <h3 className="text-white text-xl md:text-2xl font-bold mt-4">
                  {item.title}
                </h3>

                <p className="text-gray-300 mt-3 text-sm md:text-base">
                  {item.desc}
                </p>

                <button
                  onClick={() => navigasi("/peralatan")}
                  className="mt-5 text-[#6DBE45] font-semibold text-sm md:text-base hover:translate-x-1 transition"
                >
                  {item.button} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
