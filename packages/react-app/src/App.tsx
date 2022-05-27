import * as React from 'react'
import './App.scss'

import {ComponentA} from 'uiblocks'
import {ComponentB, MainNav} from 'uiblocks';

// Import {} from './components/nav';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <MainNav/>
        <span>hello world</span>
        <ComponentA/>
        <ComponentB/>
      </div>
    );
  }
}

export default App;
