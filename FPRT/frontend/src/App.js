import React from 'react';
import './App.css';
import Routes  from '../src/routes/index';
import  { GlobalStyle } from '../src/styles/global-styles';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <GlobalStyle />
        <Routes />
      </React.Fragment>
    </div>
  );
}

export default App;
