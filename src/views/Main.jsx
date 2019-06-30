import React from "react";
import { Link } from "react-router-dom";

import "./Main.css";
import { Home } from "../components/Home";

export const Main = () => {
  return (
    <Home>
      <div className="Main">
        <Link className="Main-button" to="/editor">
          エディター
        </Link>
        <Link className="Main-button" to="/kanji">
          漢字
        </Link>
      </div>
    </Home>
  );
};
