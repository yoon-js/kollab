import React from 'react';
import './static/css/style.css';
import Topnav from './components/topnav';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Topnav />
      <Outlet />
    </div>
  );
}

export default App;
