import { motion, useScroll, useSpring } from "framer-motion";

import {
  Chart,
  Disclaimer,
  Features,
  Footer,
  Jumbotron,
  Mission,
  RoadMap,
  Tokemonic,
  Utilities,
} from "./components";
import { useCallback, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Toaster } from "./components/ui/toaster";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [showModal, setShowModal] = useState<boolean>(false);

  const handleClose = useCallback(() => {
    setTimeout(() => {
      setShowModal((prev) => !prev);
    }, 300);
  }, []);

  return (
    <div className="relative bg-black">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-orange-400 origin-[0%] z-[1000]"
        style={{ scaleX }}
      />
      {showModal && (
        <div
          className="fixed overflow-x-hidden overflow-y-auto inset-0 bg-neutral-800/70 top-0 bottom-0 left-0 right-0 w-screen h-screen z-[999999] flex justify-center items-center"
          onClick={handleClose}
        >
          <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
            <div
              className="
              translate h-auto border-0 rounded-lg shadow-lg relative flex flex-col 
              w-full bg-white outline-none focus:outline-none"
            >
              {/*header*/}
              <div className="flex items-center justify-center p-6 border-b-[1px] relative rounded-t">
                <button
                  className="
                    p-1
                    border-0 
                    hover:opacity-70
                    transition
                    absolute
                    left-9
                  "
                >
                  <IoMdClose size={18} />
                </button>
                <div className="text-lg font-semibold" onClick={handleClose}>
                  Coming Soon
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <section id="home">
        <Jumbotron handleClose={handleClose} />
      </section>

      <section id="chart">
        <Chart />
      </section>
      <section id="tokemonic">
        <Tokemonic />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="roadmap">
        <RoadMap />
      </section>
      <section id="utilities">
        <Utilities />
      </section>
      <section id="mission">
        <Mission />
      </section>
      <section id="disclaimer">
        <Disclaimer />
      </section>
      <section id="footer">
        <Footer />
      </section>
      <Toaster />
    </div>
  );
}
