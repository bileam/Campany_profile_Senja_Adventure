import { MessageCircle, ShoppingCart } from "lucide-react";

const Modal = ({ isOpen, Onclose, item }) => {
  if (!isOpen) return null;
  console.log(item);

  return (
    <div className="fixed inset-0 bg-black/20 px-2 py-2 flex items-center justify-center backdrop-blur z-100 ">
      <div className=" bg-navyLight w-[90%] flex md:flex-row flex-col  relative overflow-hidden md:w-[90%] lg:w-[50%] md:min-h-[60%] rounded-2xl">
        <button
          onClick={Onclose}
          className="absolute top-2 right-4 z-50 text-sm shadow-2xl hover:scale-105 transition-all duration-500 px-3 py-1.5 rounded-full bg-forestGreen lg:bg-black/50"
        >
          X
        </button>
        <div className="lg:max-w-[60%] md:max-w-[90%]  relative">
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent"></div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-[#01132a]/0 group-hover:bg-[#01132a]/30 transition-all duration-500"></div>
          <img
            src={item.image}
            alt={item.name}
            className="md:h-full h-70 w-full md:w-90 object-cover object-center bg-cover "
          />
          <div className="absolute bottom-6 left-4 flex flex-col ">
            <span className="w-fit rounded-md bg-[#6DBE45]/90 backdrop-blur-md px-4 py-1 text-xs font-semibold text-white shadow-lg">
              {item.kategori}
            </span>
            <p className="text-md font-semibold text-white drop-shadow-md">
              {item.name}
            </p>
          </div>
        </div>
        <div className="flex-1 h-full  py-3 px-4 flex flex-col gap-3 mb-4">
          <div className="flex flex-col gap-1 ">
            <h2 className="text-[#D9D9D9] text-sm">Kondisi Alat</h2>
            <div className="flex gap-2 items-center">
              <div className="h-2 w-2 rounded-full bg-forestGreen"></div>
              <p>{item.kondisi}</p>
            </div>
          </div>
          <div className="flex flex-col gap-1 ">
            <h2 className="text-[#D9D9D9] text-sm">Harga sewa</h2>
            <div className="flex gap-2 items-center">
              <div className="h-2 w-2 rounded-full bg-forestGreen"></div>
              <p className="text-forestGreen font-bold">{item.price} / hari</p>
            </div>
          </div>
          <div className="flex flex-col gap-1 ml-2 ">
            <h2 className="text-[#D9D9D9] text-sm">Spesifikasi Unit :</h2>
            {item.spesifikas.map((item, index) => (
              <div key={index} className="flex gap-2 items-center">
                <div className="h-2 w-2 rounded-full bg-forestGreen"></div>
                <p className="text-[12px]">{item}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-1 ">
            <h2 className="text-[#D9D9D9] text-sm">Deskripsi</h2>
            <div className="flex gap-2 items-center">
              <div className="h-2 w-2 rounded-full bg-forestGreen"></div>
              <p className="text-[10px]"> {item.description}</p>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <a className="w-full flex flex-col md:flex-row cursor-pointer items-center space-x-2 px-3 py-2.5 rounded-full bg-linear-to-r from-[#012552] to-[#01132A] text-white font-semibold text-sm shadow-lg shadow-[#6dbe45]/20 transform hover:-translate-y-0.5 transition-all duration-300">
              <MessageCircle className="w-5 h-5 stroke-2 stroke-[#6DBE45]" />
              <span>whatsapp</span>
            </a>
            <button className=" w-full flex flex-col md:flex-row cursor-pointer items-center space-x-2 px-3 py-2.5 rounded-full bg-linear-to-r from-[#6DBE45] to-[#43CB00]/60 hover:from-emerald-500 hover:to-[#6dbe45] text-white font-semibold text-sm shadow-lg shadow-[#6dbe45]/20 transform hover:-translate-y-0.5 transition-all duration-300">
              <ShoppingCart className="w-5 h-5" />{" "}
              <span className="">Booking</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
