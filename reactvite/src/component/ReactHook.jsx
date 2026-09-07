import { useState } from "react";

function ReactHook()
{
  const[count,setCount]=useState(0);
  function increaseCount()
  {
    setCount(count+1);
  }
  function decreaseCount()
  {
    setCount(count-1);
  }
  return(
    <div>
      <h1 style ={{color:'brown'}}> Working on React Hook</h1>
      
        <h1>Counter Value:{count}</h1>
        <button onClick ={increaseCount}>Increment</button>
         <button onClick ={decreaseCount}>decrement</button>
        </div>

  );
}
export default ReactHook