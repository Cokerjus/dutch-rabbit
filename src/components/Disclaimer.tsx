function Disclaimer() {
  return (
    <div className="px-5 md:px-0 py-5 md:py-8 lg:py-12">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col items-center justify-center h-full w-full text-white bg-gradient-to-r from-[#E1880D]/50 via-transparent to-black backdrop-blur-sm rounded-2xl p-5 py-12">
          <h3 className="text-4xl pb-5 tracking-wider font-normal font-display text-center w-full md:w-3/5 lg:w-2/5">
            Get ready to experience speed with Cheetah
          </h3>
          <p className="text-white text-center mx-auto text-base w-full pb-5">
            Join now with Cheetah to speed up your trading and start earning
            now.
          </p>
          <a
            href="https://pancakeswap.finance/swap?outputCurrency=0x48a510A3394C2A07506d10910EBEFf3E25b7a3f1"
            className="overflow-hidden"
          >
            <div className="rounded-full bg-gradient-to-r from-[#E1880D] to-white p-[1px]">
              <div className="flex h-full w-full items-center justify-center bg-black rounded-full hover:bg-transparent transition-all duration-500">
                <h1 className="text-xl font-semibold text-white uppercase  px-16 py-3">
                  GET STARTED
                </h1>
              </div>
            </div>
          </a>
        </div>
        <div className="flex flex-col justify-center items-center pt-16">
          <h3 className="text-4xl pb-5 tracking-wider font-bold font-display bg-gradient-to-r from-orange-100 to-orange-500 inline-block text-transparent bg-clip-text text-center">
            Disclaimer
          </h3>
          <p className="text-white text-center mx-auto text-base pb-8 w-full">
            Investing in cryptocurrency is associated with significant risk, and
            it is important to conduct your own research and make informed
            decisions before investing. The information provided in this
            documentation is for educational and informational purposes only and
            should not be considered financial advice. The information may not
            be complete, accurate, or up-to-date, and should not be relied upon
            for making any investment decisions. The author of this
            documentation and Dutch Rabbit team are not responsible for any
            investment decisions made based on the information provided herein.
            Investors should also be aware that the cryptocurrency market is
            highly volatile and subject to sudden fluctuations, and there is no
            guarantee of returns. It is important to never invest more than you
            can afford to lose and to consult with a financial advisor if you
            have any questions or concerns.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Disclaimer;
