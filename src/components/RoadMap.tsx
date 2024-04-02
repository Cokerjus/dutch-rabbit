import AliceCarousel from "react-alice-carousel";

const responsive = {
  0: {
    items: 1,
  },
  512: {
    items: 1,
  },

  //   768: {
  //     items: 3,
  //   },
};

const data = [
  {
    title: "Phase 1: Initial Launch and Listing",
  },
  {
    title: "Create and deploy the DURT smart contract",
  },
  {
    title: "List DURT on decentralized exchanges (PCS) for trading",
  },
  {
    title: "1000 Holders",
  },
  {
    title: "CMC and CG Listing",
  },
  {
    title: "Smart Contract Audit",
  },
  {
    title:
      "Develop and launch the Dutch Rabbit website and social media channels",
  },
  {
    title:
      "Develop partnerships and collaborations with other projects in the blockchain and meme spaces",
  },
  {
    title: "Phase 2: Utility Development",
  },
  {
    title:
      "Develop and deploy the Dutch Rabbit NFT marketplace for exclusive content and digital art",
  },
  {
    title: "Launch a DURT staking program for users to earn rewards",
  },
  {
    title:
      "Introduce liquidity pools for DURT to incentivize liquidity providers",
  },
  {
    title: "Develop a DURT wallet for secure storage and management of tokens",
  },
  {
    title: "Phase 3: Governance and Expansion",
  },
  {
    title:
      "Launch a community-driven governance system for DURT holders to vote on proposals and decisions",
  },
  {
    title:
      "Implement proposals for further development of the project and utilities",
  },
  {
    title:
      "Expand the reach of Dutch Rabbit through additional listings and partnerships",
  },
  {
    title:
      "Develop and release additional utilities for DURT, (gaming platform and dApp integrations)",
  },
  {
    title: "Phase 4: Long-term Sustainability and Growth",
  },
  {
    title:
      "Continue to improve and develop Dutch Rabbit's utilities and offerings",
  },
  {
    title:
      "Explore opportunities for mainstream adoption and integration with real-world applications",
  },
  {
    title:
      "Expand the reach and adoption of Dutch Rabbit through marketing and community outreach",
  },
  {
    title:
      "Collaborate with other blockchain and meme-based projects for mutual growth and development",
  },
  {
    title:
      "Collaborate with other blockchain and meme-based projects for mutual growth and development",
  },
];

const items = data.map((view) => {
  return (
    <div
      className="p-[2px] flex flex-col items-center justify-stretch bg-gradient-to-br from-orange-500 to-gray-50 rounded-2xl mr-5 h-full"
      key={view.title}
    >
      <div className="flex flex-col items-center justify-center h-full w-full text-white bg-gradient-to-br from-neutral-700 via-neutral-800 via-35% to-black backdrop-blur-sm rounded-2xl">
        <div className="py-24 h-full flex justify-center items-stretch">
          <p className="max-w-56 w-48">{view.title}</p>
        </div>
      </div>
    </div>
  );
});

function RoadMap() {
  return (
    <div className="py-5 md:py-8 lg:py-12">
      <div className="max-w-screen-lg mx-auto">
        <h3 className="text-white text-center text-4xl pb-5 tracking-wider font-bold font-display">
          Roadmap
        </h3>
        <p className="text-white text-center mx-auto text-base pb-8 w-9/12">
          This Roadmap outlines Dutch Rabbit's plans for the near future, with a
          focus on community engagement, utility development, and sustainable
          growth. The project aims to be transparent and community-driven, with
          a focus on providing real-world value for DURT holders.
        </p>
        <div className="border-y-2 py-5">
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
      </div>
    </div>
  );
}

export default RoadMap;
