import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
    <div className="nav scroll">
      <div class=" depth01">
        <ul className="mainMenu">
          <li className="logo">
            <Link to="/">
              {/* <img src="./images/logo_fffef2.png" alt="logo" />
               */}
              <span>SJG</span>
            </Link>
          </li>
          <li className="menulist">
            <Link to="/">PORCELAIN TILE</Link>
          </li>
          <li className="menulist">
            <Link to="/">WALL TILE</Link>
          </li>
          <li className="menulist">
            <Link to="/">FLOOR TILE</Link>
          </li>
        </ul>
        <ul className="utilMenu">
          <li className="menulist">
            <Link to="/">LOGIN</Link>
          </li>
          <li className="menulist">
            <Link to="/">CART</Link>
          </li>
        </ul>
      </div>
      <div className="depth02">
        <ul className="porcelainTile on">
          <li>
            <Link to="/">600X1200X20MM</Link>
          </li>
          <li>
            <Link to="/">600X1200X11MM</Link>
          </li>
          <li>
            <Link to="/">600X600X20MM</Link>
          </li>
          <li>
            <Link to="/">600X600X10MM</Link>
          </li>
          <li>
            <Link to="/">400X800X11MM</Link>
          </li>
        </ul>
        <ul className="wallTile">
          <li>
            <Link to="/">300X600MM</Link>
          </li>
          <li>
            <Link to="/">200X600MM</Link>
          </li>
        </ul>
        <ul className="floorTile">
          <li>
            <Link to="/">300X300MM</Link>
          </li>
          <li>
            <Link to="/">200X400MM</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;

// const MENU_LIST_LEFT = [
//   { id: 1, link: '/', text: 'PORCELAIN TILE' },
//   { id: 2, link: '/', text: 'WALL TILE' },
//   { id: 3, link: '/', text: 'FLOOR TILE' },
// ];

// const MENU_LIST_RIGHT = [
//   { id: 1, link: '/', text: 'LOGIN' },
//   { id: 2, link: '/', text: 'CART' },
// ];
