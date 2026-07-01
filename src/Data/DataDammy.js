export const Kategories = [
  {
    id: 1,
    nama_kategori: "Tenda",
    created_at: "2026-06-20T08:00:00",
    updated_at: "2026-06-20T08:00:00",
  },
  {
    id: 2,
    nama_kategori: "Sepatu Gunung",
    created_at: "2026-06-20T08:00:00",
    updated_at: "2026-06-20T08:00:00",
  },
  {
    id: 3,
    nama_kategori: "Carrier",
    created_at: "2026-06-20T08:00:00",
    updated_at: "2026-06-20T08:00:00",
  },
  {
    id: 4,
    nama_kategori: "Sleeping Bag",
    created_at: "2026-06-20T08:00:00",
    updated_at: "2026-06-20T08:00:00",
  },
  {
    id: 5,
    nama_kategori: "Matras",
    created_at: "2026-06-20T08:00:00",
    updated_at: "2026-06-20T08:00:00",
  },
  {
    id: 6,
    nama_kategori: "Kompor Portable",
    created_at: "2026-06-20T08:00:00",
    updated_at: "2026-06-20T08:00:00",
  },
  {
    id: 7,
    nama_kategori: "Lampu Camping",
    created_at: "2026-06-20T08:00:00",
    updated_at: "2026-06-20T08:00:00",
  },
];
export const Product = [
  {
    id: 1,
    nama_produk: "Tenda Ultralight",
    merek: "Eiger",
    image:
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=1000",
    deskripsi:
      "Tenda ultralight berbahan ripstop yang ringan, tahan air, dan cocok digunakan untuk pendakian 2 orang.",
    kategori_id: 1,
  },
  {
    id: 2,
    nama_produk: "Tenda Camping Family",
    merek: "Consina",
    image:
      "https://images.unsplash.com/photo-1523987355523-c7b5b0723c6a?q=80&w=1000",
    deskripsi:
      "Tenda keluarga berkapasitas 4–6 orang dengan ruang yang luas, ventilasi baik, dan material waterproof.",
    kategori_id: 1,
  },
  {
    id: 3,
    nama_produk: "Sepatu Hiking GTX",
    merek: "Consina",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000",
    deskripsi:
      "Sepatu hiking dengan teknologi waterproof, sol anti-slip, dan nyaman digunakan untuk trekking berbagai medan.",
    kategori_id: 2,
  },
  {
    id: 4,
    nama_produk: "Carrier Adventure",
    merek: "Rei",
    image:
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=1000",
    deskripsi:
      "Carrier berkapasitas 60–70 liter dengan rangka ergonomis, cocok untuk pendakian beberapa hari.",
    kategori_id: 3,
  },
  {
    id: 5,
    nama_produk: "Sleeping Bag Polar",
    merek: "Naturehike",
    image:
      "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=1000",
    deskripsi:
      "Sleeping bag berbahan lembut dengan kemampuan menjaga suhu tubuh pada cuaca dingin hingga sekitar 5°C.",
    kategori_id: 4,
  },
  {
    id: 6,
    nama_produk: "Matras Inflatable",
    merek: "Eiger",
    image:
      "https://images.unsplash.com/photo-1537933047476-8015afb28292?q=80&w=1000",
    deskripsi:
      "Matras angin yang ringan, mudah dilipat, memberikan kenyamanan saat beristirahat di alam terbuka.",
    kategori_id: 5,
  },
  {
    id: 7,
    nama_produk: "Kompor Portable Mini",
    merek: "Kovea",
    image:
      "https://images.unsplash.com/photo-1609252920297-b0f71154235e?q=80&w=1000",
    deskripsi:
      "Kompor portable berbahan stainless steel dengan konsumsi gas yang efisien, ideal untuk aktivitas camping.",
    kategori_id: 6,
  },
  {
    id: 8,
    nama_produk: "Headlamp Rechargeable",
    merek: "Eiger",
    deskripsi:
      "Headlamp LED rechargeable dengan beberapa mode pencahayaan dan daya tahan baterai yang lama.",
    kategori_id: 7,
  },
];

