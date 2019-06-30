import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import "./MessageInput.css";
import { useImageContext } from "../ImageContext/ImageContext";
import { Home } from "../components/Home";

export const MessageInput = ({ history }) => {
  const [value, setValue] = useState(null);
  const { state, dispatch } = useImageContext();

  const handleSubmit = e => {
    e.preventDefault();
    history.push("/camera");
    dispatch({
      type: "TEXT_UPDATED",
      text: value === null ? state.text : value
    });
  };

  return (
    <Home>
      <h2 className="MessageInput-title">
        <FontAwesomeIcon icon={faPencilAlt} />
        希望な文章を入力ください
      </h2>
      <form className="MessageInput-form" onSubmit={handleSubmit}>
        <textarea
          className="MessageInput-textarea"
          type="text"
          value={value === null ? state.text : value}
          onChange={e => setValue(e.target.value)}
          placeholder="この文章はダミーです。"
        />
        <div className="MessageInput-buttonBar">
          <Link className="MessageInput-backButton" to="/">
            <FontAwesomeIcon icon={faAngleLeft} size="3x" />
          </Link>
          <button className="MessageInput-startButton">スタート</button>
        </div>
      </form>
    </Home>
  );
};
