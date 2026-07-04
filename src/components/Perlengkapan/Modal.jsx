import { MessageCircle, ShoppingCart } from "lucide-react";
import { PeralatanContext } from "../../Context/Peralatan";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/CartContext";

const Modal = ({ isOpen, Onclose, id, SuccesstoCart }) => {
  if (!isOpen || id === null) return null;
  const { newVariant, priceVarint } = useContext(PeralatanContext);
  const { addToCart, removeAll } = useContext(CartContext);
  const item = newVariant(id);
  const [IdVariant, setIdVariant] = useState(item.variant[0].id);
  const price = priceVarint(IdVariant);
  const cartItem = {
    id: IdVariant,
    image: item.image,
    name: item.nama,
    kategori: item.kategori,
    merek: item.merek,
    desc: item.desc,
    price: price.harga,
    nama_variant: price.nama_variant,
    nilai_variant: price.nilai_variant,
    stock: price.stock,
  };
  const handleCart = (citem) => {
    addToCart(citem);
    SuccesstoCart();
    Onclose();
  };

  return (
    <div className="fixed inset-0 bg-black/20 px-2 py-2 flex items-center justify-center backdrop-blur z-100 ">
      {/* {SuccessTocart && <Success onsuccess={SuccessTocart} />} */}
      <div className=" bg-navyLight w-[90%] overflow-y-a flex md:flex-row flex-col  relative overflow-hidden md:w-[90%] lg:w-[50%] md:min-h-[60%] rounded-2xl">
        <button
          onClick={Onclose}
          className="absolute top-2 right-4 z-50 text-sm shadow-2xl hover:scale-105 transition-all duration-500 px-3 py-1.5 rounded-full bg-forestGreen lg:bg-black/50"
        >
          X
        </button>
        <div className="lg:max-w-[60%] md:max-w-[90%]  relative">
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent"></div>

          <div className="absolute inset-0 bg-[#01132a]/0 group-hover:bg-[#01132a]/30 transition-all duration-500"></div>
          <img
            src={item.image}
            alt={item.nama}
            className="md:h-full h-70 w-full md:w-90 object-cover object-center bg-cover "
          />
          <div className="absolute bottom-6 left-4 flex flex-col ">
            <span className="w-fit rounded-md bg-[#6DBE45]/90 backdrop-blur-md px-4 py-1 text-xs font-semibold text-white shadow-lg">
              {item.kategori}
            </span>
            <p className="text-md font-semibold text-white drop-shadow-md">
              {item.nama}
            </p>
          </div>
        </div>
        <div className="flex-1 h-full  py-3 px-4 flex flex-col gap-3 mb-4">
          <div className="flex flex-col gap-1 ">
            <h2 className="text-[#D9D9D9] text-sm">Merek Alat</h2>
            <div className="flex gap-2 items-center">
              <div className="h-2 w-2 rounded-full bg-forestGreen"></div>
              <p>{item.merek}</p>
            </div>
          </div>
          <div className="flex flex-col gap-1 ">
            <h2 className="text-[#D9D9D9] text-sm">Deskripsi</h2>
            <div className="flex gap-2 items-center">
              <div className="h-2 w-2 rounded-full bg-forestGreen"></div>
              <p className="text-[10px]">{item.desc}</p>
            </div>
          </div>
          <div className="flex flex-col  gap-1 ml-2 ">
            <h2 className="text-[#FFFFFF] text-lg">
              {item.variant[0]?.nama_variant}
            </h2>
            <div className="flex flex-wrap overflow-x-auto gap-2">
              {item.variant.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setIdVariant(item.id)}
                  className={` 

                            rounded-lg border ${
                              IdVariant === item.id
                                ? "border-forestGreen bg-[#143B2B]"
                                : "   border-[#163d6d] bg-[#011B40] hover:bg-[#02295f] "
                            } 
                           
                             p-2 text-left transition-all duration-300
                             hover:border-forestGreen cursor-pointer`}
                >
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-forestGreen"></div>
                    <p className="text-sm font-medium">{item.nilai}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="mt-2 rounded-xl bg-[#163d6d] p-2">
            <p className="text-sm text-gray-300">Harga yang dipilih</p>
            <h1 className="text-xl text-forestGreen font-bold ">
              Rp. {price.harga.toLocaleString("id-ID")}
              <span className="text-lg"> /hari</span>
            </h1>

            <p className=" text-gray-300">
              {item.variant[0]?.nama_variant}
              <span className="text-forestGreen font-semibold">
                {" "}
                {price.nama_variant}
              </span>
            </p>
          </div>

          <div className="flex gap-2 mt-2">
            <a className="w-full flex flex-col md:flex-row cursor-pointer items-center space-x-2 px-3 py-2.5 rounded-full bg-linear-to-r from-[#012552] to-[#01132A] text-white font-semibold text-sm shadow-lg shadow-[#6dbe45]/20 transform hover:-translate-y-0.5 transition-all duration-300">
              <MessageCircle className="w-5 h-5 stroke-2 stroke-[#6DBE45]" />
              <span>whatsapp</span>
            </a>
            <button
              onClick={() => handleCart(cartItem)}
              className=" w-full flex flex-col md:flex-row cursor-pointer items-center space-x-2 px-3 py-2.5 rounded-full bg-linear-to-r from-[#6DBE45] to-[#43CB00]/60 hover:from-emerald-500 hover:to-[#6dbe45] text-white font-semibold text-sm shadow-lg shadow-[#6dbe45]/20 transform hover:-translate-y-0.5 transition-all duration-300"
            >
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
