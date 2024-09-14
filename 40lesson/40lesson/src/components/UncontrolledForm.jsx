import { useRef } from "react";

function UncontrolledForm(){
    const inputID = useRef(null);

    const handleSubmit = (event) => {
        console.log('get info for userID: ' + inputID.current.value);
        event.preventDefault();
      };

    return <form onSubmit={handleSubmit}>
        <input type="number" ref={inputID} />
        <button type="submit">Надіслати</button>
    </form>
}

export default UncontrolledForm;