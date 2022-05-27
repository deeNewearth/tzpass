import * as React from 'react'
import './App.css'

import {ComponentA} from 'component-a'
import {ComponentB} from 'component-a';

import logo from './logo.svg'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edith <code>src/App.tsx</code> and save to reload.  1.0
        </p>
        <ComponentA/>
        <ComponentB/>
      </div>
    );
  }
}

export default App;
