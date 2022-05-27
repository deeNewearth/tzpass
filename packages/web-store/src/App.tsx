import * as React from "react";
import "./App.scss";

import { ComponentA } from "uiblocks";
import { ComponentB, MainNav } from "uiblocks";
import { Routes, Route } from "react-router-dom";

// Import {} from './components/nav';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <MainNav />
        
        <ComponentA />
        <ComponentB />
        <Routes>
          <Route path="/" element={<div>hello home</div>} />
          <Route path="creator" element={<div>creator here</div>} />
        </Routes>
      </div>
    );
  }
}

export default App;
