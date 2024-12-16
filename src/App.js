import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import LoadCounrty from './components/counties/Counties';

function App() {
  return (
    <div className="App">
    <LoadCounrty></LoadCounrty>
    </div>
  );
}



export default App;
