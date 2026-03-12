import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard: React.FC = () => {
  const data = {
    labels: ["0-25", "26-50", "51-75", "76-100"],
    datasets: [
      {
        label: "Scores",
        data: [10, 20, 15, 30],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div>
      <h1>Analytics Dashboard</h1>
      <Bar data={data} />
    </div>
  );
};

export default Dashboard;
