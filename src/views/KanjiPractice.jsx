import React from "react";

import { Home } from "../components/Home";

export const KanjiPractice = () => {
  return (
    <Home>
      <h1>KANJI_PRACTICE</h1>
    </Home>
  );
};

// <div>
//   <ul className="Home-kanjiList">
//     <li
//       value={value === null ? state.text : value}
//       onClick={() => setValue("日")}
//     >
//       <img src={Nichi} />
//     </li>
//     <li
//       value={value === null ? state.text : value}
//       onClick={() => setValue("大")}
//     >
//       <img src={Dai} />
//     </li>
//     <li
//       value={value === null ? state.text : value}
//       onClick={() => setValue("中")}
//     >
//       <img src={Chuu} />
//     </li>
//     <li
//       value={value === null ? state.text : value}
//       onClick={() => setValue("本")}
//     >
//       <img src={Hon} />
//     </li>
//     <li
//       value={value === null ? state.text : value}
//       onClick={() => setValue("行")}
//     >
//       <img src={Iku} />
//     </li>
//   </ul>
//   <button
//     className="Home-returnButton"
//     onClick={() => setView("selectors")}
//   >
//     <FontAwesomeIcon icon={faAngleLeft} size="3x" />
//   </button>
// </div>
