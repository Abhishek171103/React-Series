import React from 'react'
import { useState, useEffect } from 'react';

const DataFetcher = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
  }, []);

  // Render loading state or data 


  return (
    <div>
      <h1>Data Fetcher loading...</h1>
      {loading ? <p>Loading data...</p> : (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DataFetcher