export const variant_product = [
  {
    id: 1,
    nama_variant: "Kapasitas",
    nilai_variant: "2 Orang",
    harga: 70000,
    stock: 5,
    sisa_stock: 5,
    product_id: 1,
    description:
      "Tenda camping kapasitas 2 orang dengan kondisi fisik 95% masih sangat kokoh dan siap pakai.",
  },
  {
    id: 2,
    nama_variant: "Kapasitas",
    nilai_variant: "4 Orang",
    harga: 90000,
    stock: 3,
    sisa_stock: 3,

    product_id: 1,
    description:
      "Tenda dome kapasitas 4 orang, kondisi frame dan pasak 90% mulus, sangat cocok untuk camping keluarga.",
  },
  {
    id: 3,
    nama_variant: "Kapasitas",
    nilai_variant: "6 Orang",
    harga: 120000,
    stock: 2,
    sisa_stock: 2,

    product_id: 2,
    description:
      "Tenda besar kapasitas 6 orang, lapisan outer waterproof dengan tingkat kondisi 92% terawat.",
  },
  {
    id: 4,
    nama_variant: "Ukuran",
    nilai_variant: "39",
    harga: 60000,
    stock: 2,
    sisa_stock: 2,

    product_id: 3,
    description:
      "Sepatu outdoor ukuran 39. Kondisi sol bawah sangat tebal dan grip 90% mencengkeram kuat.",
  },
  {
    id: 5,
    nama_variant: "Ukuran",
    nilai_variant: "40",
    harga: 60000,
    stock: 4,
    sisa_stock: 4,

    product_id: 3,
    description:
      "Sepatu hiking ukuran 40. Kondisi bahan luar dan jahitan 93% mulus tanpa robek.",
  },
  {
    id: 6,
    nama_variant: "Ukuran",
    nilai_variant: "41",
    harga: 60000,
    stock: 5,
    sisa_stock: 5,

    product_id: 3,
    description:
      "Sepatu gunung sport ukuran 41. Kondisi fisik 90% bersih, insole dalam masih empuk.",
  },
  {
    id: 7,
    nama_variant: "Ukuran",
    nilai_variant: "42",
    harga: 60000,
    stock: 3,
    sisa_stock: 3,

    product_id: 3,
    description:
      "Sepatu trekking ukuran 42. Kondisi keseluruhan 95%, barang terawat dan jarang dipakai.",
  },
  {
    id: 8,
    nama_variant: "Kapasitas",
    nilai_variant: "60 Liter",
    harga: 80000,
    stock: 6,
    sisa_stock: 6,
    product_id: 4,
    description:
      "Tas carrier kapasitas 60 Liter. Ruang penyimpanan luas, kondisi resleting dan strap 90% berfungsi normal.",
  },
  {
    id: 9,
    nama_variant: "Kapasitas",
    nilai_variant: "70 Liter",
    harga: 100000,
    stock: 2,
    sisa_stock: 2,

    product_id: 4,
    description:
      "Tas gunung backpack kapasitas 70 Liter. Backsystem nyaman, kondisi kain luar 91% bersih bebas noda berat.",
  },
  {
    id: 10,
    nama_variant: "Tipe",
    nilai_variant: "Polar",
    harga: 40000,
    stock: 8,
    sisa_stock: 8,
    product_id: 5,
    description:
      "Sleeping bag tipe Polar yang hangat untuk cuaca dingin ekstrem. Kondisi kain lembut 94% prima.",
  },
  {
    id: 11,
    nama_variant: "Ukuran",
    nilai_variant: "Single",
    harga: 25000,
    stock: 10,
    sisa_stock: 10,

    product_id: 6,
    description:
      "Kasur angin / matras ukuran Single. Kondisi ketahanan angin 90% rapat, tidak ada kebocoran.",
  },
  {
    id: 12,
    nama_variant: "Ukuran",
    nilai_variant: "Double",
    harga: 40000,
    stock: 5,
    sisa_stock: 5,

    product_id: 6,
    description:
      "Matras camping ukuran Double untuk dua orang. Kondisi fisik luar 92% mulus dan lipatan masih rapi.",
  },
  {
    id: 13,
    nama_variant: "Tipe",
    nilai_variant: "Mini",
    harga: 30000,
    stock: 6,
    sisa_stock: 6,

    product_id: 7,
    description:
      "Kompor portable tipe Mini, praktis dibawa mendaki. Kondisi pemantik api 90% responsif dan berfungsi baik.",
  },
  {
    id: 14,
    nama_variant: "Tipe",
    nilai_variant: "Rechargeable",
    harga: 20000,
    stock: 7,
    sisa_stock: 7,
    product_id: 8,
    description:
      "Senter kepala / headlamp tipe Rechargeable. Tingkat kecerahan LED optimal dengan kondisi baterai 95% sehat.",
  },
];
