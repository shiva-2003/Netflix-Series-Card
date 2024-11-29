import React from "react";
import { useState } from "react";

export const States = () => {
  const [count, setCount] = useState(0);
  const handleButtonClick = () => {
    setCount(() => count+1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleButtonClick}>Itteration</button>
    </>
  );
};
