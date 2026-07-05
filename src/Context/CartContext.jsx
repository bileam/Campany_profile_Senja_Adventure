import { createContext, useEffect, useState } from "react";
import { variant_product } from "../Data/DataDammy";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedcart = localStorage.getItem("cart");
    return storedcart ? JSON.parse(storedcart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (alat) => {
    setCart((prevcart) => {
      const existingAlat = prevcart.find((item) => item.id === alat.id);
      if (existingAlat) {
        return prevcart.map((item) =>
          item.id === alat.id ? { ...item, qty: item.qty + 1 } : item
        );
      }

      return [...prevcart, { ...alat, qty: 1 }];
    });
  };

  const Plusqty = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // update

  // update variant
  const update = (idProduct, idlama, idBaru) => {
    // cari dulu id apakah ada didalam cart?

    // kita cari id product dudalam tabel variant kemudian ambil id variant yang di pilih
    const variant = variant_product
      .filter((item) => item.product_id === idProduct)
      .map((item) => ({
        id: item.id,
        variant_value: item.nilai_variant,
      }));
    // console.log(variant);
    const variant_value = variant.find((item) => item.id === idBaru);
    return variant_value;
  };
  // console.log(variant_product);
  // console.log(update(3, 4, 5));

  const MinusQty = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const removeById = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const removeAll = () => {
    setCart([]);
  };

  const TotalItem = cart.reduce((total, item) => total + item.qty, 0);
  const SubTotal = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  // 0 + 75000 * 1, total =75000
  // 75000 + 15000  * 1 = 90000
  // 90000 + 20000 * 1 =29000

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        Plusqty,
        MinusQty,
        removeById,
        removeAll,
        TotalItem,
        SubTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
