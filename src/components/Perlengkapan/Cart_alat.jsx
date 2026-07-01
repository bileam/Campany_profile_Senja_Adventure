const Card_alat = ({ item, onDetail, delay }) => {
  const [loadingImage, setLoadingImage] = useState(true);

  return (
    <div
      data-aos="zoom-in-up"
      data-aos-delay={delay}
      onClick={onDetail}
      className="overflow-hidden shadow hover:shadow hover:shadow-[forestGreen] hover:-translate-y-1 transition-all duration-700 rounded-lg group bg-[#012552]/70 h-full flex flex-col"
    >
      {/* =================== IMAGE =================== */}
      <div className="overflow-hidden relative h-70">
        {/* Skeleton */}
        {loadingImage && (
          <div className="absolute inset-0 animate-pulse bg-gray-700"></div>
        )}

        <img
          loading="lazy"
          src={item.image}
          alt={item.nama_product}
          onLoad={() => setLoadingImage(false)}
          className={`object-cover h-70 w-full group-hover:scale-110 transition-all duration-500 ${
            loadingImage ? "opacity-0" : "opacity-100"
          }`}
        />

        <div className="absolute top-4 left-2 right-2 flex justify-between">
          <h2 className="py-1 px-2 bg-[#01132a]/90 text-sm text-forestGreen font-extralight rounded-md">
            {item.kategori}
          </h2>

          <h2 className="text-navyDeep py-1 px-2 bg-forestGreen rounded-md text-sm font-extralight">
            {item.merek}
          </h2>
        </div>
      </div>

      {/* =================== CONTENT =================== */}

      <div className="py-6 px-4 text-start flex-1 flex flex-col">
        <h1 className="font-semibold group-hover:text-forestGreen transition-colors duration-300">
          {item.nama_product}
        </h1>

        <p className="text-[12px] text-[#D9D9D9] overflow-hidden text-ellipsis line-clamp-2">
          {item.desc}
        </p>

        <div className="mt-2 outline outline-0.5 outline-[#012552]"></div>

        <p className="text-[#D9D9D9] mt-2 inline-block text-[12px]">
          Harga sewa
        </p>

        <div className="flex justify-between items-center mt-auto">
          <p className="text-forestGreen text-[14px]">
            Rp. {item.harga.toLocaleString("id-ID")} /hari
          </p>

          {/* <button
            onClick={(e) => {
              e.stopPropagation();
              setIdvariant(item.id);
              newVariant(item.id);
              // console.log(newVariant(item.id));
              onSuccess();
              // console.log(newVariant(item.id));
              // addToCart(item);
            }}
            className="flex gap-2 bg-linear-to-r z-20 cursor-pointer hover:scale-110 transition-transform duration-500 from-[#6DBE45] to-[#43CB00]/60 hover:from-emerald-500 hover:to-[#6dbe45] shadow-2xl p-2 rounded-full text-[12px]"
          >
            <ShoppingCart className="w-5 h-5 stroke-2" />
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Card_alat;
