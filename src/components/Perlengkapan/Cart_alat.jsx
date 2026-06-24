import { ShoppingCart } from "lucide-react";
import alat_1 from "../../assets/gambar_alat/Alat.avif";
import Icon_right from "../icon/Icon_riight";
import Modal from "./Modal";

const Card_alat = ({
  description,
  image,
  name,
  price,
  onDetail,
  Aos,
  delay,
  kategori,
  kondisi,
}) => {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-delay={delay}
      onClick={onDetail}
      className="overflow-hidden shadow hover:shadow hover:shadow-[forestGreen] hover:-translate-y-1 transition-all duration-700 rounded-lg group bg-[#012552]/70 h-full flex flex-col"
    >
      <div className="overflow-hidden relative">
        <img
          src={image}
          alt={name}
          className="object-cover h-70  w-full group-hover:scale-110 transition-all duration-500"
        />
        <div className="absolute top-4 left-2 right-2 flex justify-between">
          <h2 className="py-1 px-2 bg-[#01132a]/90 text-sm text-forestGreen font-extralight rounded-md">
            {kategori}
          </h2>
          <h2 className="text-navyDeep py-1 px-2 bg-forestGreen rounded-md text-sm font-extralight">
            {kondisi}
          </h2>
        </div>
      </div>

      <div className="py-6 px-4 text-start flex-1 flex flex-col">
        <h1 className="font-semibold group-hover:text-forestGreen transition-colors duration-300">
          {name}
        </h1>

        <p className="text-[12px] text-[#D9D9D9] overflow-hidden text-ellipsis line-clamp-2">
          {description}
        </p>

        <div className="mt-2 outline-0.5 outline outline-[#012552]"></div>

        <p className="text-[#D9D9D9] mt-2 inline-block text-[12px]">
          harga sewa
        </p>

        <div className="flex justify-between items-center mt-auto">
          <p className="text-forestGreen text-[14px]">Rp. {price} /hari</p>

          <button
            onClick={onDetail}
            className="flex gap-2 bg-linear-to-r z-20 cursor-pointer hover:scale-110 transition-transform duration-500 from-[#6DBE45] to-[#43CB00]/60 hover:from-emerald-500 hover:to-[#6dbe45] shadow-2xl p-2 rounded-full text-[12px]"
          >
            {/* <span>Detail</span>
            <Icon_right /> */}
            <ShoppingCart className="w-5 h-5 stroke-2 " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card_alat;
