import React, { useState, useEffect } from "react";
// import reactLogo from './assets/react.svg'
import Logo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={Logo} className="logo" alt="logo" />
        </a>
        <h1>Selamat Datang</h1>
      </div>
      <div className="card">
        <a
          href="https://discordapp.com/users/903595911840677889"
          target="_blank"
        >
          <button variant="outlined">Add Me at DISCORD </button>
        </a>
        <a
          href="https://www.youtube.com/watch?v=_yjcAnHbUgo&t=6s"
          target="_blank"
        >
          <button variant="outlined">YOUTUBE</button>
        </a>
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>
      <p className="footer">Enggi Pratama - 2023</p>
    </div>
  );
}

export default App;
