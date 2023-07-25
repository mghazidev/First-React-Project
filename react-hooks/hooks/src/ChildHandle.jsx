// import React, {forwardRef, useState, useImperativeHandle} from "react";


// const Button = forwardRef((props,ref) => {
//     const [toggle,setToggle] = useState(false);

//     useImperativeHandle(ref, () => ({
//         alterToggleff() {
//             setToggle(!toggle);
//         }
//     }));
//     return (
//         <>
//             <button>Button from child</button>]
//             {toggle && <span>Visible</span>}
//         </>
//     )
// })

// export default Button
import React, { useState, useImperativeHandle, forwardRef } from "react";

const FormInput = forwardRef((props, ref) => {
  const [value, setValue] = useState("");

  const validate = () => {
    const isValid = value.trim() !== "";
    return isValid;
  };

  useImperativeHandle(ref, () => ({
    validate,
  }));

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
});

export default FormInput;
