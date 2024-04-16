import { BsTwitterX } from "react-icons/bs";
import { FaDiscord, FaFacebook, FaTelegram } from "react-icons/fa6";
import { Link } from "react-scroll";

function Footer() {
  return (
    <div className="py-5 md:py-8 lg:py-12 border-t-2 ">
      <div className="max-w-screen-lg mx-auto">
        <h3 className="text-white text-4xl pb-8 tracking-wider font-bold text-center md:text-left">
          Dutch Rabbit
        </h3>
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-end border-b-2 py-6">
          <div className="flex gap-4 text-white">
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="home"
              className="cursor-pointer"
            >
              Home
            </Link>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="chart"
              className="cursor-pointer"
            >
              Chart
            </Link>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="tokemonic"
              className="cursor-pointer"
            >
              Tokemonic
            </Link>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="roadmap"
              className="cursor-pointer"
            >
              Roadmap
            </Link>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="utilities"
              className="cursor-pointer"
            >
              Utilities
            </Link>
          </div>
          <div className="flex flex-col items-center md:items-end gap-3 text-white">
            <h3 className="text-white text-4xl pb-3 font-bold ">Contact Us</h3>
            <a href="admin@dutchrabbit.co">admin@dutchrabbit.co</a>
            <div className="flex gap-8">
              <a href="https://t.me/DutchRabbitCoinOfficial" id="href">
                <FaTelegram size={30} />
              </a>
              <a href="http://www.twitter.com/DutchRabbitDURT" id="href">
                <BsTwitterX size={30} />
              </a>
              <a href="https://discord.com/invite/txPjFjEX" id="href">
                <FaDiscord size={30} />
              </a>
              <a
                href="https://www.facebook.com/Dutch-RabbitOfficial-102799439513356/"
                id="href"
              >
                <FaFacebook size={30} />
              </a>
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
