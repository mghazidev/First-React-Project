import React, {useState} from "react";

export default function UseState ()  {
    const [inputValue, setInputValue] = useState("Ghazi");
    
    var onChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
    };

    return (
       <div>
        <input placeholder="Write Something" onChange={onChange}></input>
        {inputValue}
       </div>
    )
}