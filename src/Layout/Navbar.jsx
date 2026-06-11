import { NavLink } from "react-router-dom";
import icon_home from "../assets/icon/home2.svg";
import logo_branch from "../assets/Logo/lok.png";
import {
  Compass,
  Heart,
  Home,
  Info,
  Layers,
  Map,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import { useState } from "react";
const Navbar = () => {
  const menu = [
    {
      name: "Home",
      path: "/home",
      // img: <Home className="w-4 h-4" />
    },
    {
      name: "Tantang Kami",
      path: "/about",
      // img: <Info className="w-4 h-4"
      //  />,
    },
    {
      name: "Peralatan",
      path: "/peralatan",
      // img: <Layers className="w-4 h-4" />,
    },
    {
      name: "Galery",
      path: "/Galery",
      // img: <Map className="h-4 w-4" />
    },
    {
      name: "testimony",
      path: "/testimony",
      // img: <Heart className="h-4 w-4" />,
    },
    {
      name: "kontak",
      path: "/Kontak",
      // img: <Phone className="h-4 w-4" />
    },
  ];
  const [OpenMenu, setOpenmenu] = useState(false);

  return (
    <section className="max-w-7xl relative mx-auto md:px-6 px-4 2xl:px-0  flex items-center justify-between">
      <div className="flex gap-2 items-center ">
        {/* <img src="" alt="" /> */}
        <div class="p-2 rounded-xl bg-linear-to-tr w-10 from-forestGreen to-emerald-600 shadow-md shadow-forestGreen/20 group-hover:scale-105 transition-transform duration-300">
          {/* <img src={logo_branch} alt="" /> */}
          <Compass className="h-6 w-6 text-white" />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-extrabold tracking-wider bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Litany
          </span>
          <span className="text-xs block tracking-[0.25em] text-forestGreen font-semibold -mt-2">
            Senja
          </span>
        </div>
      </div>

      {/* menu halaman desktop */}
      <div className="lg:block hidden">
        <ul className="flex gap-2 items-center justify-center">
          {menu.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex  py-2 px-4
              ${
                isActive
                  ? "bg-forestGreen text-[#01132a] font-semibold"
                  : "hover:bg-white/5"
              } 
              items-center  gap-1 transition-colors duration-500 rounded-lg`
              }
            >
              {/* <img src={item.img} alt={item.name} className="inline-block" /> */}
              {item.img}

              <span className="inline-block text-sm">{item.name}</span>
            </NavLink>
          ))}
        </ul>
      </div>

      {/* burger halaman mobile */}
      <button
        onClick={() => setOpenmenu((prev) => !prev)}
        className="lg:hidden order-3 cursor-pointer"
      >
        {/* burger */}
        {OpenMenu ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
      </button>

      {/* menu untuk halaman mobile */}
      <div
        className={`absolute top-10 h-130  shadow-2xl lg:hidden transition-all duration-500   bg-[#011c3f] w-full ${
          OpenMenu ? "left-0" : "translate-x-full"
        }  text-white px-4 py-6  `}
      >
        <ul className="flex flex-col gap-6 ">
          {menu.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={() => setOpenmenu((prev) => !prev)}
              className={({ isActive }) =>
                `flex  py-2.5 px-4 items-center ${
                  isActive
                    ? "bg-forestGreen text-[#01132a] font-bold"
                    : "hover:bg-white/5"
                }  gap-1 transition-colors duration-500 rounded-lg`
              }
            >
              {/* <img src={item.img} alt={item.name} className="inline-block" /> */}
              {item.img}

              <span className="inline-block lg:text-sm">{item.name}</span>
            </NavLink>
          ))}
        </ul>
        <div className="absolute bottom-10 right-5 left-5">
          <button className=" w-full flex cursor-pointer items-center space-x-2 px-5 py-4 rounded-full bg-linear-to-r from-[#6dbe45] to-emerald-500 hover:from-emerald-500 hover:to-[#6dbe45] text-white font-semibold text-sm shadow-lg shadow-[#6dbe45]/20 transform hover:-translate-y-0.5 transition-all duration-300">
            <MessageCircle class="w-5 h-5 fill-current" />
            <span className="text-sm">Rencanakan Pendakian</span>
          </button>
        </div>
      </div>
      <button className=" order-2 sm:inline-flex hidden cursor-pointer items-center space-x-2 px-5 py-2.5 rounded-full bg-linear-to-r from-[#6dbe45] to-emerald-500 hover:from-emerald-500 hover:to-[#6dbe45] text-white font-semibold text-sm shadow-lg shadow-[#6dbe45]/20 transform hover:-translate-y-0.5 transition-all duration-300">
        <MessageCircle class="w-5 h-5 fill-current" />
        <span className="text-sm">Rencanakan Pendakian</span>
      </button>
    </section>
  );
};

export default Navbar;
