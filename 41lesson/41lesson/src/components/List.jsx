import './../App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function List() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  async function getData(){
    await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => {
          setTimeout(() => {
            setData(response.data);
            console.log(response.data);
          }, 1000)
        })
        .catch(function (error) {
          setError(true);
          console.log(error);
        })
  }

  const listItems = data?.map((number) =>
        <li key={number.id}>{number.title}</li>
    );

    useEffect(() => {
      getData();
    }, []);

  return (
    <div className="App">
      {error && <h1>Виникла помилка</h1>}
      {(data === null && !error) && <div className="lds-dual-ring"></div>}
      {(data !== null && !error) && <div>
        {listItems}
        </div>}
    </div>
  );
}

export default List;
