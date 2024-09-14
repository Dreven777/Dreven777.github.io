import { useState } from "react";

function ControlledForm(){
    const [email, setMail] = useState('');
    const [valid, setValid] = useState(false);
    function userInput(e){
        setMail(e.target.value);
        console.log(email);
        if(email.includes('@')) setValid(true);
        else setValid(false);
    }
    return <form>
        Email: <span style={{color: valid ? 'black': 'red'}}>*</span>
        <input type="text" onChange={userInput} />
    </form>
}

export default ControlledForm;