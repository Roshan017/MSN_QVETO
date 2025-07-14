import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function Chart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Views',
        data: [80, 120, 90, 140, 220, 180, 240],
        fill: true,
        backgroundColor: 'rgba(59,130,246,0.1)',
        borderColor: '#3b82f6',
        tension: 0.4,
      },
      {
        label: 'Comments',
        data: [40, 70, 50, 90, 100, 75, 110],
        fill: true,
        backgroundColor: 'rgba(96,165,250,0.1)',
        borderColor: '#60a5fa',
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return <Line data={data} options={options} />;
}
