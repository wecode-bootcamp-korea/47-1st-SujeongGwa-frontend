import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
    <div className="nav scroll">
      <div class="container">
        <ul className="mainMenu">
          <li className="logo">
            <Link to="/">
              <img src="./images/logo_fffef2.png" alt="logo" />
            </Link>
          </li>
          {MENU_LIST_LEFT.map(info => (
            <li className="menulist" key={info.id}>
              <Link to={info.link}>{info.text}</Link>
            </li>
          ))}
        </ul>
        <ul className="utilMenu">
          {MENU_LIST_RIGHT.map(info => (
            <li key={info.id}>
              <Link to={info.link}>{info.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;

const MENU_LIST_LEFT = [
  { id: 1, link: '/', text: 'PORCELAIN TILE' },
  { id: 2, link: '/', text: 'WALL TILE' },
  { id: 3, link: '/', text: 'FLOOR TILE' },
];

const MENU_LIST_RIGHT = [
  { id: 1, link: '/', text: 'LOGIN' },
  { id: 2, link: '/', text: 'CART' },
];
