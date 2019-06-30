import React from "react";
import { Route, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
// import Nichi from "../assets/kanji/nichi-4.png";
// import Dai from "../assets/kanji/dai-3.png";
// import Hon from "../assets/kanji/hon-5.png";
// import Iku from "../assets/kanji/iku-6.png";
// import Chuu from "../assets/kanji/chuu-4.png";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import "./Home.css";
import { useImageContext } from "../ImageContext/ImageContext";

import { MessageInput } from "../views/MessageInput";

export const Home = ({ children }) => {
  return (
    <div className="Home">
      <h1 className="Home-title">ペン字の なぞり書き</h1>
      <p className="Home-tagline">憧れの美文字へ</p>
      {children}
    </div>
  );
};
