import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  LinearScale,
  CategoryScale,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  LinearScale,
  CategoryScale
);

interface BarChartProps {
  labels: string[];
  data: number[];
  title: string;
}

const BarChart: React.FC<BarChartProps> = ({ labels, data, title }) => {
  const totalControls = data.reduce((acc, value) => acc + value, 0);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Number of Controls Implemented",
        data: data,
        backgroundColor: data.map((value) =>
          value === Math.max(...data) ? "#80AF81" : "#D3D3D3"
        ),
        borderWidth: 1,
        borderRadius: 5,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    indexAxis: "y",
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: "#b6b6b6",
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: true,
          color: "#b6b6b6",
        },
        border: {
          display: false,
        },
      },
    },
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-center">{title}</h2>
      <div className="flex flex-col items-center mt-8">
        <div className="flex items-center justify-center text-gray-500">
          <span className="text-sm dark:text-white">
            Total Controls Implemented:
          </span>
          <span className="ml-2 text-green-600  text-3xl font-bold">
            {totalControls}
          </span>
        </div>

        <div className="h-[280px] flex justify-center items-center w-full">
          <Bar data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default BarChart;
