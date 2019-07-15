import React from 'react';
import { Link } from 'react-router-dom';
import penImage from '../assets/penImage.svg';
import './Main.css';
import { Home } from '../components/Home';

export const Main = () => {
  console.log(penImage);
  return (
    <Home>
      <div className="Main" style={{ backgroundImage: `url(${penImage})` }}>
        <Link className="Main-button" to="/editor">
          文章の練習
        </Link>
        <Link className="Main-button" to="/kanji">
          書き順の練習
        </Link>
      </div>
    </Home>
  );
};
