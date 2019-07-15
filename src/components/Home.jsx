import React from 'react';

import './Home.css';

export const Home = ({ style, className = '', children }) => {
  return (
    <div className={`Home ${className}`} style={style}>
      <h1 className="Home-title">{`ペン字の\nなぞり書き`}</h1>
      <p className="Home-tagline">憧れの美文字へ</p>
      {children}
    </div>
  );
};
