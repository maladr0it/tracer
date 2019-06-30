import React from "react";

import "./Home.css";

export const Home = ({ children }) => {
  return (
    <div className="Home">
      <h1 className="Home-title">ペン字の なぞり書き</h1>
      <p className="Home-tagline">憧れの美文字へ</p>
      {children}
    </div>
  );
};
