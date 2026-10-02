import { createContext, useEffect, useState } from "react";
import { variant_product } from "../Data/DataDammy";
import { data } from "react-router-dom";
import { toast } from "sonner";
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
    toast.success(`${alat.name} berhasil ditambahkan ke keranjang`);
  };

  // console.log(cart);
  const findDataByID = (id) => {
    const findByData = cart.find((item) => item.id === id);
    return findByData;
  };

  // console.log(findDataByID(1));
  const Plusqty = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // update

  // update variant
  const updatevariant = (idProduct, idselect, id) => {
    // cari dulu id apakah ada didalam cart?
    const existing = cart.find((item) => item.id === id);
    if (!existing) return "tidak ada didalam cart";
    // kita cari id product dudalam tabel variant kemudian ambil id variant yang di pilih
    const variant = variant_product
      .filter((item) => item.product_id === idProduct)
      .map((item) => ({
        id: item.id,
        variant_value: item.nilai_variant,
      }));
    // console.log(variant);
    const selectvariant = variant.find((item) => item.id === idselect);
    return selectvariant;
    // console.log(variant);
    // const variant_value = variant.find((item) => item.id === idBaru);
    // return variant_value;
  };
  // console.log(variant_product);
  // console.log(updatevariant(1, 4, 1));

  // update id variant
  const updateIdVariantById = (id, idVariant) => {
    const variant = variant_product.find((item) => item.id === idVariant);
    if (!variant) return;
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              nama_variant: variant.nama_variant,
              nilai_variant: variant.nilai_variant,
              price: variant.harga,
            }
          : item
      )
    );
  };

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
        addToCart,
        cart,
        findDataByID,
        Plusqty,
        MinusQty,
        removeById,
        removeAll,
        TotalItem,
        SubTotal,
        updateIdVariantById,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
