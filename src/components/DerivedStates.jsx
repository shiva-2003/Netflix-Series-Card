import React, { useState } from "react";

export const DerivedStates = () => {
  const [users,setCount]=useState([
    { name: "shiva", age: "21" },
    { name: "shivashankar", age: "22" },
    { name: "Thisshiva", age: "23" },
  ])

  console.log(users);
  const usersCount=users.length;

  const usersAvg=users.reduce((acc,curVal)=>acc+Number(curVal.age),0)/usersCount;

  return (
    <>
      <h1>User List</h1>
      <ul>
        {users.map((currEle, indx) => {
          return (
            <li key={indx}>
              {currEle.name}-{currEle.age} is your age
            </li>
          );
        })}
      </ul>
      <p>TotalUsers:{usersCount}</p>
      <p>Average:{usersAvg}</p>
    </>
  );
};
