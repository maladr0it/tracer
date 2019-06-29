import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import { Home } from "./views/Home";
import { TextEditor } from "./views/TextEditor";
import { Camera } from "./views/Camera";
import { ImageContextProvider } from "./ImageContext/ImageContext";
import { Viewfinder } from "./views/Viewfinder";

const App = () => {
  return (
    <div className="App">
      <Router>
        <ImageContextProvider>
          <Route path="/" exact component={Home} />
          <Route path="/editor" component={TextEditor} />
          <Route path="/camera" component={Camera} />
          <Viewfinder />
        </ImageContextProvider>
      </Router>
    </div>
  );
};

export default App;
