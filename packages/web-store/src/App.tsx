import * as React from "react";
import "./App.scss";


import { MainNav } from "uiblocks";
import { Routes, Route } from "react-router-dom";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <MainNav />
        
        <Routes>
          <Route path="/" element={<div>hello home</div>} />
          <Route path="creator" element={<div>creator here</div>} />
        </Routes>
      </div>
    );
  }
}

export default App;
