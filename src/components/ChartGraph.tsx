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
// import { ChartData } from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function ChartGraph() {
  const [stock, setStock] = useState<[]>([]);
  const [days, setDays] = useState(1);

  const getStock = async () => {
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7"
      );
      const result = await res.json();
      console.log(result);
      setStock(result.prices);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getStock();
  }, []);

  const myData = {
    labels: stock?.map((coin) => {
      const date = new Date(coin[0]);
      const time =
        date.getHours() > 12
          ? `${date.getHours() - 12} : ${date.getMinutes()} PM`
          : `${date.getHours()} : ${date.getMinutes()} AM`;
      return days === 1 ? time : date.toLocaleDateString();
    }),
    datasets: [
      {
        label: ` Price in Past Days ${days} in usd `,
        data: stock?.map((value) => {
          value[1];
        }),
        borderColor: "orange",
        borderWidth: 3,
      },
    ],
  };

  return (
    <div>
      <Line
        data={myData}
        options={{
          elements: {
            point: {
              radius: 1,
            },
          },
        }}
        style={{ marginTop: "2rem", width: "100%" }}
      />
      <div className="flex justify-center items-center gap-5  py-3 mb-3">
        <button
          className="bg-[#DC8400] hover:bg-[#dcb700] px-8 py-2 text-base md:text-lg font-semibold text-white uppercase rounded-full text-center"
          onClick={() => setDays(1)}
        >
          24 hours
        </button>
        <button
          className="bg-[#DC8400] hover:bg-[#dcb700] px-8 py-2 text-base md:text-lg font-semibold text-white uppercase rounded-full text-center"
          onClick={() => setDays(30)}
        >
          1 Month
        </button>
        <button
          className="bg-[#DC8400] hover:bg-[#dcb700] px-8 py-2 text-base md:text-lg font-semibold text-white uppercase rounded-full text-center"
          onClick={() => setDays(365)}
        >
          1 Year
        </button>
      </div>
    </div>
  );
}

export default ChartGraph;
