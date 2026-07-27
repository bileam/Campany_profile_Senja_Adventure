import { Phone, Timer, Mail } from "lucide-react";
import { BsInstagram } from "react-icons/bs";
import Add_location from "../icon/Add_location";

const Informasi = () => {
  const hubungi = [
    {
      nama: "Alamat",
      value: (
        <address
          className="not-italic text-gray-400 text-sm"
          itemProp="address"
        >
          Salatiga, Jawa Tengah, Indonesia
        </address>
      ),
      icon: <Add_location size={30} className="text-[#6dbe45]" />,
    },
    {
      nama: "WhatsApp",
      value: (
        <a
          href="https://wa.me/6281242922597"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Hubungi kami melalui WhatsApp"
          className="text-gray-400 text-sm hover:text-[#6dbe45] transition-colors"
          itemProp="telephone"
        >
          0812-4292-2597
        </a>
      ),
      icon: <Phone size={25} className="text-[#6dbe45]" />,
    },
    {
      nama: "Email",
      value: (
        <a
          href="mailto:info@senjaadventure.com"
          className="text-gray-400 text-sm hover:text-[#6dbe45] transition-colors"
          aria-label="Kirim email kepada kami"
          itemProp="email"
        >
          info@senjaadventure.com
        </a>
      ),
      icon: <Mail size={25} className="text-[#6dbe45]" />,
    },
    {
      nama: "Instagram",
      value: (
        <a
          href="https://instagram.com/bileammangalla"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Kunjungi Instagram kami"
          className="text-gray-400 text-sm hover:text-[#6dbe45] transition-colors"
        >
          @bileammangalla
        </a>
      ),
      icon: <BsInstagram size={25} className="text-[#6dbe45]" />,
    },
  ];

  return (
    <section
      className="w-full flex-1 bg-[#01132a]/50 shadow-2xl rounded-lg py-6 px-6 space-y-6"
      aria-labelledby="contact-title"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      {/* Nama Bisnis */}
      <meta itemProp="name" content="Senja Adventure" />

      {/* Heading */}
      <header className="space-y-2">
        <h2 id="contact-title" className="text-white text-2xl font-bold">
          Hubungi Senja Adventure
        </h2>

        <span className="block w-20 h-1 bg-[#6dbe45] rounded-full"></span>

        <p className="text-gray-300 text-sm leading-relaxed">
          Hubungi kami untuk informasi penyewaan perlengkapan pendakian,
          konsultasi, maupun pemesanan. Kami siap membantu Anda setiap hari.
        </p>
      </header>

      {/* Daftar Kontak */}
      <ul className="space-y-5">
        {hubungi.map((item, index) => (
          <li key={index} className="flex gap-4 items-start">
            <div className="p-2 border rounded-full bg-[#01132a] border-[#6dbe45] shadow-md shadow-[#6dbe45]/40">
              {item.icon}
            </div>

            <div>
              <h3 className="text-white font-medium">{item.nama}</h3>

              <div>{item.value}</div>
            </div>
          </li>
        ))}
      </ul>

      <hr className="border-gray-600" />

      {/* Jam Operasional */}
      <div className="flex gap-4 items-start">
        <div className="p-2 border rounded-full bg-[#01132a] border-[#6dbe45] shadow-md shadow-[#6dbe45]/40">
          <Timer size={25} className="text-[#6dbe45]" />
        </div>

        <div>
          <h3 className="text-white font-medium">Jam Operasional</h3>

          <time
            className="text-gray-400 text-sm"
            itemProp="openingHours"
            dateTime="Mo-Su 00:00-23:59"
          >
            Buka setiap hari • 24 Jam
          </time>
        </div>
      </div>
    </section>
  );
};

export default Informasi;
