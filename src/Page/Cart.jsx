import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import ModalBooking from "../components/Cart/ModalBooking";
const Cart = () => {
  const { cart, Plusqty, MinusQty, removeById, SubTotal, removeAll } =
    useContext(CartContext);
  const [isOpenBooking, setIsOpenBooking] = useState(false);

  const [form, setForm] = useState({
    nama: "",
    whatsapp: "",
    tanggalAmbil: "",
    tanggalKembali: "",
    catatan: "",
  });

  const handleBooking = () => {
    if (
      !form.nama ||
      !form.whatsapp ||
      !form.tanggalAmbil ||
      !form.tanggalKembali
    ) {
      alert("Lengkapi data booking terlebih dahulu");
      return;
    }

    const daftarAlat = cart
      .map(
        (item, index) => `
    ${index + 1}. ${item.name}
    Kategori : ${item.kategori}
    merek: ${item.merek}
    ${item.nama_variant} : ${item.nilai_variant}
    Qty      : ${item.qty}
    Harga    : Rp ${item.price.toLocaleString("id-ID")}
    Subtotal : Rp ${(item.price * item.qty).toLocaleString("id-ID")}
    `
      )
      .join("\n");
    const pesan = `🏕️ *BOOKING RENTAL ALAT OUTDOOR*
    ━━━━━━━━━━━━━━━━━━
    👤 DATA PENYEWA
    ━━━━━━━━━━━━━━━━━━
    Nama : ${form.nama}
    No WA : ${form.whatsapp}
    
    📅 Tanggal Ambil
    ${form.tanggalAmbil}
    📅 Tanggal Kembali
    ${form.tanggalKembali}
    📝 Catatan
    ${form.catatan || "-"} 
    ━━━━━━━━━━━━━━━━━━
    🎒 DAFTAR ALAT
    ━━━━━━━━━━━━━━━━━━
    ${daftarAlat}
    ━━━━━━━━━━━━━━━━━━
    💰 RINGKASAN PESANAN
    ━━━━━━━━━━━━━━━━━━
    Jumlah Produk : ${cart.length}
    Total Harga :
    Rp ${SubTotal.toLocaleString("id-ID")}
    Terima kasih.
    `;

    const nomorAdmin = "6281242922597";

    window.open(
      `https://wa.me/${nomorAdmin}?text=${encodeURIComponent(pesan)}`,
      "_blank"
    );
    removeAll();
    setIsOpenBooking(false);
  };

  return (
    <section className="md:mt-20 mt-3  mb-2 overflow-hidden">
      <div className="max-w-7xl   mx-auto  px-2 py-2 2xl:px-0 mb-10 flex flex-col ">
        <h2 className="text-lg font-bold">Keranjang Booking</h2>
        <div className="flex gap-1 text-sm">
          <p>home</p> <span>{">"}</span>{" "}
          <p className="text-forestGreen">Keranjang Booking</p>
        </div>
        <div className="flex lg:flex-row flex-col lg:gap-2 md:gap-10 mt-5  lg:h-100">
          <div className="w-full lg:w-[70%] rounded-xl bg-[#012552] shadow-lg overflow-hidden">
            <div className="lg:max-h-90 max-h-100 overflow-y-auto">
              <table className="w-full min-w-170  text-sm text-white">
                <thead className="bg-[#02366F] sticky top-0">
                  <tr>
                    <th className="px-4 py-4 text-left">No</th>
                    <th className="px-4 py-4 text-left">Produk</th>
                    <th className="px-4 py-4 text-center">Harga</th>
                    <th className="px-4 py-4 text-center">Qty</th>
                    <th className="px-4 py-4 text-center">Subtotal</th>
                    <th className="px-4 py-4 text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => (
                    <tr
                      key={item.id}
                      className="border-b border-[#1b4c83] hover:bg-[#02366F]/40 transition"
                    >
                      <td className="px-4 py-4">{index + 1}</td>

                      <td className="px-4 py-4">
                        <div className="flex items-center gap-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 rounded-lg object-cover"
                          />

                          <div>
                            <h2 className="font-semibold">{item.name}</h2>
                            <p className="text-xs text-gray-300">
                              {item.kategori}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-4 text-center">
                        Rp {item.price.toLocaleString("id-ID")}
                      </td>

                      <td className="px-4 py-4">
                        <div className="flex justify-center items-center gap-3">
                          <button
                            onClick={() => MinusQty(item.id)}
                            className="w-8 h-8 rounded-full bg-[#6DBE45] hover:bg-green-600"
                          >
                            -
                          </button>

                          <span>{item.qty}</span>

                          <button
                            onClick={() => Plusqty(item.id)}
                            className="w-8 h-8 rounded-full bg-[#6DBE45] hover:bg-green-600"
                          >
                            +
                          </button>
                        </div>
                      </td>

                      <td className="px-4 py-4 text-center font-semibold text-green-400">
                        Rp {item.price * item.qty}
                      </td>

                      <td className="px-4 py-4 text-center">
                        <button
                          onClick={() => removeById(item.id)}
                          className="bg-red-500 hover:bg-red-600 px-3 py-2 rounded-lg"
                        >
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex-1   mt-4 lg:mt-0">
            <div className="bg-[#012552] w-full outline outline-green-500 rounded-md p-2 flex flex-col gap-6   items-center">
              <h2 className="font-bold mt-2">Ringkasan Pesanan</h2>
              <div className="w-[90%] outline outline-[#1b4c83]"></div>
              <div className="flex justify-between w-[90%] text-sm">
                <h3>SubTotal ({cart.length} Produk)</h3>
                <p className="text-forestGreen font-bold">
                  Rp. {SubTotal.toLocaleString("id-ID")}
                </p>
              </div>
              <div className="w-[90%] outline outline-[#1b4c83]"></div>
              <div className="flex justify-between w-[90%] text-sm items-center">
                <h3>Total Semua ({cart.length} Produk)</h3>
                <p className="text-green-400 text-lg font-bold">
                  Rp. {SubTotal.toLocaleString("id-ID")}
                </p>
              </div>
              <div className="w-[90%] text-sm flex items-center gap-4 mb-6">
                <button className="px-4 py-2 bg-linear-to-r from-[#012552] to-[#01132A]  hover:from-[#01132A] hover:to-[#012552] transition-all duration-500 shadow-2xl rounded-md ">
                  kembali
                </button>
                <button
                  disabled={cart.length === 0}
                  onClick={() => setIsOpenBooking(true)}
                  className={`bg-linear-to-r from-[#6dbe45]  ${
                    cart.length === 0 ? "cursor-no-drop" : "cursor-pointer"
                  } to-emerald-500 hover:from-emerald-500 hover:to-[#6dbe45] text-white rounded-md px-4 py-2 `}
                >
                  Booking Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalBooking
        isOpen={isOpenBooking}
        onClose={() => setIsOpenBooking(false)}
        totalHarga={SubTotal}
        totalItem={cart.length}
        form={form}
        setForm={setForm}
        handleBooking={handleBooking}
      />
    </section>
  );
};

export default Cart;
