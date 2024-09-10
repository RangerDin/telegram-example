import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useInitData, useThemeParams, useViewport } from "@telegram-apps/sdk-react";

function App() {
  const [count, setState] = React.useState(0);
  const initData = useInitData();
  const username = initData?.user?.username ?? '';
  const { bgColor, textColor } = useThemeParams();
  const viewport  = useViewport();

  useEffect(() => {
    if (viewport && !viewport.isExpanded) {
      viewport.expand();
    }
  }, [viewport]);

  return (
    <div className="App" style={{background: bgColor, color: textColor }}>
      <header className="App-header">
        <h1>Buy React token, {username}!</h1>
        <button style={{background: 'none', border: 'none'}} onClick={() => setState(count => count + 1)}><img src={logo} className="App-logo" alt="logo"  /></button>
        <div>Your score: {count}</div>
      </header>
    </div>
  );
}

export default App;
