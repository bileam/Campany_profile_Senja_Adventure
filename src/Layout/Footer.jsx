import logoSenjaAdventure from "../assets/LogoSenjaAdventure/SenjaAdventure.png";
import Add_location from "../components/icon/Add_location";
import Call from "../components/icon/Call";
import Icon_right from "../components/icon/Icon_riight";
import Love from "../components/icon/Love";
import { ListFooter } from "../components/ui/ListFooter";
const Footer = () => {
  return (
    <div className="max-w-7xl   mx-auto px-6 py-15 2xl:px-0">
      <div className="flex md:flex-row flex-col gap-2 lg:gap-10   justify-between">
        <div className="flex flex-col gap-2 flex-1">
          <div className="flex gap-2 items-center group">
            <div className="w-20 rounded-lg overflow-hidden flex">
              <img
                src={logoSenjaAdventure}
                alt={logoSenjaAdventure}
                className="object-cover group-hover:scale-110 transition-all duration-500"
              />
            </div>
            <div className="text-white text-lg">
              <h2 className="font-bold ">Senja</h2>
              <h1 className="-mt-2 text-forestGreen font-semibold">
                Adventure
              </h1>
            </div>
          </div>
          <p className="text-[12px]">
            Menyediakan rantal alat pendakian gunung berkualitas tingi,
            higienis, steril, serta pelayanan bersahabat yang siap memahami
            perjalanan outdoor anda di dalam bebas
          </p>
        </div>
        <div className="flex-1 ">
          <h2 className="font-bold">Menu Halaman</h2>
          <ul className="flex flex-col  mt-4 gap-2">
            <ListFooter>Home Utama</ListFooter>
            <ListFooter>Tentang Kami</ListFooter>
            <ListFooter>Tentang Kami</ListFooter>
            <ListFooter>Katalog Alat</ListFooter>
            <ListFooter>Galeri moment</ListFooter>
            <ListFooter>Testimony client</ListFooter>
            <ListFooter>Kontak basecamp</ListFooter>
          </ul>
        </div>
        <div className="flex-1">
          <h1 className="font-bold">Kontak admin</h1>
          <ul className="mt-4 flex flex-col gap-2">
            <li className="flex gap-2 items-center text-sm">
              <Add_location width={14} />
              <span>salatiga,Jawa Tengah,Indonesia</span>
            </li>
            <li className="flex gap-2 items-center text-sm">
              <Call width={14} />
              <span>+62 812-4292-7890</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="outline outline-[#012552] lg:mt-5"></div>
      <ul className="flex md:flex-row flex-col gap-2 justify-between text-sm ">
        <li className="mt-2"> @ 2026 Litany Senjad. All rights reserved</li>
        <li className="flex gap-1  mt-2">
          <Love />
          <span className="text-forestGreen  ">
            Partner Terbaik Menuju Puncak
          </span>
        </li>
      </ul>
    </div>
  );
};
export default Footer;
