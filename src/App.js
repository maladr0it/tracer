import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./views/Home";
import TextEditor from "./views/TextEditor";
import Camera from "./views/Camera";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/editor" component={TextEditor} />
      <Route path="/camera" component={Camera} />
    </Router>
  );
}

export default App;
