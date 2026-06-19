import Icon_person from "../icon/Icon_person";
import Icon_protect from "../icon/Icon_protect";
import Icon_stars from "../icon/Icon_stars";
import Card from "../ui/Card";

const Keunggulan = () => {
  const data = [
    {
      id: 1,
      icon: <Icon_protect width="25" height="25" />,
      keunggulan: "Peralatan Berkualitas",
      deskripsi:
        " seluruh perlengkapan dicek fisik dan diuji fungsionalitasnya secara ketat agar siap menghadapi cuaca ekstrem gunung.",
    },
    {
      id: 2,
      icon: <Icon_stars width="25" height="25" />,
      keunggulan: "Bersih & Higienis",
      deskripsi:
        "Tenda, Sleeping Bag, dan jaket dicuci steril menggunakan sabun antisepti khusus agar selalu harum dan nyaman di pakai",
    },
    {
      id: 3,
      icon: <Icon_person width="25" height="25" />,
      keunggulan: "Pelayanan Friendly",
      deskripsi:
        "Admin kami ramah, komonikatif, dan siap memberikan arahan teknis mengenai logistik alat serta rute pendakian.",
    },
    {
      id: 4,
      icon: <Icon_stars width="25" height="25" />,
      keunggulan: "Peralatan Lengkap",
      deskripsi:
        "Kami menyewakan alat komplit mulai dari tenda badai, tas carrier premium, hingga alat-alat masak portable terkecil.",
    },
    {
      id: 5,
      icon: <Icon_protect width="25" height="25" />,
      keunggulan: "Outdoor Experience",
      deskripsi:
        "Didukung penuh oleh tim berpengalaman yang siap memberikan bimbingan teknis perihal tata cara pemakaian alat.",
    },
    {
      id: 6,
      icon: <Icon_person width="25" height="25" />,
      keunggulan: "Trusted Adventure Partner",
      deskripsi:
        "Telah dipercayai oleh ribuan pendaki pemula maupun kelompok mahasiswa pecinta alam dari berbagai penjuru daerah.",
    },
  ];
  return (
    <section className="flex flex-col items-center justify-center text-center mt-30 ">
      <h2
        data-aos="fade-up"
        // delay=""
        className=" text-forestGreen font-semibold"
      >
        Katalok Alat
      </h2>

      <h1
        data-aos="fade-up"
        delay="200"
        className="font-semibold text-[40px] text-center"
      >
        Peralatan Rental Senja Adventure
      </h1>

      <div
        data-aos="fade-up"
        delay="300"
        className="outline outline-[#01132A] w-50 relative"
      >
        <div className="absolute top-0 left-15 right-15 outline outline-[#6dbe45] "></div>
      </div>
      <div className="mt-20 grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <Card key={index}>
            <div className=" p-2 w-10 bg-[#01132A] flex items-center justify-center rounded-lg">
              {item.icon}
            </div>
            <h2 className="text-start text-xl font-bold mt-2 ">
              {item.keunggulan}
            </h2>
            <p className="text-start text-sm mt-2">{item.deskripsi}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};
export default Keunggulan;
