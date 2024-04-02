import { BsTwitterX } from "react-icons/bs";
import { FaDiscord, FaFacebook, FaTelegram } from "react-icons/fa6";

function Footer() {
  return (
    <div className="py-5 md:py-8 lg:py-12 border-t-2 ">
      <div className="max-w-screen-lg mx-auto">
        <h3 className="text-white text-4xl pb-8 tracking-wider font-bold text-center md:text-left">
          Dutch Rabbit
        </h3>
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-end border-b-2 py-6">
          <div className="flex gap-4 text-white">
            <p>Home</p>
            <p>Features</p>
            <p>FAQ</p>
            <p>Roadmap</p>
            <p>Security Audit</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-3 text-white">
            <h3 className="text-white text-4xl pb-3 font-bold ">Contact Us</h3>
            <a href="admin@dutchrabbit.co">admin@dutchrabbit.co</a>
            <div className="flex gap-8">
              <FaTelegram size={30} />
              <BsTwitterX size={30} />
              <FaDiscord size={30} />
              <FaFacebook size={30} />
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-6 gap-3 text-white items-center md:items-start">
          <p className="text-white">
            © {new Date().getFullYear()} Dutch Rabbit - All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
