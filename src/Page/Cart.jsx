import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import ModalBooking from "../components/Cart/ModalBooking";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cart, Plusqty, MinusQty, removeById, SubTotal, removeAll } =
    useContext(CartContext);
  const [isOpenBooking, setIsOpenBooking] = useState(false);
  const navigasi = useNavigate();

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
        <div className="flex lg:flex-row  flex-col lg:gap-2 md:gap-10 mt-5  lg:h-100">
          <div className="w-full lg:w-[70%] rounded-xl bg-[#012552] shadow-lg overflow-hidden">
            <div className="lg:max-h-90 max-h-100 overflow-y-auto py-2 px-2 space-y-2">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="border-b relative flex justify-between items-center border-[#1b4c83] hover:bg-[#02366F]/40 transitionw-full md:min-w-170 text-sm text-white  p-2"
                >
                  <div className="flex gap-2  md:items-center ">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="md:w-20 md:h-20 w-25 max-h-40 rounded-lg object-cover"
                    />
                    <div>
                      <p className="md:max-w-40 gap-2 md:gap-0 flex flex-col flex-coltext-wrap text-forestGreen font-bold">
                        <span className="text-white text-[12px]">
                          {item.kategori}
                          {" : "}
                        </span>
                        {item.name}
                      </p>
                      <p className="md:hidden flex-col ">
                        <span>
                          {item.nama_variant} {": "}
                        </span>
                        <span>{item.nilai_variant}</span>
                      </p>

                      <p className="md:hidden block ">
                        Rp. {item.price.toLocaleString("id-ID")}
                      </p>
                      <p className="flex flex-col  md:hidden">
                        <span className="text-forestGreen font-semibold">
                          SubTotal
                        </span>
                        Rp. {(item.price * item.qty).toLocaleString("id-ID")}
                      </p>
                      <div className="flex md:hidden md:justify-center mt-2  items-center gap-3">
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
                      <button
                        onClick={() => removeById(item.id)}
                        className="bg-red-500 absolute  right-2 top-[50%]  md:hidden block hover:bg-red-600 px-3 py-2 rounded-lg"
                      >
                        X
                      </button>
                    </div>
                  </div>

                  <p className=" md:flex flex-col hidden">
                    <span>{item.nama_variant}</span>
                    <span>{item.nilai_variant}</span>
                  </p>
                  <p className="md:block hidden">
                    Rp. {item.price.toLocaleString("id-ID")}
                  </p>
                  <div className="md:flex hidden justify-center  items-center gap-3">
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
                  <p className="md:flex hidden flex-col items-center ">
                    <span className="text-forestGreen font-semibold">
                      SubTotal
                    </span>
                    Rp. {(item.price * item.qty).toLocaleString("id-ID")}
                  </p>
                  <button
                    onClick={() => removeById(item.id)}
                    className="bg-red-500 hidden md:block hover:bg-red-600 px-3 py-2 rounded-lg"
                  >
                    Hapus
                  </button>
                </div>
              ))}
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
                <button
                  onClick={() => navigasi(-1)}
                  className="px-4 py-2 bg-linear-to-r cursor-pointer from-[#012552] to-[#01132A]  hover:from-[#01132A] hover:to-[#012552] transition-all duration-500 shadow-2xl rounded-md "
                >
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
