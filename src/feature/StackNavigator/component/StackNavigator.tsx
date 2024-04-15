import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { StackParameters } from '../../../types'
import { AppNavigatorWrapper } from '../../Navigation'

import { Login } from '../../Login'
import { Signup } from '../../Signup'
import { Home } from '../../Home'

const Stack = createStackNavigator<StackParameters>()
export const Navigator = () => {
  return (
    <NavigationContainer>
      <AppNavigatorWrapper>
        <Stack.Navigator initialRouteName="login">
          <Stack.Screen name={'login'} options={{ headerShown: false }} component={Login} />
          <Stack.Screen name={'signup'} options={{ headerShown: false }} component={Signup} />
          <Stack.Screen name={'home'} options={{ headerShown: false }} component={Home} />
        </Stack.Navigator>
      </AppNavigatorWrapper>
    </NavigationContainer>
  )
}
