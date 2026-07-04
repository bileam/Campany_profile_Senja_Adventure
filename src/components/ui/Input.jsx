const Input = ({ icont, placeholder, type, name, onChange, value }) => {
  return (
    <div className="relative w-full">
      {icont}
      <input
        type={type}
        placeholder={placeholder || "masukan"}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="w-full ring-1 h-9 pl-10 outline-none   text-white
          placeholder:text-gray-400  transition-all
          duration-300
          focus:border-green-500
          focus:ring-2
          focus:ring-green-500/20    rounded-md "
      />
    </div>
  );
};

export default Input;
