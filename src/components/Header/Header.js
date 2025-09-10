import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle, toggleTheme, theme }) => {
  return (
    <div className="Container" style={{ padding: 0 }}>
      <Nav>
        {/* Logo */}
        <Logo to="/">
          <img src="/hsnatekz.png" alt="logo" />
        </Logo>

        {/* Navigation Menu */}
        <NavMenu>
          <NavLink className="menu-item" to="projects">
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about">
            About
          </NavLink>
          <NavLink className="menu-item" to="contact">
            Contact
          </NavLink>
        </NavMenu>

        {/* Theme Switch Button */}
        <NavBtn>
          <button
            className="btn btn-icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{ marginRight: "1rem", fontSize: "1.2rem", padding: "6px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
              <path d="M8 0a.5.5 0 0 1 .5.5v1.634a5.002 5.002 0 0 1 2.668 1.42l1.153-1.153a.5.5 0 0 1 .707.707l-1.153 1.153a5.002 5.002 0 0 1 1.42 2.668h1.634a.5.5 0 0 1 0 1h-1.634a5.002 5.002 0 0 1-1.42 2.668l1.153 1.153a.5.5 0 0 1-.707.707l-1.153-1.153a5.002 5.002 0 0 1-2.668 1.42v1.634a.5.5 0 0 1-1 0v-1.634a5.002 5.002 0 0 1-2.668-1.42l-1.153 1.153a.5.5 0 1 1 .707-.707l1.153-1.153a5.002 5.002 0 0 1-1.42-2.668H.5a.5.5 0 0 1 0-1h1.634a5.002 5.002 0 0 1 1.42-2.668L2.4 3.56a.5.5 0 1 1 .707-.707l1.153 1.153A5.002 5.002 0 0 1 7.5 2.134V.5A.5.5 0 0 1 8 0zM8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
            </svg>
          </button>
        </NavBtn>

        {/* Resume Button (local PDF) */}
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="/HasnatAleemResume.pdf"     // Local PDF in public folder
            target="_blank"
            rel="noopener noreferrer"
            download              // Makes it downloadable
          >
            Resume
          </a>
        </NavBtn>

        {/* Hamburger / Mobile toggle */}
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
