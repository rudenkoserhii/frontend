import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100vw;
  height: fit-content;

  background-color: ${(p) => p.theme.colors.darkgrey};
`;

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 44px;
  max-width: 1440px;
  padding: 18px 80px;
`;

export const Link = styled.a`
  height: 100%;
  width: auto;
`;

export const Logo = styled.img`
  height: 100%;
  width: auto;
`;
