import { FaBars } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import styled from "@emotion/styled";

export const Nav = styled.nav`
  background: transparent;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;

  /* Make background same as hero section */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  @media screen and (max-width: 768px) {
    height: 100px; /* Reduced height for mobile */
  }
`;

export const NavLink = styled(ScrollLink)`
  color: var(--text-color);
  display: flex;
  font-size: 1.2rem;
  align-items: center;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: var(--primary-color);
  }
`;

export const Logo = styled('div')`
  display: flex;
  align-items: center;
  justify-content: flex-start; /* align left */
  flex: 0 0 auto;

  img {
    width: clamp(120px, 20vw, 500px); /* min 120px, max 500px, scales with viewport */
    height: auto;
    object-fit: contain;

    @media screen and (max-width: 768px) {
      width: 30vw; /* Larger relative width on mobile */
      min-width: 150px; /* Ensure minimum size */
    }
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: var(--text-color);
  font-size: 1.8rem;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -28px;

  .menu-item + .menu-item {
    margin-left: 1rem;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
