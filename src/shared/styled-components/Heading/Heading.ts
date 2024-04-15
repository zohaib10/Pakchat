import styled, { css } from 'styled-components/native'

export const Heading = styled.Text<{
  variation: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}>`
  ${(props) =>
    props.variation === 'h1' &&
    css`
      font-size: 24px;
    `}

  ${(props) =>
    props.variation === 'h4' &&
    css`
      font-size: 20px;
    `}

  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.regular};
`
