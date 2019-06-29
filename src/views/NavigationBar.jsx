import React from "react";
import { Link } from "react-router-dom";

import "./NavigationBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faCamera, faSlidersH } from "@fortawesome/free-solid-svg-icons";

export default class NavigationBar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <ul className="navbar-selectors">
                    <li></li>
                    <li><FontAwesomeIcon icon={faCamera} size="3x" /></li>
                    <li><FontAwesomeIcon icon={faPencilAlt} size="3x" /></li>
                    <li><FontAwesomeIcon icon={faSlidersH} size="3x" /></li>
                    <li></li>
                </ul>
            </div>
        )
    }
}