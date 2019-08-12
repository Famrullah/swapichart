import React from 'react';
import Charts from 'react-apexcharts';
import './chart.css';

const Chart = props => {
  const { data } = props;
  const mass = data.results.map(item => {
    return isNaN(item.mass) ? 0 : item.mass;
  });
  const height = data.results.map(item => {
    return isNaN(item.height) ? 0 : item.height;
  });
  const name = data.results.map(item => item.name);

  const state = {
    options: {
      chart: {
        id: 'basic-bar'
      },
      xaxis: {
        categories: name
      }
    },
    series: [
      {
        name: 'Height',
        data: height
      },
      {
        name: 'Mass',
        data: mass
      }
    ]
  };
  console.log(mass);
  return (
    <div className="chart">
      <Charts
        options={state.options}
        series={state.series}
        type="line"
        height="350"
      />
    </div>
  );
};

export default Chart;
