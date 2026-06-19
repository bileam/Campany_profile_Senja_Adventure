const Modal = ({ isOpen, Onclose, item }) => {
  if (!isOpen) return null;
  console.log(item);
  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur z-100">
      <h1>ini adalah sebuah modal</h1>
    </div>
  );
};
export default Modal;
