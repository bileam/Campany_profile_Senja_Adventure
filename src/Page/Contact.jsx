import Banner from "../components/ui/Banner";
import banner_senjaAdventure from "../assets/banner/Sejara_SenjaAdventure.jpg";
import Form from "../components/Contact/Form";
import Informasi from "../components/Contact/Informasi";
import Peta from "../components/Contact/Peta";
const Contact = () => {
  return (
    <div className="md:mt-3 mt-3  mb-2 overflow-hidden">
      <div className="overflow-hidden relative mb-20">
        <Banner
          img={banner_senjaAdventure}
          title="kontak Senja Adventure"
          title2="Hubungi Senja Adventure"
          description="Kami Siap membantu anda menemukan perlengkapan outdoor terbaik untuk setiap petualangan anda"
        />
      </div>
      <div className="max-w-7xl   mx-auto  px-2 py-2 2xl:px-0 mb-10 flex flex-col">
        <div className="flex gap-2 md:flex-row flex-col">
          <Form />
          <Informasi />
        </div>
        <Peta />
      </div>
    </div>
  );
};
export default Contact;
