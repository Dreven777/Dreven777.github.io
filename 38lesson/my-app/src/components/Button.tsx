
function Button({ title, cb}: { title: string, cb: any}){
    return <button onClick={cb}>{title}</button>
}

export default Button;