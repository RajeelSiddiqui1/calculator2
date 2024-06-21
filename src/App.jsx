import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Calculator from './Calculator';

const App = () => {
  return (
    <div className="app-container">
      <h1 className="my-4 text-center">Simple Calculator</h1>
      <Calculator />
    </div>
  );
};

export default App;
