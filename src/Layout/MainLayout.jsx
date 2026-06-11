import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <div className="text-white  relative ">
      <header className="backdrop-glass fixed top-0 left-0 right-0 z-50  border-b border-white/10 shadow-lg py-4 ">
        <Navbar />
      </header>
      <main className="max-w-7xl mx-auto px-6 py-15 2xl:px-0">
        <Outlet />
      </main>
      <footer className="bg-navyDeep h-70 absolute left-0 right-0 bottom-0 ">
        <Footer />
      </footer>
    </div>
  );
};
export default MainLayout;
