import React from "react";
import { Link } from "react-router-dom";

import "./NavigationBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faArrowsAlt,
  faSlidersH,
  faSync,
  faTextHeight,
  faExpand,
  faPalette,
  faAngleRight,
  faAngleLeft
} from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: "main"
    };
  }
  render() {
    return (
      <div className="navbar">
        <ul className="navbar-selectors">
          {this.state.menu === "main" ? (
            <React.Fragment>
              <li />
              <li onClick={this.props.closeMenu}>
                <FontAwesomeIcon icon={faTimesCircle} size="3x" />
              </li>
              <li>
                <FontAwesomeIcon icon={faPencilAlt} size="3x" />
              </li>
              <li>
                <FontAwesomeIcon icon={faExpand} size="3x" />
              </li>
              <li onClick={() => this.setState({ menu: "sub" })}>
                <FontAwesomeIcon icon={faAngleRight} size="3x" />
              </li>
              <li />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <li />
              <li onClick={() => this.setState({ menu: "main" })}>
                <FontAwesomeIcon icon={faAngleLeft} size="3x" />
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsAlt} size="3x" />
              </li>
              <li>
                <FontAwesomeIcon icon={faTextHeight} size="3x" />
              </li>
              <li>
                <FontAwesomeIcon icon={faPalette} size="3x" />
              </li>
              <li />
            </React.Fragment>
          )}
        </ul>
      </div>
    );
  }
}
