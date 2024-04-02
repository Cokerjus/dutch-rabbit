import { useEffect, useState } from "react";

interface ICoin {
  prices: [];
}

function TradingViewWidget() {
  const [stock, setStock] = useState<unknown | null>(null);

  const getStock = async () => {
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7"
      );
      const result = await res.json();
      const coin = result.prices;
      setStock(coin);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getStock();
    // console.log(stock);
  }, []);

  const coinData = stock?.map((value) => ({
    x: value[0],
    y: value[1].toFixed(2),
  }));
  console.log(coinData);
  // console.lstock);k);

  return <div>TradingViewWidget</div>;
}

export default TradingViewWidget;
