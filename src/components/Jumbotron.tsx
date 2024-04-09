import { motion } from "framer-motion";

interface Props {
  handleClose: () => void;
}
function Jumbotron({ handleClose }: Props) {
  return (
    <>
      <div className="bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('/assets/bg1.png')] min-h-[58rem] bg-center bg-cover bg-no-repeat relative">
        <div className="absolute bottom-0 h-full w-full bg-black bg-gradient-to-t via-transparent from-black bg-transparent opacity-90">
          <div className="absolute bottom-0 h-[40vh] w-full bg-black bg-gradient-to-t from-black bg-transparent" />
        </div>
        <div className="absolute bottom-0 h-full w-full py-8 md:py-12 lg:py-16 px-5 md:px-0">
          <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center">
            <div className="flex flex-col items-start justify-center">
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.8 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex justify-between items-center border-2 border-white p-2 rounded-full w-full backdrop-blur-sm bg-black/10"
              >
                <div className="h-full bg-slate-800 px-6 py-2 rounded-full flex justify-center items-center gap-3">
                  <img
                    src="/assets/logo (2).png"
                    alt="logo"
                    className="h-7 object-fill"
                  />
                  <p className="font-semibold text-white ">Dutch Rabbit</p>
                </div>
                <p className="font-semibold text-white h-full bg-[#DC8400] px-6 py-2 rounded-full">
                  Get Started
                </p>
              </motion.div>
              <h1 className="text-xl md:text-7xl text-white max-w-prose tracking-widest pt-8 md:pt-12 lg:pt-12 font-display text-center md:text-left">
                Welcome to Dutch Rabbit Token!
              </h1>
              <p className="text-white text-base pt-5 w-full md:w-9/12 text-center md:text-left">
                The BunnyVerse on the Binance Smart Chain for Meme based
                real-time Utilities for all Holders
              </p>
              <div className="flex justify-center items-center gap-5 pt-5 w-full md:w-8/12">
                <a
                  href="https://pancakeswap.finance/swap?outputCurrency=0x48a510A3394C2A07506d10910EBEFf3E25b7a3f1"
                  className="overflow-hidden w-full"
                >
                  <div className="w-full rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[1.7px]">
                    <div className="flex h-full w-full items-center justify-center bg-black rounded-full hover:bg-transparent transition-all duration-500">
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
              {/* <p className="text-white text-sm md:text-base pt-5 w-full text-center md:text-left md:w-9/12">
                Dutch Rabbit Token is a blockchain project that aims to bring
                together two of the most popular trends in the crypto world:
                memes and deflationary tokens. The project's main focus is on
                the utility of the token, which is achieved by utilizing a
                unique deflationary model.
              </p> */}
              <div className="flex justify-center items-center gap-5 py-3 md:py-5 w-full md:w-8/12">
                <a
                  onClick={handleClose}
                  // href="https://poocoin.app/tokens/0x48a510a3394c2a07506d10910ebeff3e25b7a3f1"
                  className="bg-[#DC8400] hover:bg-[#dcb700] p-1 md:p-2 text-xl font-semibold text-white capitalize rounded-full w-full text-center"
                >
                  Whitepaper Document
                </a>
                <div className="w-full"></div>
              </div>
              {/* Team Section */}

              <div className="flex justify-center items-center gap-5 py-5 w-full">
                <div
                  className="overflow-hidden w-full cursor-pointer"
                  onClick={handleClose}
                >
                  <div className="w-full rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[1.7px]">
                    <div className="flex h-full w-full items-center justify-center bg-black rounded-full hover:bg-transparent transition-all duration-500">
                      <h1 className="text-base md:text-lg font-semibold text-white uppercase p-2">
                        Staking pool
                      </h1>
                    </div>
                  </div>
                </div>
                <div
                  className="overflow-hidden w-full cursor-pointer"
                  onClick={handleClose}
                >
                  <div className="w-full rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[1.7px]">
                    <div className="flex h-full w-full items-center justify-center bg-black rounded-full hover:bg-transparent transition-all duration-500">
                      <h1 className="text-sm md:text-lg font-semibold text-white uppercase p-2">
                        Utility Bills payment
                      </h1>
                    </div>
                  </div>
                </div>
                <div
                  className="overflow-hidden w-full cursor-pointer"
                  onClick={handleClose}
                >
                  <div className="w-full rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[1.7px]">
                    <div className="flex h-full w-full items-center justify-center bg-black rounded-full hover:bg-transparent transition-all duration-500">
                      <h1 className="text-base md:text-lg font-semibold text-white uppercase p-2">
                        NFTs
                      </h1>
                    </div>
                  </div>
                </div>
                <div
                  className="overflow-hidden w-full cursor-pointer"
                  onClick={handleClose}
                >
                  <div className="w-full rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[1.7px]">
                    <div className="flex h-full w-full items-center justify-center bg-black rounded-full hover:bg-transparent transition-all duration-500">
                      <h1 className="text-base md:text-lg font-semibold text-white uppercase p-2">
                        game
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              {/*  Coin Supply section   */}
              <div className="pb-8 flex justify-center items-center gap-5 md:gap-12">
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
                <img
                  src="/assets/logo (2).png"
                  alt="etherum"
                  className=" h-20 md:h-24 object-fill"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Jumbotron;
