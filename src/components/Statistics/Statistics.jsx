import React from 'react';
import { PolarArea } from 'react-chartjs-2';

const PolarAreaChart = () => {
  const data = {
    labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
    datasets: [
      {
        label: 'My Dataset',
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(255, 205, 86, 0.5)',
          'rgba(201, 203, 207, 0.5)',
          'rgba(54, 162, 235, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(201, 203, 207, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return <PolarArea data={data} />;
};

export default PolarAreaChart;
