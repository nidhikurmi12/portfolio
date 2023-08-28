import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <>
      <div className="n-wrapper">
        <div className="n-left">
          <div className="n-name">NIDHI</div>
          <Toggle />
        </div>
        <div className="n-right">
          <div className="n-list">
            <ul style={{ listStyleType: "none" }}>
              <Link
                spy={true}
                to="Navbar"
                smooth={true}
                activeClass="activeClass"
              >
                <li>Home</li>
              </Link>
              <Link
                spy={true}
                to="Services"
                smooth={true}
                activeClass="activeClass"
              >
                <li>Services</li>
              </Link>
              <Link
                spy={true}
                to="Experience"
                smooth={true}
                activeClass="activeClass"
              >
                <li>Experience</li>
              </Link>
              <Link
                spy={true}
                to="Portfolio"
                smooth={true}
                activeClass="activeClass"
              >
                <li>Portfolio</li>
              </Link>
            </ul>
          </div>
       
        </div>
        <div className="contact-btnn">
        <Link spy={true} to="Contact" smooth={true} activeClass="activeClass">
          <button>Contact Us</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
