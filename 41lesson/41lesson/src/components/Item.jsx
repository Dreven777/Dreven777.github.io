import './../App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function List(props) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  async function getData(id){
    setData(null);
    await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
          setTimeout(() => {
            setData(response.data);
            setError(false);
          }, 1000)
        })
        .catch(function (error) {
          setError(true);
        })
  }

    useEffect(() => {
        getData(props.id);
    }, [props.id]);

  return (
    <div className="App">
      {error && <h1>Виникла помилка</h1>}
      {(data === null && !error) && <div className="lds-dual-ring"></div>}
      {(data !== null && !error) && <div>
        <b>ID:</b> {data.id}<br/>
        <b>Title:</b> {data.title}<br/>
        <b>Body:</b> {data.body}<br/>
        </div>}
    </div>
  );
}

export default List;
