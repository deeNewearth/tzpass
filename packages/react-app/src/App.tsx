import * as React from 'react'
import './App.scss'

import {ComponentA} from 'component-a'
import {ComponentB, MainNav} from 'component-a';

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
