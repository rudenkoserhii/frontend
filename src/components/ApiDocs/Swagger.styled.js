import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(NavLink)`
  position: absolute;
  top: calc(100vh - 50px - 50px);
  left: calc(100vw - 50px - 50px);

  background-image: url(${(props) => props.$picture});
  background-repeat: no-repeat;
  background-size: contain;

  height: 50px;
  width: 50px;
`;
