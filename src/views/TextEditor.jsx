import React from "react";
import { Link } from "react-router-dom";

import "./TextEditor.css";
import NavigationBar from "./NavigationBar";
import MenuButton from "./MenuButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

export default class TextEditor extends React.Component {
  render() {
    return (
      <div className="textEditorContent">
        <MenuButton />
      </div>
    );
  }
}
