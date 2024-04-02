import AliceCarousel from "react-alice-carousel";
import { FaCartArrowDown } from "react-icons/fa";

const responsive = {
  0: {
    items: 1,
  },
  512: {
    items: 3,
  },
  //   768: {
  //     items: 3,
  //   },
};

const data = [
  {
    title: "5% goes to Buy Tax",
  },
  {
    title: "1% is automatically added to the liquidity pool (LP)",
  },
  {
    title: "1% is automatically burned",
  },
  {
    title: "1% is distributed as reflection (MOCHI INU)",
  },
  {
    title: "2% goes to the Marketing Wallet",
  },
  {
    title: "5% goes to Buy Tax",
  },
  {
    title: "1% is automatically added to the liquidity pool (LP)",
  },
  {
    title: "1% is automatically burned",
  },
  {
    title: "1% is distributed as reflection (MOCHI INU)",
  },
  {
    title: "3% goes to the Marketing Wallet",
  },
  {
    title: "Total Supply (TS): 1 Billion",
  },
];

const items = data.map((view) => {
  return (
    <div
      className="bg-gray-700 p-3 flex justify-between items-center gap-5 rounded-full h-full mr-5"
      key={view.title}
    >
      <div className="bg-gray-300 rounded-full p-2 text-[#DC8400]">
        <FaCartArrowDown size={25} />
      </div>
      <p className="text-white text-center max-w-56 w-48">{view.title}</p>
    </div>
  );
});

function Carousel() {
  return (
    <div className="text-white">
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={2000}
        animationDuration={3000}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
        // mine for testing purposes
        touchTracking
        keyboardNavigation
        paddingRight={90}
      />
    </div>
  );
}

export default Carousel;
