import React from "react";
import { Link } from "react-router-dom";

import "./TextEditor.css";
import NavigationBar from "./NavigationBar";
import MenuButton from "./MenuButton";

export class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "menuButton"
    };
  }

  render() {
    return (
      <div>
        <div className="textEditorContent">
          {this.state.display === "menuButton" ? (
            <MenuButton
              changeDisplay={() => {
                this.setState({ display: "navbar" });
              }}
            />
          ) : (
            <NavigationBar
              closeMenu={() => {
                this.setState({ display: "menuButton" });
              }}
            />
          )}
        </div>
      </div>
    );
  }
}
