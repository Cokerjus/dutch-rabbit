function Chart() {
  return (
    <div className="flex flex-col justify-center items-center py-5 md:py-10">
      <h3 className="text-white text-4xl font-bold font-display">
        Easily trade with our bot
      </h3>
      {/* chart will be here */}

      <div className="flex justify-center items-center gap-5 pt-5">
        <a
          href="https://poocoin.app/tokens/0x48a510a3394c2a07506d10910ebeff3e25b7a3f1"
          className="bg-[#DC8400] hover:bg-[#dcb700] px-8 py-2 text-xl font-semibold text-white uppercase rounded-full w-min text-center"
        >
          buy
        </a>
        <a
          href="https://pancakeswap.finance/swap?outputCurrency=0x48a510A3394C2A07506d10910EBEFf3E25b7a3f1"
          className="overflow-hidden w-full"
        >
          <div className="w-full rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[1.7px]">
            <div className="flex h-full w-min items-center justify-center bg-black rounded-full hover:bg-transparent transition-all duration-500">
              <h1 className="text-xl font-semibold text-white uppercase px-8 py-2">
                swap
              </h1>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Chart;
