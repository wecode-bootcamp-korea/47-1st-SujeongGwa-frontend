import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
    <div className="nav scroll">
      <div className="cateroryName">
        <ul className="mainMenu">
          <li className="logo">
            <Link to="/">
              <span>SJG</span>
            </Link>
          </li>
          {MAIN_MENU_LIST.map(info => (
            <li className="menulist" key={`menu-list-${info.id}`}>
              <Link to={info.link}>{info.text}</Link>
            </li>
          ))}
        </ul>
        <ul className="utilMenu">
          {UTIL_MENU_LIST.map(info => (
            <li className="menulist" key={info.id}>
              <Link to={info.link}>{info.text}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 서브카테고리 구현예정입니다. */}
      {/* <div className="subCateroryName">
        <ul className="porcelainTile on">
          {PORCELAIN_TILE_LIST.map(info => (
            <li className="menulist" key={info.id}>
              <Link to={info.link}>{info.text}</Link>
            </li>
          ))}
        </ul>
        <ul className="wallTile">
          {WALL_TILE_LIST.map(info => (
            <li className="menulist" key={info.id}>
              <Link to={info.link}>{info.text}</Link>
            </li>
          ))}
        </ul>
        <ul className="floorTile">
          {FLOOR_TILE_LIST.map(info => (
            <li className="menulist" key={info.id}>
              <Link to={info.link}>{info.text}</Link>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default Nav;

const MAIN_MENU_LIST = [
  { id: 1, link: '/', text: 'PORCELAIN TILE' },
  { id: 2, link: '/', text: 'WALL TILE' },
  { id: 3, link: '/', text: 'FLOOR TILE' },
];

const UTIL_MENU_LIST = [
  { id: 1, link: '/users/login', text: 'LOGIN' },
  { id: 2, link: '/cart', text: 'CART' },
];

// const PORCELAIN_TILE_LIST = [
//   { id: 1, link: '/', text: '600X600X10MM' },
//   { id: 2, link: '/', text: '600X1200X20MM' },
//   { id: 3, link: '/', text: '600X1200X11MM' },
//   { id: 4, link: '/', text: '600X600X20MM' },
//   { id: 5, link: '/', text: '400X800X11MM' },
// ];

// const WALL_TILE_LIST = [
//   { id: 1, link: '/', text: '300X600MM' },
//   { id: 2, link: '/', text: '200X600MM' },
// ];

// const FLOOR_TILE_LIST = [
//   { id: 1, link: '/', text: '300X300MM' },
//   { id: 2, link: '/', text: '200X400MM' },
// ];
