import styled from 'styled-components/native'

export const StyledInput = styled.TextInput`
  border-bottom-width: 1px;
  border-color: ${(props) => props.theme.colors.primary};
  width: 100%;
  padding: 10px;
  margin: 4px 0;
`
