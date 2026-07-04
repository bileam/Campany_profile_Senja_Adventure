import { Phone, Timer } from "lucide-react";
import Add_location from "../icon/Add_location";
import { BsInstagram } from "react-icons/bs";

const Informasi = () => {
  const hubungi = [
    {
      nama: "Alamat",
      nilai: "Salatiga, jawa Tengah, Indonesia",
      icont: <Add_location size={30} className="text-[#6dbe45]" />,
    },
    {
      nama: "Whatsapp",
      nilai: "081242922597",
      icont: <Phone size={25} className="text-[#6dbe45]" />,
    },
    {
      nama: "Instagram",
      nilai: "bileammangalla",
      icont: <BsInstagram size={25} className="text-[#6dbe45]" />,
    },
  ];
  return (
    <div className="w-full flex-1  bg-[#01132a]/50 shadow-2xl rounded-lg space-y-5   py-4 px-6 ">
      <div className="flex flex-col gap-2">
        <h2 className="text-white text-lg font-semibold">Informasi Kontak</h2>

        <span className="block outline w-20 outline-[#6dbe45] -mt-1"></span>
        <p className="text-sm">
          Anda juga bisa menghubungi kami melalui di bawah ini.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {hubungi.map((item, index) => (
          <div key={index} className="flex  gap-4 items-center">
            <div className="p-2 border rounded-full bg-[#01132a] shadow-sm border-[#6dbe45] shadow-[#6dbe45]">
              {item.icont}
            </div>
            <div>
              <p className="text-md">{item.nama}</p>
              <p className="text-gray-400 text-sm">{item.nilai}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[80%] mx-auto outline outline-gray-500 mb-12"></div>
      <div className="flex  gap-4 items-center ">
        <div className="p-2 border rounded-full  bg-[#01132a] shadow-sm border-[#6dbe45] shadow-[#6dbe45]">
          <Timer size={25} className="text-[#6dbe45]" />
        </div>
        <div>
          <p className="text-md">Setiap hari</p>
          <p className="text-gray-400 text-sm">buka 24 jam</p>
        </div>
      </div>
    </div>
  );
};
export default Informasi;
