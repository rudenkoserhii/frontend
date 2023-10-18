import styled from "styled-components";

export const CardStyled = styled.div`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.space[3]}px;
  padding: ${(p) => p.theme.space[2]}px;
  border: ${(p) => p.theme.borders.grey};
  border-radius: ${(p) => p.theme.radii.normal};
`;

export const NameStyled = styled.p`
  width: ${(p) => p.theme.space[8]}px;
  font-weight: ${(p) => p.theme.fontWeights.bold};
`;

export const DataStyled = styled.li`
  width: ${(p) => p.theme.space[7]}px;
  font-weight: ${(p) => p.theme.fontWeights.bold};
`;

export const DataBox = styled.ul`
  width: ${(p) => p.theme.space[7]}px;
  font-weight: ${(p) => p.theme.fontWeights.bold};
`;
