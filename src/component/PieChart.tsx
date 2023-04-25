import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  DoughnutController,
} from "chart.js";
import { Chart } from "react-chartjs-2";

import * as _ from "lodash";

ChartJS.register(ArcElement, DoughnutController, Tooltip, Legend);

const options: ChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "bottom" as const,
    },
  },
};

type cardProps = {
  firstData?: [] | any;
  addData?: { icon: any; color: string }[];
};

const PieChart: React.FC<cardProps> = ({ firstData, addData }) => {
  const arraydata = _.merge(firstData, addData);

  const label = arraydata.map((item: any) => item.percent);
  const percentdata = arraydata.map((item: any) => item.count);
  const color = arraydata.map((item: any) => item.color);

  const data = {
    labels: label,
    datasets: [
      {
        label: "# of Votes",
        data: percentdata,
        backgroundColor: color,
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 0.5,
      },
    ],
  };
  return (
    <div className='pie-container'>
      <Chart type='doughnut' data={data} options={options} />
      {/* <Doughnut data={data} options={options} /> */}
    </div>
  );
};

export default PieChart;
