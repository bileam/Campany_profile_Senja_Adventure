import alat_1 from "../../assets/gambar_alat/Alat.avif";
import Icon_right from "../icon/Icon_riight";
const Card_alat = ({ description, image, name, price }) => {
  return (
    <div className="overflow-hidden shadow hover:shadow hover:shadow-[forestGreen] hover:-translate-y-1 transition-all duration-700   rounded-lg group bg-[#012552]/70">
      <div className="overflow-hidden">
        <img
          src={image}
          alt=""
          className="object-cover  group-hover:scale-110 transition-all  duration-500"
        />
      </div>
      <div className=" py-6 px-4 text-start">
        <h1 className="font-semibold group-hover:text-forestGreen transition-colors duration-300">
          {name}
        </h1>
        <p className="text-[12px] text-[#D9D9D9] overflow-hidden text-ellipsis line-clamp-2">
          {description}
        </p>
        <div className="mt-2 outline-0.5 outline  outline-[#012552]"></div>
        <p className="text-[#D9D9D9] mt-2 inline-block text-[12px]">
          harga sewa
        </p>
        <div className="flex justify-between">
          <p className="text-forestGreen text-[14px]">{price} /hari</p>
          <button className="flex gap-2 text-[12px]">
            <span>Detail</span>
            <Icon_right />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card_alat;
