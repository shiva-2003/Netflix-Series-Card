import { useState } from "react";

export const LiftStateUp=()=> {
    const [inputVal, setInputVal] = useState("");
  return (
    <>
      <Children inputVal={inputVal} setInputVal={setInputVal}/>
      <Siblings inputVal={inputVal}/>
    </>
  );
}

const Children = (props) => {
    const {inputVal,setInputVal}=props
  return (
    <>
      <input type="text" placeholder="Enter your text" value={inputVal} onChange={(e)=>setInputVal(e.target.value)}/>
    </>
  );
};

const Siblings = ({inputVal}) => {
   
    return(
        <p>The current input value is: {inputVal}</p>
    )
};
