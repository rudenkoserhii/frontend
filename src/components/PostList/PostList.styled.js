import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1440px;
  max-width: 1440px;
  margin: 0px auto;
  padding: 0px 80px 12px 80px;
`;

export const PostListStyled = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Li = styled.li``;

export const Title = styled.h2`
  color: ${(p) => p.theme.colors.brown};

  text-align: left;
  line-height: 1.214;
  letter-spacing: 1;
  font-family: "Merriweather", serif;
  font-size: ${(p) => p.theme.fontSizes.xl};
  font-weight: ${(p) => p.theme.fontWeights.bold};

  margin-top: 50px;
  margin-bottom: 20px;
  width: 100%;
`;
