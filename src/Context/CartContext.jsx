import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
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
      return prevCart.map((item) => {
        item.id === id ? { ...item, qty: qty + 1 } : item;
      });
    });
  };

  const MinusQty = (id) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          {
            item.id === id ? { ...item, qty: item.qty - 1 } : item;
          }
        })
        .filter((item) => item.qty > 0);
    });
  };

  // hapus data cart berdasarkan id
  const removeById = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };
  // hapus semua data dari cart
  const removeAll = () => {
    setCart([]);
  };
  //  jumlah item (reduce)
  const TotalItem = cart.reduce((total, item) => {
    return total + item.qty;
  }, 0);

  // Total harga rumus => total + item.price * item.qty
  <CartContext.Provider
    value={{
      cart,
      addToCart,
      Plusqty,
      MinusQty,
      removeById,
      removeAll,
      TotalItem,
    }}
  >
    {children}
  </CartContext.Provider>;
};
