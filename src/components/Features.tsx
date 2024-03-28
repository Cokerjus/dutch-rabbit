function Features() {
  return (
    <div className="py-5 md:py-8 lg:py-12">
      <div className="max-w-screen-lg mx-auto">
        <h3 className="text-white text-center text-4xl pb-8 tracking-wider font-bold font-display">
          Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* item 1 */}
          <div className="p-[2px] flex flex-col items-center justify-center bg-gradient-to-br from-orange-500 to-gray-50 rounded-2xl">
            <div className="flex flex-col items-center justify-center h-full w-full text-white bg-gradient-to-br from-neutral-700 via-neutral-800 via-35% to-black backdrop-blur-sm rounded-2xl">
              <div className="p-24">
                <h3 className="text-3xl text-left bg-gradient-to-r from-orange-100 to-orange-500 inline-block text-transparent bg-clip-text font-semibold pb-3">
                  Number of features
                </h3>

                <p>
                  Dutch Rabbit has a number of features to ensure the token's
                  utility.
                </p>
              </div>
            </div>
          </div>
          {/* item 2 */}
          <div className="p-[2px] flex flex-col items-center justify-center bg-gradient-to-br from-orange-500 to-gray-50 rounded-2xl">
            <div className="flex flex-col items-center justify-center text-white bg-gradient-to-br from-neutral-700 via-neutral-800 via-35% to-black backdrop-blur-sm rounded-2xl">
              <div className="p-24">
                <h3 className="text-3xl text-left bg-gradient-to-r from-orange-100 to-orange-500 inline-block text-transparent bg-clip-text font-semibold pb-3">
                  Merchandise
                </h3>

                <p>
                  Merchandise: the token can be used to access exclusive
                  meme-based content, such as digital art, NFTs, and
                  merchandise.
                </p>
              </div>
            </div>
          </div>
          {/* item 3 */}
          <div className="p-[2px] flex flex-col items-center justify-center bg-gradient-to-br from-orange-500 to-gray-50 rounded-2xl">
            <div className="flex flex-col items-center justify-center text-white bg-gradient-to-br from-neutral-700 via-neutral-800 via-35% to-black backdrop-blur-sm rounded-2xl">
              <div className="p-24">
                <h3 className="text-3xl text-left bg-gradient-to-r from-orange-100 to-orange-500 inline-block text-transparent bg-clip-text font-semibold pb-3">
                  Deflationary Model
                </h3>

                <p>
                  Deflationary Model: The Dutch Rabbit Token employs a novel
                  deflationary strategy in which a portion of each transaction
                  fee is burned, gradually diminishing the overall quantity of
                  DURT. As a result, the token is a scarce asset with the
                  potential to gain in value as supply drops.
                </p>
              </div>
            </div>
          </div>
          {/* item 4 */}
          <div className="p-[2px] flex flex-col items-center justify-center bg-gradient-to-br from-orange-500 to-gray-50 rounded-2xl">
            <div className="flex flex-col items-center justify-center text-white bg-gradient-to-br from-neutral-700 via-neutral-800 via-35% to-black backdrop-blur-sm rounded-2xl">
              <div className="p-24">
                <h3 className="text-3xl text-left bg-gradient-to-r from-orange-100 to-orange-500 inline-block text-transparent bg-clip-text font-semibold pb-3">
                  Governance
                </h3>

                <p>
                  Governance: Dutch Rabbit Token is a community-drivenproject
                  and as such, the community will be able to vote on
                  importantdecisions as relating to the project. Holders of
                  $DURT will be able to submit proposals and vote on proposals,
                  ensuring that the project remains in the hands of the
                  community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
