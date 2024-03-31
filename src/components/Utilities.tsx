import { FaChevronDown } from "react-icons/fa6";

import { FeatureCard } from ".";

function Utilities() {
  return (
    <div className="py-5 md:py-8 lg:py-12">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-4xl pb-5 tracking-wider font-bold font-display bg-gradient-to-r from-orange-100 to-orange-500 inline-block text-transparent bg-clip-text text-center">
            Utilities
          </h3>
          <p className="text-white text-center mx-auto text-base pb-8 w-9/12">
            Dutch Rabbit Token has a few utilities that make it a valuable asset
            for holders:
          </p>
        </div>
        {/* Items */}
        <div className="flex flex-col gap-5">
          <FeatureCard
            title="NFT MARKETPLACE"
            body="Dutch Rabbit with Utilities has a marketplace where users can buy, sell, and trade their Dutch Rabbit Tokens. The marketplace is designed to be user-friendly, and it has features that allow users to search for specific traits and characteristics in the tokens."
          />
          <FeatureCard
            title="GAMING"
            body="The project has a variety of games that users can play with their Dutch Rabbit Tokens. The games are designed to be engaging and interactive, and they allow users to earn rewards and prizes."
          />
          <FeatureCard
            title="CHARITY DONATIONS"
            body="A portion of each transaction fee is donated to rabbit-related charities, supporting their mission and improving the lives of rabbits. This feature allows token holders to make a positive impact on a cause they care about."
          />
          <FeatureCard
            title="ACCESS TO EXCLUSIVE CONTENTS"
            body="Holders of #DURT can gain access to exclusive meme-based content, such as digital art, NFTs, and merchandise. This can be a valuable utility for meme enthusiasts and collectors."
          />
          <FeatureCard
            title="GOVERNANCE"
            body="Holders of $DURT will have the ability to participate in governance, including submitting proposals and voting on proposals. This ensures that the project remains community-driven and transparent."
          />
          <FeatureCard
            title="STAKING"
            body="The Dutch Rabbit team plans to introduce staking for $DURT, which will allow users to earn rewards for holding and staking their tokens."
          />
          <FeatureCard
            title="LIQUIDITY POOLS"
            body="In the future, Dutch Rabbit plans to introduce liquidity pools for $DURT, which will allow users to provide liquidity and earn rewards in the form of $DURT."
          />
          <FeatureCard
            title="REAL WORLD UTILITY"
            body="Dutch Rabbit Token (DURT) will empower users with a real-time bill payment utility platform, allowing them to conveniently settle bills instantly using their DURT holdings, thereby streamlining financial transactions and enhancing accessibility and efficiency in managing expenses."
          />
          <FeatureCard body="Overall, the utilities of $DURT are designed to incentivize users to hold and use the token, while also adding value for holders. With the deflationary model, the decreasing supply of $DURT makes it a scarce asset that can potentially increase in value over time." />
        </div>

        <div className="text-[#DC8400] py-8 flex justify-center items-center">
          <FaChevronDown size={45} />
        </div>
      </div>
    </div>
  );
}

export default Utilities;
