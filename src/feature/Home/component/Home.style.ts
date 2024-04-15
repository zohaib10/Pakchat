import styled from 'styled-components/native'
import { Button } from '../../../atoms'
import { css } from 'styled-components'
import { Text } from '../../../shared/styled-components'

export const ViewContainer = styled.View`
  background: ${(props) => props.theme.colors.offWhite};
  flex: 1;
`

export const ScrollViewContainer = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
  },
}))`
  background: ${(props) => props.theme.colors.offWhite};

  padding: 0 16px;
`

export const RowView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 54px 16px 0 16px;
`

export const ButtonRowScrollView = styled.ScrollView`
  width: 100%;
  max-height: 50px;
  overflow: hidden;
  margin: 8px 0;
  padding: 0 16px;
`

export const ButtonStyled = styled(Button)<{ selected?: boolean }>`
  width: 80px;
  height: 30px;
  margin-right: 8px;
  ${(props) =>
    !props.selected &&
    css`
      background: ${props.theme.colors.white};
      border: 0.4px solid ${props.theme.colors.primary};
    `}
`

export const UserIcon = styled.Image`
  height: 56px;
  width: 56px;
  border-radius: 50px;
`

export const Divider = styled.View`
  background: rgba(34, 34, 34, 0.1);
  height: 1px;
`

export const Chat = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}))`
  margin-bottom: 6px;
  max-height: 70px;
  min-height: 70px;
`

export const MessageDetails = styled.View`
  display: flex;
  width: 68%;
  padding: 0 8px;
  justify-content: center;
`

export const Notification = styled.View`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: flex-start;
  width: 16%;
`

export const StyledTime = styled(Text)`
  font-size: 12px;
  margin-top: 6px;
`

export const NotificationCount = styled(Text)`
  background: ${(props) => props.theme.colors.background};
  border-radius: 50px;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
  width: 22px;
  overflow: hidden;
  font-size: 12px;
`

export const UserIconView = styled.View`
  display: flex;
  justify-content: center;
  min-height: 70px;
  max-height: 70px;
`

export const FooterNavigation = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 0;
  height: 70px;
  padding: 8px 16px;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: rgba(34, 34, 34, 0.1);
  background: ${(props) => props.theme.colors.white};
`

export const TagPlaceHolder = styled.View`
  width: 30px;
`

export const ChatPlaceHolder = styled.View`
  height: 65px;
`
