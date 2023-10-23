import styled from "styled-components";
import auth_1x from "../../assets/images/background_auth_x1.png";
import auth_2x from "../../assets/images/background_auth_x2.png";
import auth_3x from "../../assets/images/background_auth_x3.png";
import { NavLink } from "react-router-dom";

export const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  color: ${(p) => p.theme.colors.black};

  text-align: left;
  line-height: 1.4294;
  letter-spacing: 1;
  font-family: "Merriweather", serif;
  font-size: ${(p) => p.theme.fontSizes.xs};
  font-weight: ${(p) => p.theme.fontWeights.bold};
`;

export const ButtonStyled = styled.button`
  width: 100%;

  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 30px;

  padding: 11px 0px;

  line-height: 1.375;
  letter-spacing: 1;
  font-family: "Merriweather", serif;
  font-size: ${(p) => p.theme.fontSizes.s};
  font-weight: ${(p) => p.theme.fontWeights.bold};

  background-color: ${(p) => p.theme.colors.brown};
  color: ${(p) => p.theme.colors.white};

  transition: all 200ms ease;
  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.white};
    color: ${(p) => p.theme.colors.brown};
    outline: 2px solid ${(p) => p.theme.colors.brown};

    transition: all 200ms ease;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 350px;
  min-width: 350px;
  max-width: 350px;

  gap: ${(p) => p.theme.space[2]}px;
  margin: auto 100px;
`;

export const InputStyled = styled.input`
  padding: 14px 20px;
  margin-bottom: 3px;
  border-radius: 5px;
  border: none;
  outline: none;
  resize: none;

  color: ${(p) => p.theme.colors.darkgrey};
  background-color: ${(p) => p.theme.colors.grey};

  text-align: left;
  line-height: 1.571;
  letter-spacing: 1;
  font-family: "Lato", sans-serif;
  font-size: ${(p) => p.theme.fontSizes.xs};
  font-weight: ${(p) => p.theme.fontWeights.normal};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  max-width: 1440px;
  height: calc(100vh - 80px);

  padding-right: 100px;
`;

export const Background = styled.div`
  background-image: image-set(
    url(${auth_1x}) 1x,
    url(${auth_2x}) 2x,
    url(${auth_3x}) 3x
  );
  background-repeat: no-repeat;
  background-position: top left;
  background-size: cover;

  width: calc(100vw - 550px);
  height: calc(100vh - 80px);
`;

export const Title = styled.h2`
  color: ${(p) => p.theme.colors.darkgrey};

  text-align: left;
  line-height: 1.214;
  letter-spacing: 1;
  font-family: "Merriweather", serif;
  font-size: ${(p) => p.theme.fontSizes.xl};
  font-weight: ${(p) => p.theme.fontWeights.bold};
`;
export const Forgot = styled.a`
  margin-bottom: 10px;

  color: ${(p) => p.theme.colors.brown};

  text-align: right;
  line-height: 1.571;
  letter-spacing: 1;
  font-family: "Lato", sans-serif;
  font-size: ${(p) => p.theme.fontSizes.xs};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  cursor: pointer;

  transition: all 200ms ease;

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.darkgrey};

    transition: all 200ms ease;
  }
`;
export const Text = styled.p`
  text-align: center;
  margin-bottom: 10px;
`;
export const Span = styled.span`
  margin-right: 5px;

  color: ${(p) => p.theme.colors.darkgrey};

  line-height: 1.571;
  letter-spacing: 1;
  font-family: "Lato", sans-serif;
  font-size: ${(p) => p.theme.fontSizes.xs};
  font-weight: ${(p) => p.theme.fontWeights.bold};
`;
export const Link = styled(NavLink)`
  color: ${(p) => p.theme.colors.brown};

  line-height: 1.571;
  letter-spacing: 1;
  font-family: "Lato", sans-serif;
  font-size: ${(p) => p.theme.fontSizes.xs};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  cursor: pointer;

  transition: all 200ms ease;

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.darkgrey};

    transition: all 200ms ease;
  }
`;
