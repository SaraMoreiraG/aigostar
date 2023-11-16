import React, { useState, useEffect } from "react";
import { Link, useLocation  } from "react-router-dom";

import logo from "../../assets/images/logo-black.png";
import "./navbar.css";
import cart from "../../assets/images/icon-basket-full.png";

function NavBar() {
  // const { isAuthenticated } = useAuth();
  const location = useLocation();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 582);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  // Handle scrolling and update the state
  const handleScroll = () => {
    if (window.scrollY > 130) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    // Add a scroll event listener to track scrolling
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Use an event listener to update isSmallScreen when the window size changes
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 582);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navbar">
      <div className={`navbar-color ${scrolling ? "scrolling" : ""}`}>
        <nav
          className={`row navbar-margin justify-content-between ${
            isMenuOpen ? "open" : ""
          }`}
        >
          {/***** Logo ******/}
          <div className={`px-0 py-2 ${isSmallScreen ? "col-9" : "col-5"}`}>
            <Link to="/" className="logo d-flex" onClick={closeMenu}>
              <img src={logo} alt="Logo" className="navbar-logo" />
            </Link>
          </div>
          {/***** Small Menu ******/}
          {isSmallScreen ? (
            <>
              <div className="col-3 d-flex align-items-center justify-content-end">
                <div className="nav-buy-small-container">
                  <Link to="/shopping-cart">
                    <img src={cart} alt="Icon" className="nav-buy-small" />
                  </Link>
                </div>
              {/***** Small Menu Button ******/}
                <div
                  className={`dropdown-button ${isMenuOpen ? "open" : ""}`}
                  onClick={toggleMenu}
                  onMouseEnter={() => setIsMenuOpen(true)}
                >
                  <i className="fa-solid fa-bars"></i>
                </div>
              </div>
              {/***** Small Menu Dropdown ******/}
              <div
                className="text-start pt-2"
                onMouseLeave={() => setIsMenuOpen(false)}
              >
                <ul className="dropdown-list">
                <Link
                    to="/"
                    className={`nav-link dropdown-link ${location.pathname === '/' ? 'selected' : ''}`}
                    onClick={() => {
                      closeMenu();
                    }}
                  >
                    <li>Inicio</li>
                  </Link>
                  <Link
                    to="/airfryers"
                    className={`nav-link dropdown-link ${location.pathname === '/airfryers' ? 'selected' : ''}`}
                    onClick={() => {
                      closeMenu();
                    }}
                  >
                    <li>Freidoras de Aire</li>
                  </Link>
                  <Link
                    to="/accesorios"
                    className={`nav-link dropdown-link ${location.pathname === '/accesorios' ? 'selected' : ''}`}
                    onClick={closeMenu}
                  >
                    <li>Accesorios</li>
                  </Link>
                  <Link
                    to="/recetas"
                    className={`nav-link dropdown-link ${location.pathname === '/recetas' ? 'selected' : ''}`}
                    onClick={closeMenu}
                  >
                    <li>Recetas</li>
                  </Link>
                </ul>
              </div>
            </>
          ) : (
            //***** Big Menu *********
            <div className="col-7 d-flex align-items-center justify-content-end p-0">
              <div className="me-3">
                <Link to="/" className={`nav-link ${location.pathname === '/' ? 'selected' : ''}`}>
                  <span>Inicio</span>
                </Link>
              </div>
              <div className="me-3">
                <Link to="/airfryers" className={`nav-link ${location.pathname === '/airfryers' ? 'selected' : ''}`}>
                  <span>Freidoras de Aire</span>
                </Link>
              </div>
              <div className="me-3">
                <Link to="/accesorios" className={`nav-link ${location.pathname === '/accesorios' ? 'selected' : ''}`}>
                  <span>Accesorios</span>
                </Link>
              </div>
              <div className="me-3">
                <Link to="/recetas" className={`nav-link ${location.pathname === '/recetas' ? 'selected' : ''}`}>
                  <span>Recetas</span>
                </Link>
              </div>
              <div className="nav-buy-container">
                <Link to="/shopping-cart">
                  <img src={cart} alt="Icon" className="nav-buy" />
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}

export default NavBar;