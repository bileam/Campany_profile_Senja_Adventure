import { createContext, useEffect, useState } from "react";
import { Kategories, Product, variant_product } from "../Data/DataDammy";
import Modal from "../components/Perlengkapan/Modal";
export const PeralatanContext = createContext();

export const PeralatanProvider = ({ children }) => {
  const [peralatan, setPeralatan] = useState(() => {
    const storedAlat = localStorage.getItem("alat");
    return storedAlat ? JSON.parse(storedAlat) : [];
  });

  const NewPeralatan = Product.map((itemProduct) => {
    const newCategories = Kategories.find(
      (K) => K.id === itemProduct.kategori_id
    );

    const firstVariant = variant_product.find(
      (V) => V.product_id === itemProduct.id
    );

    return {
      id: itemProduct.id,
      merek: itemProduct.merek,
      kategori: newCategories.nama_kategori,
      nama_product: itemProduct.nama_produk,
      harga: firstVariant?.harga,
      image: itemProduct?.image,
      nama_variant: firstVariant?.nama_variant,
      desc: itemProduct.deskripsi,
    };
  });

  useEffect(() => {
    localStorage.setItem("alat", JSON.stringify(NewPeralatan));
  }, [peralatan]);

  const newVariant = (id) => {
    const newProduct = Product.find((item) => item.id === id);
    const newKategori = Kategories.find(
      (item) => item.id === newProduct.kategori_id
    );

    const variant = variant_product
      .filter((item) => item.product_id === id)
      .map((item) => ({
        id: item.id,
        harga: item.harga,
        nama_variant: item.nama_variant,
        nilai: item.nilai_variant,
      }));
    return {
      id: newProduct.id,
      image: newProduct.image,
      nama: newProduct.nama_produk,
      desc: newProduct.deskripsi,
      merek: newProduct.merek,
      kategori: newKategori.nama_kategori,
      variant,
    };
  };

  const priceVarint = (id) => {
    const variant = variant_product.find((item) => item.id === id);

    if (!variant) return null;

    return {
      harga: variant.harga,
      nama_variant: variant.nama_variant,
      nilai_variant: variant.nilai_variant,
    };
  };

  const ModalPeralatan = (id) => {
    const newProduct = Product.find((item) => item.id === id);
    const kategori = Kategories.find(
      (item) => item.id === newProduct.kategori_id
    );
    const newVariant = variant_product
      .filter((item) => item.product_id === newProduct.id)
      .map((item) => ({
        nama_variant: item.nama_variant,
        nilai_variant: item.nilai_variant,
        harga: item.harga,
      }));

    //  console.log(Modal);
    return {
      kategori: kategori.nama_kategori,
      image: newProduct.image,
      nama: newProduct.nama_produk,
      merek: newProduct.merek,
      desc: newProduct.deskripsi,
      newVariant,
    };
  };

  return (
    <PeralatanContext.Provider
      value={{ newVariant, peralatan, priceVarint, ModalPeralatan }}
    >
      {children}
    </PeralatanContext.Provider>
  );
};
