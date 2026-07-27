import { useContext, useState } from "react";
import sampleGamber from "../../assets/gambar_alat/sleeping_bag.jpg";
import { CartContext } from "../../Context/CartContext";
import { PeralatanContext } from "../../Context/Peralatan";
const ModalUpdate = ({ isOpen, Onclose, id }) => {
  if (!isOpen || !id) return null;
  const { findDataByID, updateIdVariantById, cart } = useContext(CartContext);
  const { VariantByProduckId } = useContext(PeralatanContext);
  const dammyData = findDataByID(id);
  // console.log(dammyData);
  const Variant = VariantByProduckId(dammyData.id_product);
  const [selectId, setSelectId] = useState(dammyData.id);

  // console.log(selectId);
  // ada id variant
  const handleupdate = () => {
    updateIdVariantById(id, selectId);
    Onclose();
  };

  return (
    <div
      onClick={Onclose}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 transition-all duration-300 ${
        isOpen
          ? "opacity-100 visible"
          : "opacity-0 invisible pointer-events-none"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-5xl bg-[#012552] text-white rounded-2xl shadow-xl transition-all duration-500 overflow-hidden ${
          isOpen ? "translate-y-0 scale-100" : "translate-y-full scale-95"
        }`}
      >
        {/* Close */}
        <button
          onClick={Onclose}
          className="absolute hidden right-4 top-4 z-20  h-9 w-9 items-center justify-center rounded-full bg-black/50 hover:bg-black"
        >
          ✕
        </button>

        {/* Header */}
        <div className="border-b border-white/20 p-5">
          <h2 className="text-center text-xl font-bold">Edit Variant Produk</h2>
        </div>

        {/* Body */}
        <div className="max-h-[85vh] overflow-y-auto p-5">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* ================= IMAGE ================= */}
            <div>
              <img
                src={dammyData.image}
                alt={dammyData.name}
                className="h-62.5 w-full rounded-xl object-cover md:h-100"
              />
            </div>

            {/* ================= DETAIL ================= */}
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold">{dammyData.name}</h3>

              <p className="mt-2 text-xl font-semibold text-forestGreen">
                Rp {dammyData.price} / Hari
              </p>

              {/* Variant */}
              <div className="mt-8">
                <p className="mb-3 font-semibold">
                  Pilih {dammyData.nama_variant}
                </p>

                <div className="flex flex-wrap gap-3">
                  {Variant.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectId(item.id)}
                      className={`rounded-lg border ${
                        selectId === item.id
                          ? "border-forestGreen bg-[#143B2B]"
                          : "border-[#163d6d] bg-[#011B40] hover:bg-[#02295f] "
                      }  px-5 py-2`}
                    >
                      {item.nila_variant}
                    </button>
                  ))}
                </div>
              </div>

              {/* Qty */}
              <div className="mt-8">
                <p className="mb-3 font-semibold">Jumlah</p>

                <div className="inline-flex overflow-hidden rounded-lg border border-white/30">
                  <button className="px-5 py-3 hover:bg-white/10">−</button>

                  <div className="flex min-w-17.5 items-center justify-center border-x border-white/30">
                    {dammyData.qty}
                  </div>
                  <button className="px-5 py-3 hover:bg-white/10">+</button>
                </div>
              </div>
              {/* Total */}
              <div className="mt-10 rounded-xl bg-white/10 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-lg">Total</p>
                  <p className="text-2xl font-bold text-forestGreen">
                    Rp {dammyData.price * dammyData.qty}
                  </p>
                </div>
              </div>

              {/* Button */}
              <div className="mt-auto pt-8">
                <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                  <button
                    onClick={Onclose}
                    className="rounded-lg border border-white/30 px-6 py-3 hover:bg-white/10"
                  >
                    Batal
                  </button>

                  <button
                    onClick={() => handleupdate()}
                    className="rounded-lg bg-forestGreen px-6 py-3 font-semibold hover:opacity-90"
                  >
                    Simpan Perubahan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalUpdate;
