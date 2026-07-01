import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const MainLayout = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        // scroll ke bawah → sembunyikan navbar
        setShowNavbar(false);
      } else {
        // scroll ke atas → tampilkan navbar
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="text-white flex flex-col">
      <header
        className={`bg-linear-to-t from-[#01132a] to-[#012552] fixed top-0 left-0 right-0 z-60 shadow-lg py-4 transition-transform duration-500 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Navbar />
      </header>
      <main className="">
        <Outlet />
      </main>
      <footer className="bg-navyDeep mt-20 left-0 right-0 bottom-0 ">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
