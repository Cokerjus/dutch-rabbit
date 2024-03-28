import { Button } from ".";

function Jumbotron() {
  return (
    <div className="bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('/assets/bg1.png')] min-h-screen bg-center bg-cover bg-no-repeat relative">
      <div className="absolute bottom-0 h-[40vh] w-full bg-black bg-gradient-to-t from-black bg-transparent opacity-80 z-10" />

      <div className="max-w-screen-lg mx-auto flex flex-col items-start justify-center py-8 md:py-16">
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
          Dutch Rabbit Token ($DURT) is a blockchain-based meme token created to
          celebrate the cuteness of Dutch rabbits. The project aims to create a
          community of rabbit enthusiasts, create value for the token holders
          and donate to rabbit-related charities
        </p>
        <div className="flex justify-center items-center gap-5">
          <a href="https://pancakeswap.finance/swap?outputCurrency=0x48a510A3394C2A07506d10910EBEFf3E25b7a3f1">
            <Button
              className="bg-transparent hover:bg-purple-500 text-white !text-2xl border-yellow-500 border-2 hover:border-yellow-600 uppercase"
              size="md"
              shape="pill"
              onClick={() => {}}
            >
              swap
            </Button>
          </a>
          <a href="https://poocoin.app/tokens/0x48a510a3394c2a07506d10910ebeff3e25b7a3f1">
            <Button
              className="bg-purple-400 hover:bg-purple-500 text-white !text-2xl hover:border-yellow-600 uppercase"
              size="md"
              shape="pill"
              onClick={() => {}}
            >
              Buy
            </Button>
          </a>
        </div>
        <p className="text-white text-lg pt-5 w-10/12 text">
          Dutch Rabbit Token is a blockchain project that aims to bring together
          two of the most popular trends in the crypto world: memes and
          deflationary tokens. The project's main focus is on the utility of the
          token, which is achieved by utilizing a unique deflationary model.
        </p>
      </div>
    </div>
  );
}

export default Jumbotron;
