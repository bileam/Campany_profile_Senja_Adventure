import BannerHome from "../components/Home/BannerHome";
import KatalokAlat from "../components/Home/KatalokAlat";
import Tentang from "../components/Home/Tentang";
import Timeline from "../components/Home/Timeline";

const Home = () => {
  return (
    <div className="md:mt-3 mt-3  mb-2 overflow-hidden">
      <div className="overflow-hidden relative">
        <BannerHome />
      </div>

      <Timeline />
      <div className="mt-20">
        <Tentang />
      </div>

      <div className="max-w-7xl mt-25 mx-auto space-y-25 px-6 py-2 2xl:px-0 mb-10">
        <KatalokAlat />
      </div>
    </div>
  );
};
export default Home;
