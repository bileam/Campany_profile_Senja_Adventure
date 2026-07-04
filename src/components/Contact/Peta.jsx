import React from "react";

const Peta = () => {
  return (
    <section className="w-full md:mt-20 mt-6 bg-[#01132a]/50 rounded-lg shadow-2xl p-4">
      <div className="max-w-7xl mx-auto md:px-6">
        <div className="text-center mb-4">
          <span className="text-green-500 uppercase tracking-widest font-semibold">
            Lokasi Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            Temukan Senja Adventure
          </h2>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-700 shadow-2xl">
          <iframe
            title="Lokasi Senja Adventure"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4227.508541558809!2d106.5942123179836!3d-6.274893571574429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fd5303548779%3A0x951c306876069a0c!2sPark%20Serpong%20Residence!5e0!3m2!1sid!2sid!4v1783188970376!5m2!1sid!2sid"
            className="w-full h-87.5 md:h-125 lg:h-150"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
};

export default Peta;
