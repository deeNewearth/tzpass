import * as React from "react";
import "./App.scss";

import { C_NAV, C_Screens } from "uiblocks";
import { Routes, Route } from "react-router-dom";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <C_NAV.MainNav />
        
        <div className="AppContent">
          <Routes>
            <Route path="/" element={<C_Screens.TestScreen/>} />
            <Route path="creator" element={<div>creator here</div>} />
          </Routes>
        </div>
        
      </div>
    );
  }
}

export default App;
