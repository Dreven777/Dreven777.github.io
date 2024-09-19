import './../App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function List(props) {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  async function getData(id){
    setLoading(true)
    let url = props.id.length === 0 ? `https://jsonplaceholder.typicode.com/posts` : `https://jsonplaceholder.typicode.com/posts/${id}`
    await axios.get(url)
        .then(response => {
          setTimeout(() => {
            setData(response.data);
            setLoading(false)
            setError(false);
          }, 1000)
        })
        .catch(function (error) {
          setError(true);
          console.log(error);
        })
  }
  

    useEffect(() => {
      getData(props.id);
    }, [props.id]);

    const listItems = Array.isArray(data) ? (data.map((number) =>
    <li key={number.id}>{number.title}</li>)) : 
    <>
      <span><b>ID:</b> {data.id}</span><br/>
      <span><b>Title:</b> {data.title}</span><br/>
      <span><b>Body:</b> {data.body}</span><br/>
    </>;

  return (
    <div className="App">
      {error && <h1>Виникла помилка</h1>}
      {(loading === true && !error) && <div className="lds-dual-ring"></div>}
      {(data !== null && !error && !loading) && <div>
        {listItems}
        </div>}
    </div>
  );
}

export default List;
