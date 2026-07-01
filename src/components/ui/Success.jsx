import { CheckCircle2, X } from "lucide-react";

const Success = ({ onsuccess, onClose }) => {
  return (
    <div
      className={`fixed top-24 right-4 z-50 transition-all duration-500 ${
        onsuccess
          ? "translate-x-0 opacity-100"
          : "translate-x-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative overflow-hidden rounded-xl border border-green-400/30 bg-green-500/90 backdrop-blur-md shadow-2xl min-w-[320px]">
        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 h-1 bg-white/50 animate-[shrink_2s_linear_forwards]" />

        <div className="flex items-center gap-3 px-4 py-4">
          {/* Icon */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
            <CheckCircle2 size={24} />
          </div>

          {/* Text */}
          <div className="flex-1">
            <h3 className="font-semibold">Berhasil</h3>
            <p className="text-sm text-white/90">
              Produk berhasil ditambahkan ke keranjang
            </p>
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            className="rounded-full p-1 hover:bg-white/20 transition"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
