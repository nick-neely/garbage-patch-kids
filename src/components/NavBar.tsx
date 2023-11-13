import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";

const NavBar = () => {
  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/game1">Snake</Link>
            </li>
            <li>
              <Link to="/game2">Tetris</Link>
            </li>
            <li>
              <Link to="/game3">Flappy Bird</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img
            src={logo}
            alt="logo"
            style={{ width: "60px", height: "auto" }}
          />
          Arcade
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/game1">Snake</Link>
          </li>
          <li>
            <Link to="/game2">Tetris</Link>
          </li>
          <li>
            <Link to="/game3">Flappy Bird</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-bottom dropdown-end">
          <label tabIndex={0} className="btn glass m-1">
            <img src={menu} alt="menu" className="w-8 h-8" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/game1">Snake</Link>
            </li>
            <li>
              <Link to="/game2">Tetris</Link>
            </li>
            <li>
            <Link to="/game3">Flappy Bird</Link>
          </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
