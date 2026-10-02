import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import ModalBooking from "../components/Cart/ModalBooking";
import { useNavigate } from "react-router-dom";
import { Package, ShoppingBasket, ShoppingCart } from "lucide-react";
import ModalUpdate from "../components/Cart/ModalUpdate";
const Cart = () => {
  const { cart, Plusqty, MinusQty, removeById, SubTotal, removeAll } =
    useContext(CartContext);
  // console.log(cart);
  const [isOpenBooking, setIsOpenBooking] = useState(false);
  const navigasi = useNavigate();
  const [isOpenUpdate, setUpdate] = useState(false);
  const [selectId, setSelectId] = useState(null);
  const [itemToDelete, setItemToDelete] = useState(null);
  // console.log(selectId);

  const [form, setForm] = useState({
    nama: "",
    whatsapp: "",
    tanggalAmbil: "",
    tanggalKembali: "",
    catatan: "",
  });

  const handleBooking = () => {
    const today = new Date();
    const minDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

    if (
      !form.nama ||
      !form.whatsapp ||
      !form.tanggalAmbil ||
      !form.tanggalKembali
    ) {
      alert("Lengkapi data booking terlebih dahulu");
      return;
    }

    if (form.tanggalAmbil < minDate || form.tanggalKembali < minDate) {
      alert("Tanggal booking tidak boleh sebelum hari ini");
      return;
    }

    if (form.tanggalKembali < form.tanggalAmbil) {
      alert("Tanggal kembali tidak boleh sebelum tanggal ambil");
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
    <section className="mt-4  mb-2 overflow-hidden ">
      <div className="max-w-7xl   mx-auto  px-2 py-2 2xl:px-0 mb-10 flex flex-col ">
        <div className="flex gap-2">
          <button
            onClick={() => navigasi(-1)}
            className="px-6 py-2  text-white cursor-pointer hover:bg-[#6DBE45] bg-green-600 transition-all duration-500 text-lg shadow-2xl rounded-md "
          >
            {"<"}
          </button>
          <div>
            <h2 className="text-lg font-bold text-white">Keranjang Booking</h2>
            <div className="flex gap-1 text-sm">
              <p className="text-white">home</p>{" "}
              <span className="text-white">{">"}</span>{" "}
              <p className="text-forestGreen">Keranjang Booking</p>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row  flex-col lg:gap-2 md:gap-10 mt-5  lg:h-100">
          <div className="w-full lg:w-[70%] rounded-xl bg-[#012552] shadow-lg overflow-hidden">
            <div className="lg:max-h-100 max-h-110  overflow-y-auto py-2 px-2 space-y-2">
              {cart.length === 0 && (
                <div className="h-50   md:h-80 flex flex-col items-center justify-center">
                  <ShoppingBasket size={50} className="text-gray-400" />
                  <p className="text-gray-400">keranjang kosong</p>
                </div>
              )}
              {cart.map((item, index) => (
                <div
                  onClick={() => {
                    setSelectId(item.id);
                    setUpdate(true);
                  }}
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
                        {/* <span className="text-white text-[12px]">
                          {item.kategori}
                          {" : "}
                        </span> */}
                        {item.name}
                      </p>
                      <p className="md:hidden flex-col my-2 ">
                        <span>
                          {item.nama_variant} {": "}
                        </span>
                        <span>{item.nilai_variant}</span>
                      </p>

                      <p className="md:hidden block my-2">
                        Rp. {item.price.toLocaleString("id-ID")}
                      </p>

                      <div className="flex md:hidden  md:justify-center mt-2  items-center gap-3 ">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            MinusQty(item.id);
                          }}
                          className="w-8 h-8 rounded-full bg-[#6DBE45] hover:bg-green-600"
                        >
                          -
                        </button>
                        <span>{item.qty}</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            Plusqty(item.id);
                          }}
                          className="w-8 h-8 rounded-full bg-[#6DBE45] hover:bg-green-600"
                        >
                          +
                        </button>

                        <p className="flex flex-col absolute right-2 bottom-2  md:hidden text-[12px]">
                          <span className="text-forestGreen font-semibold">
                            SubTotal
                          </span>
                          Rp. {(item.price * item.qty).toLocaleString("id-ID")}
                        </p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setItemToDelete(item);
                        }}
                        className="bg-red-500 absolute  right-2 top-2  md:hidden block hover:bg-red-600 px-3 py-2 rounded-lg"
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
                      onClick={(e) => {
                        e.stopPropagation();
                        MinusQty(item.id);
                      }}
                      className="w-8 h-8 rounded-full bg-[#6DBE45] hover:bg-green-600"
                    >
                      -
                    </button>

                    <span>{item.qty}</span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        Plusqty(item.id);
                      }}
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
                    onClick={(e) => {
                      e.stopPropagation();
                      setItemToDelete(item);
                    }}
                    className="bg-red-500 cursor-pointer hidden md:block hover:bg-red-600 px-3 py-2 rounded-lg"
                  >
                    Hapus
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1  md:relative absolute bottom-0 right-0 left-0  mt-4 lg:mt-0">
            <div className="bg-[#012552] w-full outline md:outline-green-500 rounded-md p-2 flex flex-col gap-6   items-center">
              <h2 className="font-bold mt-2 text-white md:block hidden ">
                Ringkasan Pesanan
              </h2>
              <div className="w-[90%] outline outline-[#1b4c83] md:block hidden"></div>
              <div className=" justify-between w-[90%] text-sm md:flex hidden">
                <h3 className="text-white">SubTotal ({cart.length} Produk)</h3>
                <p className="text-forestGreen font-bold">
                  Rp. {SubTotal.toLocaleString("id-ID")}
                </p>
              </div>
              <div className="w-[90%] outline outline-[#1b4c83] md:block hidden"></div>
              <div className="flex justify-between w-[90%] text-sm items-center">
                <h3 className="text-white mt-4 md:mt-0">
                  Total Semua ({cart.length} Produk)
                </h3>
                <p className="text-green-400 text-lg font-bold">
                  Rp. {SubTotal.toLocaleString("id-ID")}
                </p>
              </div>
              <div className="w-[90%] text-sm flex items-center gap-4 mb-6">
                <button
                  disabled={cart.length === 0}
                  onClick={() => setIsOpenBooking(true)}
                  className={`bg-linear-to-r from-[#6dbe45]  ${
                    cart.length === 0 ? "cursor-no-drop" : "cursor-pointer"
                  } to-emerald-500 hover:from-emerald-500 w-full hover:to-[#6dbe45] text-white rounded-md px-4 md:py-2 py-4 `}
                >
                  checkout Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalUpdate
        id={selectId}
        isOpen={isOpenUpdate}
        Onclose={() => setUpdate()}
      />
      <ModalBooking
        isOpen={isOpenBooking}
        onClose={() => setIsOpenBooking(false)}
        totalHarga={SubTotal}
        totalItem={cart.length}
        form={form}
        setForm={setForm}
        handleBooking={handleBooking}
      />
      {itemToDelete && (
        <div className="fixed inset-0 z-110 flex items-center justify-center bg-black/60 px-4">
          <div
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="delete-cart-item-title"
            className="w-full max-w-sm rounded-lg border border-[#1b4c83] bg-[#012552] p-5 text-white shadow-xl"
          >
            <h2 id="delete-cart-item-title" className="text-lg font-bold">
              Hapus pesanan?
            </h2>
            <p className="mt-2 text-sm text-gray-300">
              {itemToDelete.name} akan dihapus dari keranjang.
            </p>
            <div className="mt-5 flex justify-end gap-3">
              <button
                onClick={() => setItemToDelete(null)}
                className="rounded-md border border-gray-400 px-4 py-2 hover:bg-white/10"
              >
                Batal
              </button>
              <button
                onClick={() => {
                  removeById(itemToDelete.id);
                  setItemToDelete(null);
                }}
                className="rounded-md bg-red-600 px-4 py-2 hover:bg-red-700"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
