import { X } from "lucide-react";

const ModalBooking = ({
  isOpen,
  onClose,
  totalHarga,
  totalItem,
  form,
  setForm,
  handleBooking,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-start md:items-center justify-center bg-black/70 backdrop-blur-sm p-3 md:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl rounded-2xl border border-[#6DBE45]/50 bg-[#0A3267] shadow-2xl max-h-[90vh] overflow-y-auto my-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-white/10 p-4 md:p-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white">
              Form Booking
            </h2>
            <p className="text-xs md:text-sm text-gray-300">
              Lengkapi data penyewaan Anda
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-white/10 transition"
          >
            <X className="text-white" size={20} />
          </button>
        </div>
        <div className="p-4 md:p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm text-white">
                Nama Penyewa
              </label>
              <input
                type="text"
                value={form.nama}
                onChange={(e) =>
                  setForm({
                    ...form,
                    nama: e.target.value,
                  })
                }
                placeholder="Masukkan nama lengkap"
                className="w-full rounded-lg border border-white/10 bg-[#072A56] p-3 text-sm md:text-base text-white outline-none focus:border-[#6DBE45]"
              />
            </div>

            {/* WA */}
            <div>
              <label className="mb-2 block text-sm text-white">
                Nomor WhatsApp
              </label>

              <input
                type="text"
                value={form.whatsapp}
                onChange={(e) =>
                  setForm({
                    ...form,
                    whatsapp: e.target.value,
                  })
                }
                placeholder="08xxxxxxxxxx"
                className="w-full rounded-lg border border-white/10 bg-[#072A56] p-3 text-sm md:text-base text-white outline-none focus:border-[#6DBE45]"
              />
            </div>

            {/* Tanggal Ambil */}
            <div>
              <label className="mb-2 block text-sm text-white">
                Tanggal Ambil
              </label>

              <input
                type="date"
                value={form.tanggalAmbil}
                onChange={(e) =>
                  setForm({
                    ...form,
                    tanggalAmbil: e.target.value,
                  })
                }
                className="w-full rounded-lg border border-white/10 bg-[#072A56] p-3 text-sm md:text-base text-white outline-none focus:border-[#6DBE45]"
              />
            </div>

            {/* Tanggal Kembali */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm text-white">
                Tanggal Kembali
              </label>

              <input
                type="date"
                value={form.tanggalKembali}
                onChange={(e) =>
                  setForm({
                    ...form,
                    tanggalKembali: e.target.value,
                  })
                }
                className="w-full rounded-lg border border-white/10 bg-[#072A56] p-3 text-sm md:text-base text-white outline-none focus:border-[#6DBE45]"
              />
            </div>

            {/* Catatan */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm text-white">
                Catatan Tambahan
              </label>

              <textarea
                rows={4}
                value={form.catatan}
                onChange={(e) =>
                  setForm({
                    ...form,
                    catatan: e.target.value,
                  })
                }
                placeholder="Contoh: Ambil alat jam 08.00 pagi"
                className="w-full rounded-lg border border-white/10 bg-[#072A56] p-3 text-sm md:text-base text-white outline-none focus:border-[#6DBE45]"
              />
            </div>
          </div>

          {/* Ringkasan */}
          <div className="mt-6 rounded-xl bg-[#072A56] p-4">
            <h3 className="mb-4 text-base md:text-lg font-semibold text-white">
              Ringkasan Pesanan
            </h3>

            <div className="flex justify-between text-sm md:text-base text-gray-300">
              <span>Total Item</span>
              <span>{totalItem} Produk</span>
            </div>

            <div className="mt-3 flex justify-between items-center">
              <span className="text-white text-sm md:text-base">
                Total Harga
              </span>

              <span className="text-[#6DBE45] text-lg md:text-2xl font-bold">
                Rp {totalHarga.toLocaleString("id-ID")}
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col-reverse md:flex-row md:justify-end gap-3 border-t border-white/10 p-4 md:p-6">
          <button
            onClick={onClose}
            className="w-full md:w-auto rounded-lg bg-slate-800 px-6 py-3 text-white transition hover:bg-slate-700"
          >
            Batal
          </button>

          <button
            onClick={handleBooking}
            className="w-full md:w-auto rounded-lg bg-[#6DBE45] px-6 py-3 font-semibold text-white transition hover:brightness-110"
          >
            Booking via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalBooking;
