import { NavLinkStyled, Wrapper } from "./AuthNav.styled";

export const AuthNav = () => {
  return (
    <Wrapper>
      <NavLinkStyled to="/login">Log In</NavLinkStyled>
      <NavLinkStyled to="/signup">Sign Up</NavLinkStyled>
    </Wrapper>
  );
};
