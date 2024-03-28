import { Carousel } from ".";

function Tokemonic() {
  return (
    <div className="py-5 md:py-8 lg:py-12">
      <div className="max-w-screen-lg mx-auto">
        <h3 className="text-white text-center text-4xl pb-8 tracking-wider font-bold font-display">
          Tokenomics
        </h3>
        <Carousel />
      </div>
    </div>
  );
}

export default Tokemonic;
