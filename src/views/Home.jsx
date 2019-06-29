import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import Nichi from "../assets/kanji/nichi-4.png";
import Dai from "../assets/kanji/dai-3.png";
import Hon from "../assets/kanji/hon-5.png";
import Iku from "../assets/kanji/iku-6.png";
import Chuu from "../assets/kanji/chuu-4.png";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import "./Home.css";
import { useImageContext } from "../ImageContext/ImageContext";

export const Home = ({ history }) => {
  const [value, setValue] = useState(null);
  const [view, setView] = useState("selectors");
  const { state, dispatch } = useImageContext();

  const handleSubmit = () => {
    history.push("/camera");
    dispatch({
      type: "TEXT_UPDATED",
      text: value === null ? state.text : value,
      view: "selectors"
    });
  };

  return (
    <div className="Home">
      <h1 className="Home-title">ペン字の なぞり書き</h1>
      <p className="Home-tagline">憧れの美文字へ</p>

      {view === "selectors" ? (
        <div className="Home-selectorsContainer">
          <button
            onClick={() => setView("kanjiMenu")}
            className="Home-selectors"
          >
            Kanji Practice
          </button>
          <button
            onClick={() => setView("textarea")}
            className="Home-selectors"
          >
            Write a Message
          </button>
        </div>
      ) : view === "textarea" ? (
        <div>
          <p className="Home-formTagline">
            <FontAwesomeIcon icon={faPencilAlt} />
            希望な文章を入力ください
          </p>
          <form className="Home-form" onSubmit={handleSubmit}>
            <textarea
              className="Home-textarea"
              type="text"
              value={value === null ? state.text : value}
              onChange={e => setValue(e.target.value)}
              placeholder="この文章はダミーです。"
            />
            <button className="Home-startButton">スタート</button>
          </form>
          <button
            className="Home-returnButton"
            onClick={() => setView("selectors")}
          >
            <FontAwesomeIcon icon={faAngleLeft} size="3x" />
          </button>
        </div>
      ) : (
        <div>
          <ul className="Home-kanjiList">
            <li>
              <img src={Nichi} />
            </li>
            <li>
              <img src={Dai} />
            </li>
            <li>
              <img src={Chuu} />
            </li>
            <li>
              <img src={Hon} />
            </li>
            <li>
              <img src={Iku} />
            </li>
          </ul>
          <button
            className="Home-returnButton"
            onClick={() => setView("selectors")}
          >
            <FontAwesomeIcon icon={faAngleLeft} size="3x" />
          </button>
        </div>
      )}
    </div>
  );
};
