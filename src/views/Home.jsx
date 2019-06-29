import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

import "./Home.css";
import { useImageContext } from "../ImageContext/ImageContext";

export const Home = ({ history }) => {
  const [value, setValue] = useState(null);
  const { state, dispatch } = useImageContext();

  const handleSubmit = () => {
    history.push("/camera");
    dispatch({ type: "TEXT_UPDATED", text: value === null ? "" : value });
  };

  return (
    <div className="Home">
      <h1 className="Home-title">ペン字の なぞり書き</h1>
      <p className="Home-tagline">憧れの美文字へ</p>
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
    </div>
  );
};
