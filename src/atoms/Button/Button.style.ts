import styled, { css } from "styled-components/native";

export const StyledButton = styled.Pressable<{ disabled?: boolean }>`
  background: ${(props) => props.theme.colors.background};
  width: 100%;
  height: 40px;
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  border-radius: 4px;

  ${(props) =>
    props.disabled &&
    css`
      background: ${props.theme.colors.disabled};
    `}
`;
