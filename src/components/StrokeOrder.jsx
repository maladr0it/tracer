import React from "react";
import "./StrokeOrder.css";

import { nichi, dai, hon, iku, chuu } from "../data/kanji.js";

export default class StrokeOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      kanjiList: [nichi, dai, hon, iku, chuu],
      selectedKanji: ""
    };
  }
  render() {
    return (
      <div>
        {this.state.selectedKanji === "" ? (
          ""
        ) : (
          <img
            className="kanjiStrokes"
            src={this.state.selectedKanji.images[this.state.index]}
          />
        )}
        {this.state.kanjiList.map(kanji => {
          return (
            <button
              onClick={() => this.setState({ selectedKanji: kanji, index: 0 })}
            >
              {kanji.name}
            </button>
          );
        })}
        <button
          onClick={() =>
            this.state.index < this.state.selectedKanji.images.length - 1
              ? this.setState({ index: this.state.index + 1 })
              : ""
          }
        >
          Next
        </button>
      </div>
    );
  }
}
