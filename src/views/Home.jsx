import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

export default class Home extends React.Component {
  render() {
    return (
      <div className="homeContent">
        <p className="title">ペン字の なぞり書き</p>
        <p className="tagline">憧れの美文字へ</p>
        <p className="inputTagline">
          <FontAwesomeIcon icon={faPencilAlt} />
          希望な文章を入力ください
        </p>
        <textarea
          type="text"
          rows="10"
          wrap="hard"
          placeholder="この文章はダミーです。"
        />
        <button className="startButton">スタート</button>

        <Link to="/editor">EDITOR</Link>
      </div>
    );
  }
}
