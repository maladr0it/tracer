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
import { useImageContext } from "../ImageContext/ImageContext";
import { Home } from "../components/Home";

const IMAGES = [Nichi, Dai, Hon, Iku, Chuu];
const IMAGE_NAMES = ["日", "大", "本", "行", "中"];

export const KanjiPractice = ({ history }) => {
  const { dispatch } = useImageContext();

  const handleSelect = imageIndex => {
    const text = IMAGE_NAMES[imageIndex];

    dispatch({
      type: "TEXT_UPDATED",
      text
    });
    // make sufficiently large, it is practice
    // dispatch({
    //   type: "CANVAS_UPDATED",
    //   property: "fontSize",
    //   value: 500
    // });
    history.push("/camera");
  };

  return (
    <Home>
      <div className="KanjiPractice-list">
        {IMAGES.map((image, i) => (
          <img
            key={i}
            className="KanjiPractice-image"
            src={image}
            alt="kanji-character"
            onClick={() => handleSelect(i)}
          />
        ))}
      </div>
      <Link to="/" className="KanjiPractice-backButton">
        <FontAwesomeIcon icon={faAngleLeft} size="3x" />
      </Link>
    </Home>
  );
};
