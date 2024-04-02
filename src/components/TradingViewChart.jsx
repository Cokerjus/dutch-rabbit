import { useEffect, useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function TradingViewWidget() {
  const [stock, setStock] = useState([]);

  const getStock = async () => {
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7"
      );
      const result = await res.json();
      setStock(result.prices);
      console.log(stock);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getStock();
  }, []);

  const myData = {
    label: stock.slice(0, 10).map((coin) => {
      console.log(coin);
    }),
  };

  return <div>{/* <Line data={myData} /> */}</div>;
}

export default TradingViewWidget;
