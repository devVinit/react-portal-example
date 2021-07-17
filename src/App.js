import { useEffect, useState } from 'react';
import PortalComponent from './PortalComponent';
import './App.css';

function App() {

  const [counter, setCounter] = useState(0)
  const [showPortal, setShowPortal] = useState(false);

  return (
    <div className="App">
      <h1>This is an example of React Portal</h1>
      <div className="counter">
        <button onClick={() => setCounter(counter + 1)} className="ripple action-left">+</button>
        {counter}
        <button onClick={() => setCounter(counter - 1)} className="ripple action-right">-</button>
      </div>
      <a onClick={() => setShowPortal(true)} className="action-open" href="javascript:void(0)">Open Portal</a>
      {showPortal && <PortalComponent onClose={() => setShowPortal(false)}>
        <h2>This is a Portal</h2>
        <button onClick={() => setCounter(counter + 1)} className="ripple action-left">+</button>
        {counter}
        <button onClick={() => setCounter(counter - 1)} className="ripple action-right">-</button>
      </PortalComponent>}
    </div>
  );
}

export default App;
