import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          Змініть <code>src/App.jsx</code> і збережіть, щоб перевірити HMR
        </p>
      </div>
      {navigator.platform}
      <p className="read-the-docs">
        Натисніть на логотипи Vite та React, щоб дізнатися більше
      </p>
      <button onClick={openDeviceVPNSettings}>VPN</button>
    </>
  );
}

export default App;
