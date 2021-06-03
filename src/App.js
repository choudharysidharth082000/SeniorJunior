import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';


//importing the components 

import Footer from './Footer'
import Line from './Line'

function App() {
  return (
    <div className="App">

      <h1 className="mainheading">Hello Coders</h1>
      <Line />
      <Footer />
    </div>
  );
}

export default App;
