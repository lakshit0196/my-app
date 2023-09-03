import './App.css';
import React from 'react';
import Plot from 'react-plotly.js';

function App() {
  const data = [{
    x: [0, 1, 2, 3, 4],
    y: [1, 5, 3, 7, 5],
    mode: 'lines+markers',
    type: 'scatter'
  }, {
    x: [1, 2, 3, 4, 5],
    y: [4, 0, 4, 6, 8],
    mode: 'lines+markers',
    type: 'scatter'
  }];

  const layout = {
    width: 640,
    height: 640,
    title: 'A Demo Line Plot'
  };

  return (
    <Plot
      data={data}
      layout={layout}
    />
  );
}

export default App;
