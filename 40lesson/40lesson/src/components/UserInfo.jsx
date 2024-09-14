import React, { useState, useEffect } from 'react';

function UserInfo(){
    const [postList, setPostList] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setPostList(data);
                //console.log(data);
            })
            .catch((error) => {
                console.log(error)
            });
    }, []);

 
    const listItems = postList?.slice(0, 25).map((number) =>
        <li key={number.id}>{number.title}</li>
    );
    return (
        <div>
            {postList ? (
                <div>
                    {listItems}
                </div>
            ) : (
                <p>LOADING...</p>
            )}
        </div>
    );
}

export default UserInfo;