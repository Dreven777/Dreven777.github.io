import { useState } from "react";

function ComponentStateful() {
    const [message, setMessage] = useState('Default text'); 

    function updateMessage(e){
        setMessage(e.target.value);
    }

    return <div>
        <p>{message}</p>
        <input onChange={updateMessage} />
  </div>
}

export default ComponentStateful;