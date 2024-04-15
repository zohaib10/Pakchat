import { NavigationProp, useNavigation } from '@react-navigation/native'
import { StackParameters } from '../../types'

export let appNavigator: NavigationProp<StackParameters>

export const AppNavigatorWrapper = ({ children }: { children: React.ReactNode }) => {
  appNavigator = useNavigation<NavigationProp<StackParameters>>()

  return children
}
