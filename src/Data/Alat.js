import contoh1 from "../assets/gambar_alat/Alat.avif";
import Bangku_gunung from "../assets/gambar_alat/Bangku_gunung.jpg";
import Camping_tent from "../assets/gambar_alat/Camping_tent.jpg";
import Carriel from "../assets/gambar_alat/Carriel.jpg";

import hiking_boots from "../assets/gambar_alat/hiking_boots.jpg";
import sleeping_bag from "../assets/gambar_alat/sleeping_bag.jpg";
import Nesting_senjaAdventure from "../assets/gambar_alat/Nesting_senjaAdventure.jpg";

export const Data = [
  {
    id: 1,
    name: "Tenda Consina Magnum 4",
    image: contoh1,
    kategori: "TENDA",
    kondisi: "Sangat Baik (95%)",
    price: 75000,
    spesifikas: [
      "Kapasitas 4 orang",
      "Double Layer",
      "Waterproof PU 3000 mm",
      "Berat 3.8 kg",
    ],
    description:
      "Tenda Consina Magnum 4 cocok untuk camping 3–4 orang. Memiliki dua lapisan, tahan air, dan dilengkapi vestibule yang luas untuk menyimpan perlengkapan.",
  },
  {
    id: 2,
    name: "Bangku Lipat Outdoor",
    image: Bangku_gunung,
    kategori: "AKSESORIS",
    kondisi: "Sangat Baik (90%)",
    price: 15000,
    spesifikas: [
      "Material aluminium",
      "Kain Oxford 600D",
      "Mudah dilipat",
      "Maksimal beban 100 kg",
    ],
    description:
      "Bangku lipat outdoor yang ringan dan kokoh. Cocok digunakan saat camping, memancing, maupun piknik bersama keluarga.",
  },
  {
    id: 3,
    name: "Camping Tent 2 Person",
    image: Camping_tent,
    kategori: "TENDA",
    kondisi: "Sangat Baik (95%)",
    price: 50000,
    spesifikas: [
      "Kapasitas 2 orang",
      "Double Layer",
      "Waterproof 2500 mm",
      "Berat 2.5 kg",
    ],
    description:
      "Tenda camping praktis untuk dua orang. Ringan, mudah dipasang, dan nyaman digunakan untuk pendakian maupun camping santai.",
  },
  {
    id: 4,
    name: "Carrier 60 Liter",
    image: Carriel,
    kategori: "TAS GUNUNG",
    kondisi: "Sangat Baik (90%)",
    price: 30000,
    spesifikas: [
      "Kapasitas 60 Liter",
      "Rain Cover",
      "Backsystem nyaman",
      "Banyak kompartemen",
    ],
    description:
      "Carrier berkapasitas 60 liter yang nyaman digunakan untuk pendakian 2–3 hari. Dilengkapi rain cover dan sistem penyangga punggung yang ergonomis.",
  },
  {
    id: 5,
    name: "Sleeping Bag Polar",
    image: sleeping_bag,
    kategori: "SLEEPING BAG",
    kondisi: "Sangat Baik (95%)",
    price: 20000,
    spesifikas: [
      "Bahan Polar",
      "Nyaman hingga 5°C",
      "Ringan dan mudah dibawa",
      "Dilengkapi tas penyimpanan",
    ],
    description:
      "Sleeping bag berbahan polar yang nyaman digunakan saat camping maupun pendakian. Memberikan kehangatan optimal di malam hari.",
  },
  {
    id: 6,
    name: "Sepatu Hiking Outdoor",
    image: hiking_boots,
    kategori: "SEPATU",
    kondisi: "Sangat Baik (90%)",
    price: 35000,
    spesifikas: [
      "Sol anti slip",
      "Water Resistant",
      "Nyaman untuk trekking",
      "Ukuran 39–44",
    ],
    description:
      "Sepatu hiking dengan grip kuat dan material tahan air ringan. Cocok digunakan untuk trekking, pendakian, maupun aktivitas outdoor lainnya.",
  },
  {
    id: 7,
    name: "Nesting Camping Set",
    image: Nesting_senjaAdventure,
    kategori: "PERALATAN MASAK",
    kondisi: "Sangat Baik (95%)",
    price: 10000,
    spesifikas: ["1 Panci", "1 Wajan", "2 Mangkuk", "Material aluminium"],
    description:
      "Set nesting berbahan aluminium yang ringan dan mudah dibawa. Cocok digunakan untuk memasak selama camping atau pendakian.",
  },
];
