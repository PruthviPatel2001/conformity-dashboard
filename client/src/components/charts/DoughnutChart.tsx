import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale
);

interface DoughnutChartProps {
  labels: string[];
  dataValues: number[];
  title: string;
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({
  labels,
  dataValues,
  title,
}) => {
  const backgroundColors = [
    "#FF6868", // Red for High
    "#FCDE70", // Yellow for Medium
    "#73EC8B", // Green for Low
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Risk Levels",
        data: dataValues,
        backgroundColor: backgroundColors,
        borderColor: backgroundColors.map((color) =>
          color.replace(/0\.6/, "1")
        ),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%",
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#b6b6b6",
        },
      },
    },
  };

  return (
    <div className="w-full h-[85%]">
      <h2 className="text-xl font-semibold p-2 text-center">{title}</h2>
      <div className="w-full h-full">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default DoughnutChart;
