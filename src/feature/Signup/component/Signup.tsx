import { useState } from 'react'
import { Button, Input, Link, PrimaryLogo } from '../../../atoms'
import { Heading, Padding, Text, StyledView } from '../../../shared/styled-components'

import { ScrollViewContainer } from './Signup.style'

type SingUpProps = {
  goToLogin: () => void
}

export const Signup = ({ goToLogin }: SingUpProps) => {
  const [credentials, setCredentials] = useState<{ email?: string; password?: string }>()

  return (
    <ScrollViewContainer>
      <StyledView>
        <PrimaryLogo />
        <Heading variation="h1">Register with PakChat</Heading>
        <Text size="xs">Connecting Pakistan, One Chat at a Time.</Text>
      </StyledView>
      <StyledView>
        <Padding>
          <Input placeholder="email" onChangeText={(email) => setCredentials({ ...credentials, email })} />
          <Input placeholder="password" onChangeText={(password) => setCredentials({ ...credentials, password })} />
          <Button
            disabled={!(credentials?.email && credentials?.password)}
            style={({ pressed }) => [pressed && { opacity: 0.8 }]}>
            <Text size="md">Register</Text>
          </Button>
        </Padding>
        <Text size="xs">Already have an account?</Text>
        <Link onPress={goToLogin}>
          <Text size="xs" underline>
            Login!
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
