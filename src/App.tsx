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

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-orange-400 origin-[0%] z-[1000]"
        style={{ scaleX }}
      />
      <Jumbotron />
      <Chart />
      <Tokemonic />
      <Features />
      <RoadMap />
      <Utilities />
      <Mission />
      <Disclaimer />
      <Footer />
    </div>
  );
}
