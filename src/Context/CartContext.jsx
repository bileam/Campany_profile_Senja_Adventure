import { createContext, useEffect, useState } from "react";

const cartContext = createContext();

export const cartProvider = ({}) => {
  // mengambil data dari localstore
  const [cart, setCart] = useState(() => {
    const storedcart = localStorage.getItem("cart");
    return storedcart ? JSON.parse(storedcart) : [];
  });
  // menyimpan ke localstore setiap data beruba
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // function addcart
  const addToCart = (alat) => {
    setCart((prevcart) => {
      // cari datanya menggunakan array.find(array baru)
      const existingAlat = prevcart.find((item) => item.id === alat.id);
      // produk jika sudah ada maka tambahkan qty + 1
      if (existingAlat) {
        return prevcart.map((item) =>
          item.id !== alat.id ? item : { ...item, qty: item.qty + 1 }
        );
      }
      //  jika belum ada
      return [...prevcart, { ...alat, qty: 1 }];
    });
  };
  // function increaseQTY
  const Plusqty = (id) => {
    setCart((prevCart) => {
      prevCart.map((item) => {
        item.id === id ? { ...item, qty: qty + 1 } : item;
      });
    });
  };
  // hapus data cart berdasarkan id
  // total price (reduce)
};
