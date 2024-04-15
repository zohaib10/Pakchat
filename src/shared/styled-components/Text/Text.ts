import styled, { css } from 'styled-components/native'

export const Text = styled.Text<{
  size: 'xxs' | 'xs' | 'sm' | 'md' | 'lg'
  underline?: boolean
}>`
  ${(props) =>
    props.underline &&
    css`
      text-decoration: underline;
    `}

  ${(props) =>
    props.size === 'xs' &&
    css`
      font-size: 12px;
    `};

  ${(props) =>
    props.size === 'xxs' &&
    css`
      font-size: 10px;
    `};

  ${(props) =>
    props.size === 'sm' &&
    css`
      font-size: 14px;
    `};

  ${(props) =>
    props.size === 'md' &&
    css`
      font-size: 16px;
    `};

  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.primary};
`
