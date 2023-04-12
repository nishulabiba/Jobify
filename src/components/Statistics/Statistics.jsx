import { Tooltip } from 'chart.js';
import React from 'react';
import { CartesianGrid } from 'recharts';
import { AreaChart, Area, XAxis, YAxis }  from 'recharts';
const data = [
  {
    name: "Assignment 1",
    uv: 48
  },
  {
    name: "Assignment 2",
    uv: 58
  },
  {
    name: "Assignment 3",
    uv: 45
  },
  {
    name: "Assignment 4",
    uv: 59
  },
  {
    name: "Assignment 5",
    uv: 48
  },
  {
    name: "Assignment 6",
    uv: 34
  },
  {
    name: "Assignment 7",
    uv: 50
    
  }
  ,
  {
    name: "Assignment 8",
    uv: 60
  }
];
const Statistics = () => {
return (
    <div className='m-8'>
      <h1 className='text-5xl font-bold text-center m-5'>Statistics </h1>
      <AreaChart width={1300} height={400}  data={data} margin={{top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name"></XAxis>
        <YAxis/>
        <Tooltip></Tooltip>
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" ></Area>
      </AreaChart>
    </div>
  );
};

export default Statistics;