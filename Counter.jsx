import * as React from "react";
 
function Counter() {
  const [count, setCount] = React.useState(0);
 
  function handleDecrement() {
    setCount((prev) => prev - 1);
  }
 
  function handleIncrement() {
    setCount((prev) => prev + 1);
  }
 
  function handleReset() {
    setCount(0);
  }
 
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
 
export default Counter;