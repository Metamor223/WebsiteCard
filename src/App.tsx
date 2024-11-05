import React from 'react';
import logo from './logo.svg';
import './App.css';
import Head from './Header/Head';
import Main from './Main/Main';

function App() {
  return (
    <div className="App">
      <Head/>
      <div id="mainpage">
        <Main/>
      </div>
    </div>
  );
}

export default App;
