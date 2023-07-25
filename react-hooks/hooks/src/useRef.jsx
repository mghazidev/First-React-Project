import React,{useRef} from "react";

export default function UseRef() {

    const inputRef = useRef(null)
    const Click = () => {
        // inputRef.current.focus();
        inputRef.current.value = "";
    }
    return (
       <div>
        <input placeholder="eg:" type="text" ref = {inputRef}></input>
        <button onClick={Click}>Change</button>
       </div> 
    )
}