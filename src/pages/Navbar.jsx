import "../styles/Navbar.css";
import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "/MentalLogo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [navbarPosition, setNavbarPosition] = useState(0);
  const menuRef = useRef(null);
  const [activeTab, setActiveTab] = useState(1);
  const handleClick = (number) => {
    setActiveTab(number);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (!menuOpen) {
        if (currentScrollTop > lastScrollTop) {
          setNavbarPosition(-5);
        } else {
          setNavbarPosition(0);
        }
      }

      setLastScrollTop(currentScrollTop);
    };

    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [lastScrollTop, menuOpen]);

  return (
    <nav id="navbar" style={{ top: `${navbarPosition}rem` }}>
      {" "}
      <div className="navbar container" ref={menuRef}>
        {" "}
        <div className="header">
          <Link
            to="/"
            className="logo"
            onClick={() => {
              handleClick(1);
            }}
          >
            <img src={Logo} alt="Mental Health" />
          </Link>
          <div
            className="menu"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <span className="1"></span>
            <span className="2"></span>
            <span className="3"></span>
          </div>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink
              to="/"
              onClick={() => {
                handleClick(1);
              }}
              className={` ${activeTab == 1 ? "active" : ""} `}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => {
                handleClick(2);
              }}
              className={` ${activeTab == 2 ? "active" : ""} `}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              onClick={() => {
                handleClick(3);
              }}
              className={` ${activeTab == 3 ? "active" : ""} `}
            >
              Take Action
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              onClick={() => {
                handleClick(4);
              }}
              className={` ${activeTab == 4 ? "active" : ""} `}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => {
                handleClick(5);
              }}
              className={` ${activeTab == 5 ? "active" : ""} `}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
