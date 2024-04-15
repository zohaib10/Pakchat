import styled from 'styled-components/native'

export const ScrollViewContainer = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'space-around',
  },
}))`
  background: ${(props) => props.theme.colors.white};
  padding: 16px;
`
