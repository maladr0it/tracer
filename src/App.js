import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import { Main } from "./views/Main";
import { MessageInput } from "./views/MessageInput";
import { Camera } from "./views/Camera";
import { ImageContextProvider } from "./ImageContext/ImageContext";
import { KanjiPractice } from "./views/KanjiPractice";
import { Viewfinder } from "./views/Viewfinder";

const App = () => {
  return (
    <div className="App">
      <Router>
        <ImageContextProvider>
          <Route path="/" exact component={Main} />
          <Route path="/editor" component={MessageInput} />
          <Route path="/kanji" component={KanjiPractice} />
          <Route path="/camera" component={Camera} />
          <Viewfinder />
        </ImageContextProvider>
      </Router>
    </div>
  );
};

export default App;
