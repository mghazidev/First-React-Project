// import React, { useRef } from "react";
// import Button from "./ChildHandle";

// export default function ImperativeHandle() {
//     const buttonRef = useRef(null);
//     return (
//         <div>
//             <button onClick= {() => {
//                 buttonRef.current.alterToggle();
//             }}>Button from Parent</button>
//         <Button ref={buttonRef}/>
//             </div >
//     )
// }
import React, { useRef } from "react";
import FormInput from "./ChildHandle";

export default function ParentComponent() {
  const formInputRef = useRef();

  const handleValidate = () => {
    const isValid = formInputRef.current.validate();
    alert(isValid ? "Form is valid!" : "Form is invalid!");
  };

  return (
    <div>
      <FormInput ref={formInputRef} />
      <button onClick={handleValidate}>Validate Form</button>
    </div>
  );
}
