import React, { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartArea,
  ChartData,
  ChartOptions,
} from "chart.js";

import { Chart } from "react-chartjs-2";
import * as _ from "lodash";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const options: ChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "bottom" as const,
    },
    title: {
      display: false,
    },
  },

  interaction: {
    intersect: false,
    mode: "index",
  },

  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      border: { dash: [4, 4] }, // for the grid lines
      //   grid: {
      //     color: "#aaa", // for the grid lines
      //     tickColor: "#000", // for the tick mark
      //     tickBorderDash: [2, 3], // also for the tick, if long enough
      //     tickLength: 10, // just to see the dotted line
      //     tickWidth: 2,
      //     offset: true,
      //     drawTicks: true, // true is default
      //     drawOnChartArea: true, // true is default
      //   },

      beginAtZero: false,
    },
  },
};

const datas = [1, 3, 3, 7, 8, 5, 20, 50, 100, 2];

function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea) {
  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

  gradient.addColorStop(0, "rgba(255, 84, 3, 0)");
  gradient.addColorStop(1, "rgba(255, 84, 3, 0.3)");

  return gradient;
}

type pageProps = {
  title?: string;
  date: string;
  number?: string;
  apiData: any;
};

const LineChart: React.FC<pageProps> = ({ date, title, number, apiData }) => {
  const chartRef = useRef<ChartJS>(null);

  const label = apiData?.views;
  const columns = _.valuesIn(label);
  const arr = label && Object.keys(label);

  const [chartData, setChartData] = useState<ChartData<"bar">>({
    datasets: [],
  });

  const data = {
    labels: arr,
    datasets: [
      {
        label: "Dataset 1",
        data: columns,
        tension: 0.4,
        pointRadius: 0,
        //   pointHoverRadius: 1,
      },
    ],
  };

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    const chartData = {
      ...data,
      datasets: data.datasets.map((dataset) => ({
        ...dataset,
        backgroundColor: createGradient(chart.ctx, chart.chartArea),
        borderColor: "#FF5403",
        fill: "start",
      })),
    };

    setChartData(chartData);
  }, [label]);

  return (
    <div className='min-h-36 h-full flex flex-col'>
      <div className='flex flex-col'>
        <h2 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl font-face-gm'>
          {title}
        </h2>
        <p className='pt-2 text-lg leading-8 text-gray-600 font-face-gm'>
          {date}
        </p>
        <p className='text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl font-face-gm pt-10'>
          {number}
        </p>
      </div>
      <Chart ref={chartRef} type='line' data={chartData} options={options} />
      {/* <Line options={options} data={data} /> */}
    </div>
  );
};

export default LineChart;
