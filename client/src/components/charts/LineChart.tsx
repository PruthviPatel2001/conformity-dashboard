import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  ChartOptions,
  Filler,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler
);

interface LineChartProps {
  labels: string[];
  complianceData: number[];
  title: string;
  currentValue: number;
  rateDifference: number;
}

const LineChart: React.FC<LineChartProps> = ({
  labels,
  complianceData,
  title,
  currentValue,
  rateDifference,
}) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Compliance Percentage",
        data: complianceData,
        fill: true,
        backgroundColor: "rgba(115,236,139,0.3)",
        borderColor: "#73EC8B",
        tension: 0.1,
        pointRadius: 4,
        pointHoverBackgroundColor: "#fff",
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        display: false,
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#b6b6b6 ",
        },
      },
    },
  };

  return (
    <div>
      <h2 className="text-xl font-semibold p-2 text-center">{title}</h2>

      <div className="text-center my-4">
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center">
            <div className="text-3xl flex font-bold text-green-600 mb-1">
              {currentValue}%
            </div>
            <span
              className={`text-xs ml-2 ${
                rateDifference > 0
                  ? "text-green-500"
                  : rateDifference < 0
                  ? "text-red-500"
                  : "text-gray-400"
              }`}
            >
              {rateDifference > 0
                ? `(Up ${rateDifference}% from last month)`
                : rateDifference < 0
                ? `(Down ${Math.abs(rateDifference)}% from last month)`
                : `(No change from last month)`}
            </span>
          </div>

          <div className="text-sm text-gray-500 dark:text-white">
            Compliance Rate (Current Month)
          </div>
        </div>
      </div>

      <div className="h-[280px] flex justify-center items-center">
        <Line data={data} options={options} />
      </div>
      <div className="absolute inset-0 h-2 bg-transparent shadow-lg rounded-b-md"></div>
    </div>
  );
};

export default LineChart;
