import "./navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  const user = true;
  return (
    <div className="nav">
      <div className="navLeft">
        <i className="navIcon fa-brands fa-facebook-f"></i>
        <i className="navIcon fa-brands fa-instagram"></i>
        <a href="https://github.com/Avinash227842" className="extlink">
          <i className="navIcon fa-brands fa-github"></i>
        </a>
        <a
          href="https://linkedin.com/in/avinash-chaudhary-8a2004222"
          className="extlink"
        >
          <i className="navIcon fa-brands fa-linkedin"></i>
        </a>
      </div>
      <div className="navCenter">
        <ul className="navList">
          <li className="navListItem">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/writepost">
              Write
            </Link>
          </li>
          {user && <li className="navListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="navRight">
        {user ? (
          <Link className="link" to="/settings">
            <div className="navImg"></div>
          </Link>
        ) : (
          <ul className="navList">
            <li className="navListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="navListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="navSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
