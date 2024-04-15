import { Image, View } from 'react-native'
import { Link, Svg } from '../../../atoms'
import { Heading, Text } from '../../../shared/styled-components'
import {
  ButtonRowScrollView,
  ButtonStyled,
  RowView,
  ViewContainer,
  UserIcon,
  Chat,
  MessageDetails,
  Notification,
  UserIconView,
  Divider,
  NotificationCount,
  ScrollViewContainer,
  StyledTime,
  FooterNavigation,
  TagPlaceHolder,
  ChatPlaceHolder,
} from './Home.style'
import { useState } from 'react'
import { formatTime } from '../../../helpers'

export type Chat = {
  icon: string
  status: 'online' | 'recently-online' | 'offline'
  name: string
  lastMessage: string
  lastMessageAt: string
  notificationCount: number
  read: boolean
}

export type HomeProps = {
  tags: string[]
  chats: Chat[]
}

const toTitleCase = (str: string) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

const trimDescription = (s: string) => (s.length > 75 ? `${s.substring(0, 75)}...` : s)

const selected = '#C6E57D'
const rest = '#4F5E7B'

export const Home = ({ tags, chats }: HomeProps) => {
  const [selected, setSelected] = useState(tags?.[0])

  const [view, setView] = useState<'message' | 'recent' | 'profile'>('message')

  const handleOnPress = (value: string) => {
    setSelected(value)
  }

  return (
    <ViewContainer>
      <RowView>
        <Heading variation="h4">Recent Chats</Heading>
        <Link onPress={() => console.log('Clicked')}>
          <Svg iconName="search" height="24px" width="24px" />
        </Link>
      </RowView>
      <ButtonRowScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {tags?.map((tag, idx) => (
          <ButtonStyled key={idx} selected={selected === tag} onPress={() => handleOnPress(tag)}>
            <Text size="xs">{toTitleCase(tag)}</Text>
          </ButtonStyled>
        ))}
        <TagPlaceHolder />
      </ButtonRowScrollView>
      <ScrollViewContainer showsVerticalScrollIndicator={false}>
        {chats.map((chat, idx) => (
          <View key={idx}>
            <Chat>
              <UserIconView>
                <UserIcon source={{ uri: chat.icon }} />
              </UserIconView>
              <MessageDetails>
                <Text size="sm">{chat.name}</Text>
                <Text size="xxs">{trimDescription(chat.lastMessage)}</Text>
              </MessageDetails>
              <Notification>
                <StyledTime size="xs">{formatTime(chat.lastMessageAt)}</StyledTime>
                {!chat.read && <NotificationCount size="xxs">{chat.notificationCount}</NotificationCount>}
              </Notification>
            </Chat>
            <Divider />
          </View>
        ))}
        <ChatPlaceHolder />
      </ScrollViewContainer>
      <FooterNavigation>
        <Link onPress={() => setView('message')}>
          <Svg iconName="message" height="28px" width="28px" fill={view === 'message' ? '#4D2114' : '#4F5E7B'} />
        </Link>
        <Link onPress={() => setView('recent')}>
          <Svg iconName="recent" height="28px" width="28px" fill={view === 'recent' ? '#4D2114' : '#4F5E7B'} />
        </Link>
        <Link onPress={() => setView('profile')}>
          <Svg iconName="profile" height="28px" width="28px" fill={view === 'profile' ? '#4D2114' : '#4F5E7B'} />
        </Link>
      </FooterNavigation>
    </ViewContainer>
  )
}
