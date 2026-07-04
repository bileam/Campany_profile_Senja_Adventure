import { useState } from "react";
import Input from "../ui/Input";
import { Mail, Phone, User } from "lucide-react";

const Form = () => {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    telepon: "",
    topik: "",
    pesan: "",
  });

  const handleOnchange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const topics = [
    "Rental Alat",
    "Booking",
    "Konfirmasi Pembayaran",
    "Kerjasama",
    "Komplain",
    "Lainnya",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(form);
    // pesan
    const pesan = `*SELAMAT DATANG DI SENJA ADVENTURE* 
    nama: ${form.nama}
    email: ${form.email}
    noHp : ${form.telepon}
    Topik : ${form.topik}
    pesan: 
  ${form.pesan}
    `;
    const nomorAdmin = "6281242922597";
    window.open(
      `https://wa.me/${nomorAdmin}?text=${encodeURIComponent(pesan)}`,
      "_blank"
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" md:w-[50%] w-full bg-[#01132a]/50 shadow-2xl rounded-lg space-y-5   py-4 px-6"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-white text-lg font-semibold">
          Kirim pesan kepada kami
        </h2>
        <span className="block outline w-20 outline-[#6dbe45] -mt-1"></span>
        <p className="text-sm">
          isi formulir di bawah ini, tim kami akan segera merespon pesan anda.
        </p>
      </div>
      <div className="flex md:flex-row flex-col gap-4 mt-2 ">
        <Input
          icont={
            <User
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
          }
          placeholder="Nama Lengkap"
          type="text"
          name="nama"
          value={form.nama}
          onChange={handleOnchange}
        />
        <Input
          icont={
            <Mail
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
          }
          placeholder="Email Anda"
          type="email"
          name="email"
          value={form.email}
          onChange={handleOnchange}
        />
      </div>
      <Input
        icont={
          <Phone
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
        }
        placeholder="Nomor Telepon"
        type="number"
        name="telepon"
        value={form.telepon}
        onChange={handleOnchange}
      />
      <select
        name="topik"
        value={form.topik}
        onChange={handleOnchange}
        className="w-full h-12 rounded-lg bg-[#01132a]  border border-[#24476B] text-white px-4"
      >
        <option value="">Pilih Topik</option>
        {topics.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <textarea
        name="pesan"
        value={form.pesan}
        onChange={handleOnchange}
        id=""
        placeholder="Tuliskan pesan anda di sini"
        className="w-full max-h-25 min-h-24 rounded-lg py-2 bg-[#01132a]  border border-[#24476B] text-white px-4"
      ></textarea>
      <button
        type="submit"
        className=" w-full py-2 rounded-lg hover:brightness-90 cursor-pointer transition-colors duration-500 bg-[#6dbe45]"
      >
        Kirim Pesan
      </button>
    </form>
  );
};
export default Form;
