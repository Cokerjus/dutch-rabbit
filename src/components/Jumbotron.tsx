function Jumbotron() {
  return (
    <div className="bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('/assets/bg1.png')] min-h-screen h-full max-h-min bg-center bg-cover bg-no-repeat relative">
      <div className="absolute bottom-0 h-[40vh] w-full bg-black bg-gradient-to-t from-black bg-transparent opacity-80 z-10" />

      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center absolute z-30 h-full right-0 left-0 top-0 bottom-0 pt-8 md:pt-20 lg:pt-28 mt-8 md:mt-16">
        <div className="flex flex-col items-start justify-center">
          <div className="flex justify-between items-center border-2 border-white p-2 rounded-full w-full backdrop-blur-sm bg-black/10">
            <p className="font-semibold text-white h-full bg-slate-800 px-6 py-2 rounded-full">
              Dutch Rabbit
            </p>
            <p className="font-semibold text-white h-full bg-[#DC8400] px-6 py-2 rounded-full">
              Get Started
            </p>
          </div>
          <h1 className="text-4xl md:text-6xl text-white max-w-prose tracking-widest pt-12 md:pt-16 lg:pt-24">
            Join The Future Of Dutch Rabbit Cryto World
          </h1>
          <p className="text-white text-lg pt-5 w-10/12 text">
            Dutch Rabbit Token ($DURT) is a blockchain-based meme token created
            to celebrate the cuteness of Dutch rabbits. The project aims to
            create a community of rabbit enthusiasts, create value for the token
            holders and donate to rabbit-related charities
          </p>
          <div className="flex justify-center items-center gap-5 py-5 w-8/12">
            <a
              href="https://pancakeswap.finance/swap?outputCurrency=0x48a510A3394C2A07506d10910EBEFf3E25b7a3f1"
              className="overflow-hidden w-full"
            >
              <div className="w-full rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[1.7px]">
                <div className="flex h-full w-full items-center justify-center bg-gray-800 rounded-full hover:bg-transparent transition-all duration-500">
                  <h1 className="text-xl font-semibold text-white uppercase p-2">
                    swap
                  </h1>
                </div>
              </div>
            </a>
            <a
              href="https://poocoin.app/tokens/0x48a510a3394c2a07506d10910ebeff3e25b7a3f1"
              className="bg-[#DC8400] hover:bg-[#dcb700] p-2 text-xl font-semibold text-white uppercase rounded-full w-full text-center"
            >
              buy
            </a>
          </div>
          <p className="text-white text-lg pt-5 w-10/12 text">
            Dutch Rabbit Token is a blockchain project that aims to bring
            together two of the most popular trends in the crypto world: memes
            and deflationary tokens. The project's main focus is on the utility
            of the token, which is achieved by utilizing a unique deflationary
            model.
          </p>
          <div className="flex justify-center items-center gap-5 py-5 w-8/12">
            <a
              href="https://poocoin.app/tokens/0x48a510a3394c2a07506d10910ebeff3e25b7a3f1"
              className="bg-[#DC8400] hover:bg-[#dcb700] p-2 text-xl font-semibold text-white capitalize rounded-full w-full text-center"
            >
              Whitepaper Document
            </a>
            <div className="w-full"></div>
          </div>
          {/* Team Section */}

          <div className="flex justify-center items-center gap-5 py-5 w-10/12">
            <a
              href="https://pancakeswap.finance/swap?outputCurrency=0x48a510A3394C2A07506d10910EBEFf3E25b7a3f1"
              className="overflow-hidden w-full"
            >
              <div className="w-full rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[1.7px]">
                <div className="flex h-full w-full items-center justify-center bg-black rounded-full hover:bg-transparent transition-all duration-500">
                  <h1 className="text-lg font-semibold text-white uppercase p-2">
                    Staking pool
                  </h1>
                </div>
              </div>
            </a>
            <a
              href="https://pancakeswap.finance/swap?outputCurrency=0x48a510A3394C2A07506d10910EBEFf3E25b7a3f1"
              className="overflow-hidden w-full"
            >
              <div className="w-full rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[1.7px]">
                <div className="flex h-full w-full items-center justify-center bg-black rounded-full hover:bg-transparent transition-all duration-500">
                  <h1 className="text-lg font-semibold text-white uppercase p-2">
                    Utility Bills payment
                  </h1>
                </div>
              </div>
            </a>
            <a
              href="https://pancakeswap.finance/swap?outputCurrency=0x48a510A3394C2A07506d10910EBEFf3E25b7a3f1"
              className="overflow-hidden w-full"
            >
              <div className="w-full rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[1.7px]">
                <div className="flex h-full w-full items-center justify-center bg-black rounded-full hover:bg-transparent transition-all duration-500">
                  <h1 className="text-lg font-semibold text-white uppercase p-2">
                    NFTs
                  </h1>
                </div>
              </div>
            </a>
          </div>

          {/*  Coin Supply section   */}
          <div className="pb-8 flex gap-5 md:gap-12">
            <img
              src="/assets/Ethereum.png"
              alt="etherum"
              className="h-16 object-fill"
            />
            <img
              src="/assets/Solana.png"
              alt="etherum"
              className="h-16 object-fill"
            />
            <img
              src="/assets/Dollar Coin.png"
              alt="etherum"
              className="h-16 object-fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
