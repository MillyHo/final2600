import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);
  return (
    <>


      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          Loaf
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-links active"
                  onClick={closeMenu}
                  style={{
                    color: "black",
                    margin: "1rem",
                    textDecoration: "none",
                    fontFamily: "Candara",
                  }}
                >
                  Memes
                </Link>
              </li>

              <li className="nav-item">
             
              </li>
              <li className="nav-item">
                <Link
                  to="/login"
                  onClick={closeMenu}
                  style={{
                    color: "black",
                    margin: "1rem",
                    textDecoration: "none",
                    fontFamily: "Candara",
                  }}
                >
                  Community
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/profile"
                  onClick={closeMenu}
                  style={{
                    color: "black",
                    margin: "1rem",
                    textDecoration: "none",
                    fontFamily: "Candara",
                  }}
                >
                  My Profile
                </Link>
                <Link
                  to="/documentation"
                  onClick={closeMenu}
                  style={{
                    color: "black",
                    margin: "1rem",
                    textDecoration: "none",
                    fontFamily: "Candara",
                  }}
                >
                  Documentation
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
