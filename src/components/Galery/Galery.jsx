import Add_location from "../icon/Add_location";
import { Galery } from "../../Data/Galery";

const GaleryCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3  2xl:grid-cols-4 gap-6">
      {Galery.map((item, index) => (
        <div
          key={index}
          data-aos="zoom-in-up"
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#08111d] shadow-xl cursor-pointer"
        >
          {/* Image */}
          <img
            src={item.image}
            alt={item.judul}
            className="h-105 w-full object-cover transition-all duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent"></div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-[#01132a]/0 group-hover:bg-[#01132a]/30 transition-all duration-500"></div>

          {/* Category */}
          <div className="absolute top-4 left-4">
            <span className="rounded-full bg-[#6DBE45]/90 backdrop-blur-md px-4 py-1 text-sm font-semibold text-white shadow-lg">
              {item.kategory}
            </span>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 w-full p-5 translate-y-6 group-hover:translate-y-0 transition-all duration-500">
            <h2 className="text-xl font-bold text-white mb-2">{item.judul}</h2>

            <div className="flex items-center gap-2 text-gray-200 text-sm">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                <Add_location width="15" height="15" />
              </div>

              <p>{item.tempat}</p>
            </div>

            {/* Garis animasi */}
            <div className="mt-4 h-0.75 w-0 bg-[#6DBE45] rounded-full group-hover:w-24 transition-all duration-500"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GaleryCard;
