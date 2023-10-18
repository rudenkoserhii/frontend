import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavLinkStyled = styled(NavLink)`
  display: inline-block;

  height: 100%;
  width: 160px;
  padding: 11px 0px;
  outline: 2px solid ${(p) => p.theme.colors.brown};
  border-radius: 5px;

  text-align: center;
  text-decoration: none;
  line-height: 1.375;
  letter-spacing: 1;
  font-family: "Merriweather", serif;
  font-size: ${(p) => p.theme.fontSizes.s};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  color: ${(p) => p.theme.colors.brown};

  transition: all 200ms ease;

  &.active {
    color: ${(p) => p.theme.colors.white};
    background-color: ${(p) => p.theme.colors.brown};
  }

  &:hover:not(.active) {
    color: ${(p) => p.theme.colors.white};
    background-color: ${(p) => p.theme.colors.brown};
    outline: none;

    transition: all 200ms ease;
  }
`;

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
