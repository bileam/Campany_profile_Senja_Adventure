import { ShoppingCart } from "lucide-react";
import alat_1 from "../../assets/gambar_alat/Alat.avif";
import Icon_right from "../icon/Icon_riight";

const CardKatalok = ({
  description,
  image,
  name,
  price,
  Aos,
  delay,
  kategori,
  kondisi,
}) => {
  return (
    <div
      data-aos={Aos}
      data-aos-delay={delay}
      className="h-full overflow-hidden shadow hover:shadow hover:shadow-[forestGreen] hover:-translate-y-1 transition-all duration-700 rounded-lg group bg-[#012552]/70"
    >
      <div className="overflow-hidden relative">
        <img
          src={image}
          alt=""
          className="object-cover w-full h-48 group-hover:scale-110 transition-all duration-500"
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

      <div className="py-6 px-4 text-start">
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

        <div className="flex justify-between items-center">
          <p className="text-forestGreen text-[14px]">Rp. {price} /hari</p>
        </div>
      </div>
    </div>
  );
};

export default CardKatalok;
