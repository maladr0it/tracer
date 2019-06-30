import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import "./KanjiPractice.css";
import Nichi from "../assets/Kanji/nichi-4.png";
import Dai from "../assets/Kanji/dai-3.png";
import Hon from "../assets/Kanji/hon-5.png";
import Iku from "../assets/Kanji/iku-6.png";
import Chuu from "../assets/Kanji/chuu-4.png";
import { Home } from "../components/Home";

const IMAGES = [Nichi, Dai, Hon, Iku, Chuu];

const CHAR_MAP = {
  Nichi: "日",
  Dai: "大",
  Hon: "本",
  Iku: "行",
  Chu: "中"
};

export const KanjiPractice = () => {
  return (
    <Home>
      <div className="KanjiPractice-list">
        {IMAGES.map(image => (
          <img
            className="KanjiPractice-image"
            src={image}
            alt="kanji-character"
          />
        ))}
      </div>
      <Link to="/" className="KanjiPractice-backButton">
        <FontAwesomeIcon icon={faAngleLeft} size="3x" />
      </Link>
    </Home>
  );
};
