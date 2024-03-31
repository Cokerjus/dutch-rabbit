import { FeatureCard } from ".";

function Mission() {
  return (
    <div className="py-5 md:py-8 lg:py-12">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-4xl pb-5 tracking-wider font-bold font-display bg-gradient-to-r from-orange-100 to-orange-500 inline-block text-transparent bg-clip-text text-center">
            MISSION AND VISION
          </h3>
        </div>
        <div className="flex flex-col gap-5">
          <FeatureCard body="Mission: The mission of Dutch Rabbit Token $DURT is to create a community-driven, meme-based deflationary blockchain project with unique utilities that incentivize users to hold and use the $DURT token. The project aims to provide a valuable asset for holders while also promoting transparency, inclusivity, and innovation. Vision: The vision of Dutch Rabbit is to become a leading meme-based blockchain project, known for its deflationary model and unique utilities. The project aims to bring together a community of meme enthusiasts and crypto investors, creating a platform for the exchange of value through the use of $DURT. Dutch Rabbit Token aims to be a project that is inclusive and accessible to all, while also driving innovation in the crypto world through its governance model and utility offerings." />

          <div className="p-[1px] flex flex-col items-center justify-center bg-gradient-to-br to-orange-300/35 from-gray-50/35 rounded-2xl">
            <div className="flex flex-col items-center justify-center h-full w-full text-white bg-gradient-to-br from-neutral-700 via-neutral-800 via-35% to-black backdrop-blur-sm rounded-2xl">
              <div className="p-24 flex flex-col justify-center items-center">
                <h3 className="text-3xl text-left bg-gradient-to-r to-orange-100 from-orange-500 inline-block text-transparent bg-clip-text font-semibold pb-8 font-display">
                  Why Choose Dutch Rabbit?
                </h3>

                <p className="text-center">
                  UNIQUE DEFLATIONARY MODEL: Dutch Rabbit Token has a unique
                  deflationary model where a portion of each transaction fee is
                  burned, reducing the total supply of DURT over time. This
                  makes the token a scarce asset that can potentially increase
                  in value as the supply decreases.MEME-BASED PROJECT: Dutch
                  Rabbit Token is a meme-based project that utilizes popular
                  memes and themes in its branding and marketing. This can
                  appeal to a wide audience of meme enthusiasts and collectors.
                  CCOMMUNITY-DRIVEN APPROACH: The $DURT team is committed to a
                  community-driven approach towards the project, putting the
                  governance and decision-making responsibility in the hands of
                  the community. This is to the end that the project is more
                  transparent and inclusive. GROWING POPULARITY: As a relatively
                  new project, Dutch Rabbit Token $DURT is fast gaining
                  unmatched popularity and attention within the crypto
                  community. This is already leading to an increased demands for
                  the token, which has now resulted to its increase in value
                  over time. Overall, $DURT can be a good choice for those
                  interested in meme-based projects and deflationary tokens.
                  However, as with any investment, it is important to conduct
                  your own research and assess the risks involved before making
                  any investment decisions.
                </p>

                <h3 className="text-3xl text-left bg-gradient-to-r to-orange-100 from-orange-500 inline-block text-transparent bg-clip-text font-semibold pt-16 font-display">
                  Dutch Rabbit Labs
                </h3>
                <p className="text-center">
                  The experimental arm of the Dutch rabbit ecosystem, Dutch
                  Rabbit Labs, specializes on cutting-edge goods and services
                  with a focus on DeFi, Blockchain, and virtual money.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
