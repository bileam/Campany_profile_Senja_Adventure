import { useContext, useState } from "react";
import Icon_Filter from "../components/icon/Icon_Filter";
import Card_alat from "../components/Perlengkapan/Cart_alat";
import Modal from "../components/Perlengkapan/Modal";

import Button from "../components/ui/Button";
import banner_SenjaAdventure from "../assets/banner/Banner_senja.avif";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Success from "../components/ui/Success";
import { PeralatanContext } from "../Context/Peralatan";

const Peralatan = () => {
  const [openModal, setModal] = useState(false);
  const { peralatan } = useContext(PeralatanContext);

  const [selectedItem, setSelectedItem] = useState(null);
  const [SuccessTocart, setSuccessTocart] = useState(false);

  useEffect(() => {
    if (!SuccessTocart) return;
    const timer = setTimeout(() => {
      setSuccessTocart(false);
    }, 2000);
    const handleClick = () => {
      setSuccessTocart(false);
    };
    document.addEventListener("click", handleClick);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handleClick);
    };
  }, [SuccessTocart]);

  const OnclickOpenModal = (item) => {
    setSelectedItem(item);

    setModal(true);
  };

  const [categori, setCategori] = useState("Semua");
  const [search, setSearch] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 120,
    });
  }, []);

  // filtering
  const filterdata = peralatan.filter((item) => {
    const filterkategori =
      categori === "Semua" ||
      item.kategori.toUpperCase() === categori.toUpperCase();
    const SearchFilter =
      item.nama_product.toLowerCase().includes(search.toLowerCase()) ||
      item.desc.toLowerCase().includes(search.toLowerCase());
    return filterkategori && SearchFilter;
  });

  const newCategory = [
    "Semua",
    ...new Set(peralatan.map((item) => item.kategori).filter(Boolean)),
  ];

  // new set untuk mengambil nilai yang unik
  return (
    <div className="md:mt-7 mt-10 relative ">
      {SuccessTocart && <Success onsuccess={SuccessTocart} />}

      <div className="lg:text-start text-center  ">
        <div
          className="relative bg-fixed  h-100 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${banner_SenjaAdventure})`,
          }}
        >
          <div className="bg-black/80   w-full h-full z-10 absolute"></div>
          <div className="absolute py-20 px-10 z-15">
            <span
              data-aos="fade-up"
              delay="200"
              className="text-forestGreen font-semibold text-md md:text-[20px]"
            >
              Katalog Rental
            </span>
            <h1
              data-aos="fade-up"
              delay="400"
              className="font-semibold text-[#ffffff]  text-lg md:text-2xl md:text-[50px]"
            >
              Rental Alat Camping dan Pendakian Terlengkap | Senja Adventure
            </h1>
            <div
              data-aos="fade-up"
              delay="600"
              className="flex lg:flex-row flex-col lg:gap-2 gap-4 mt-2"
            >
              <p className="md:w-187.75 font-normal text-sm md:text-[15px] text-[#DCE3EC] ">
                Sewa perlengkapan pendakian Berkualitas Premium dengan jamiman
                kebersihan Maksimal. Klik Gambar alat untuk informasi detail
              </p>
            </div>
          </div>
        </div>
        <div className="outline outline-0.5 w-full outline-[#012552] mt-10"></div>

        <div className="max-w-7xl mx-auto px-6 py-2 2xl:px-0 mb-2">
          {/* filtering */}
          <div
            data-aos="fade-up"
            className="mt-6 flex items-center justify-between gap-6"
          >
            <Icon_Filter h={28} w={30} />
            <div className="flex overflow-y-auto items-center gap-2 pb-4 ">
              {newCategory.map((item, index) => (
                <Button
                  key={index}
                  title={item}
                  klick={() => setCategori(item)}
                  className={`${
                    categori === item
                      ? "bg-linear-to-t from-[#143a00] to-[#3fb305]"
                      : "bg-navyLight"
                  } cursor-pointer p-2 font-bold `}
                />
              ))}
            </div>
            <div className="mt-2 lg:block hidden">
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari nama alat atau deskripsi"
                className="px-6 py-2 w-full shadow-5xl shadow-black  bg-navyDeep md:w-123 outline-[#000000] outline-0.5 outline  text-sm md:text-[15px] rounded-lg"
              />
              <label htmlFor=""></label>
            </div>
          </div>
          <div data-aos="fade-up" className="mt-7 md:flex  lg:hidden">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari nama alat atau deskripsi"
              className="px-6 py-2 w-full  bg-navyDeep md:w-123 outline-[#012552] outline-0.5 outline  text-sm md:text-[15px] rounded-lg"
            />
            <label htmlFor=""></label>
          </div>
          {/* alat alat rental */}
          <section className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-8">
            {filterdata.map((item, index) => (
              <Card_alat
                key={index}
                item={item}
                onSuccess={() => setSuccessTocart(true)}
                onDetail={() => OnclickOpenModal(item.id)}
                Aos="fade-up"
              />
            ))}
          </section>
        </div>
      </div>

      <Modal
        isOpen={openModal}
        Onclose={() => setModal(false)}
        id={selectedItem}
        SuccesstoCart={() => setSuccessTocart(true)}
      />
    </div>
  );
};
export default Peralatan;
