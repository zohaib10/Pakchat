import { ScrollViewContainer } from './Login.style'
import { Heading, Padding, Text, StyledView } from '../../../shared/styled-components'
import { Button, Input, Link, PrimaryLogo } from '../../../atoms'

import { useState } from 'react'

type LoginProps = {
  goToSignUp: () => void
  goToHomePage: () => void
}

export const Login = ({ goToSignUp, goToHomePage }: LoginProps) => {
  const [credentials, setCredentials] = useState<{ emailOrPhone?: string; password?: string }>()
  return (
    <ScrollViewContainer>
      <StyledView>
        <PrimaryLogo />
        <Heading variation="h1">Welcome to PakChat</Heading>
        <Text size="xs">Login with your email or phone number</Text>
      </StyledView>
      <StyledView>
        <Padding>
          <Input
            placeholder="email or phone number"
            onChangeText={(emailOrPhone) => setCredentials({ ...credentials, emailOrPhone })}
          />
          <Input placeholder="password" onChangeText={(password) => setCredentials({ ...credentials, password })} />
          <Button
            disabled={!(credentials?.emailOrPhone && credentials?.password)}
            style={({ pressed }) => [pressed && { opacity: 0.8 }]}
            onPress={goToHomePage}>
            <Text size="md">Login</Text>
          </Button>
        </Padding>
        <Text size="xs">Don't have an account?</Text>
        <Link onPress={goToSignUp}>
          <Text size="xs" underline>
            Register!
          </Text>
        </Link>
        <Link>
          <Text size="xs" underline>
            Forgot Password?
          </Text>
        </Link>
      </StyledView>
      <StyledView>
        <Link>
          <Text size="xs" underline>
            Terms and Services
          </Text>
        </Link>
      </StyledView>
    </ScrollViewContainer>
  )
}
