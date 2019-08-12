import React, { useState, useEffect } from 'react';
import Table from './components/Table/table';
import Chart from './components/Chart/chart';
import Loading from './components/Loading/loading';
import './App.css';

function App() {
  const [data, setdata] = useState({
    data: [],
    isLoading: true,
    results: null
  });
  const [url, setUrl] = useState(`https://swapi.co/api/people/?page=1`);
  const getUrl = newUrl => setUrl(newUrl);

  useEffect(() => {
    fetch(url)
      .then(item => item.json())
      .then(item =>
        setdata({
          data: item,
          isLoading: false,
          results: item.results
        })
      );
  }, [url]);

  if (data.isLoading) {
    return (
      <div className="container">
        <Loading />
      </div>
    );
  } else {
    return (
      <div className="App">
        <div className="container">
          <Table data={data} getUrl={getUrl} />
          <Chart data={data} />
        </div>
      </div>
    );
  }
}

export default App;
