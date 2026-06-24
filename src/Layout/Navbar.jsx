import { NavLink } from "react-router-dom";
import logoSenjaAdveture from "../assets/LogoSenjaAdventure/SenjaAdventure.png";
import { Menu, MessageCircle, ShoppingCart, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const menu = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Tantang Kami",
      path: "/about",
    },
    {
      name: "Peralatan",
      path: "/peralatan",
    },
    {
      name: "Galery",
      path: "/galery",
    },
    {
      name: "Testimony",
      path: "/testimony",
    },
    {
      name: "Kontak",
      path: "/kontak",
    },
  ];

  const [OpenMenu, setOpenmenu] = useState(false);

  const handleNavigate = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <section className="max-w-7xl relative mx-auto md:px-6 px-4 2xl:px-0 flex items-center justify-between">
      {/* Logo */}
      <div className="flex gap-2 items-center">
        <div className="rounded-xl overflow-hidden group max-w-10 transition-transform duration-300">
          <img
            src={logoSenjaAdveture}
            alt="Senja Adventure"
            className="group-hover:scale-110 transition-all duration-500 object-cover"
          />
        </div>

        <div className="flex flex-col">
          <span className="text-xl font-extrabold tracking-wider bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Senja
          </span>
          <span className="text-xs block tracking-[0.25em] text-forestGreen font-semibold -mt-2">
            Adventure
          </span>
        </div>
      </div>

      {/* Menu Desktop */}
      <div className="lg:block hidden">
        <ul className="flex gap-2 items-center justify-center">
          {menu.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={handleNavigate}
              className={({ isActive }) =>
                `flex py-2 px-4 items-center gap-1 transition-colors duration-500 rounded-lg
                ${
                  isActive
                    ? "bg-forestGreen text-[#01132a] font-semibold"
                    : "hover:bg-white/5"
                }`
              }
            >
              <span className="inline-block text-sm">{item.name}</span>
            </NavLink>
          ))}
        </ul>
      </div>

      {/* Burger Menu */}
      <button
        onClick={() => setOpenmenu((prev) => !prev)}
        className="lg:hidden order-3 cursor-pointer"
      >
        {OpenMenu ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
      </button>

      {/* Menu Mobile */}
      <div
        className={`absolute top-10 h-130 shadow-2xl lg:hidden transition-all duration-500 bg-[#011c3f] w-full ${
          OpenMenu ? "left-0" : "translate-x-full"
        } text-white px-4 py-6`}
      >
        <ul className="flex flex-col gap-6">
          {menu.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={() => {
                setOpenmenu(false);
                handleNavigate();
              }}
              className={({ isActive }) =>
                `flex py-2.5 px-4 items-center gap-1 transition-colors duration-500 rounded-lg
                ${
                  isActive
                    ? "bg-forestGreen text-[#01132a] font-bold"
                    : "hover:bg-white/5"
                }`
              }
            >
              <span className="inline-block lg:text-sm">{item.name}</span>
            </NavLink>
          ))}
        </ul>

        <div className="absolute bottom-10 right-5 left-5">
          <button className="w-full flex cursor-pointer items-center justify-center space-x-2 px-5 py-4 rounded-full bg-linear-to-r from-[#6dbe45] to-emerald-500 hover:from-emerald-500 hover:to-[#6dbe45] text-white font-semibold text-sm shadow-lg shadow-[#6dbe45]/20 transform hover:-translate-y-0.5 transition-all duration-300">
            <MessageCircle className="w-5 h-5 fill-current" />
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <button className="order-2 sm:inline-flex hidden cursor-pointer items-center space-x-2 px-3 py-2.5 rounded-full bg-linear-to-r from-[#012552] to-[#01132A] text-white font-semibold text-sm shadow-lg shadow-[#6dbe45]/20 transform hover:-translate-y-0.5 transition-all duration-300">
          <MessageCircle className="w-5 h-5 stroke-2 stroke-[#6DBE45]" />
        </button>

        <button className="order-2 sm:inline-flex hidden cursor-pointer items-center space-x-2 px-3 py-2.5 rounded-full bg-linear-to-r from-[#6DBE45] to-[#43CB00]/60 hover:from-emerald-500 hover:to-[#6dbe45] text-white font-semibold text-sm shadow-lg shadow-[#6dbe45]/20 transform hover:-translate-y-0.5 transition-all duration-300">
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Navbar;
