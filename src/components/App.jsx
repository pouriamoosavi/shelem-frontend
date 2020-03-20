import React, { useState, useEffect } from 'react';
import PlayingCardsSection from './PlayingCardsSection';

const App = () => {
  const [counter, setCounter] = useState(1);

  useEffect(() => { console.log('hi'); }, [counter]);
  return (
    <div>
      <PlayingCardsSection />
      <h1>
        fuck ye
        { counter }
        times
      </h1>
      <button type="submit" onClick={() => { setCounter(counter + 1); }}>one more time</button>
    </div>
  );
};

export default App;
