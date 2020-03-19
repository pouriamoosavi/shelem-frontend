import React, { useState, useEffect } from "react";

const App = () => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {console.log('hi')}, [counter]);
  return (
    <div>
      <h1>fuck ye {counter} times</h1>
      <button onClick={() => {setCounter(counter +1)}}>one more time</button>
    </div>
  );
};

export default App;
