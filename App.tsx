import { StatusBar } from 'expo-status-bar'

import { ThemeProvider } from 'styled-components/native'
import { useFonts } from 'expo-font'
import { createStore } from './src/store/store'
import { Provider } from 'react-redux'
import { Navigator } from './src/feature/StackNavigator/component'
import { appNavigator, AppNavigatorWrapper } from './src/feature/Navigation'
import { useEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { ScrollView } from 'react-native'

const loadFonts = () => {
  return useFonts({
    Alexandria: require('./src/assets/fonts/Alexandria.ttf'),
    // Add other fonts if needed
  })
}

const store = createStore()
export default function App() {
  const [fontsLoaded] = loadFonts()

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        {fontsLoaded && (
          <ThemeProvider
            theme={{
              colors: {
                background: '#C6E57D',
                primary: '#013334',
                secondary: '#013334',
                accent: '#4D2114',
                white: '#fff',
                black: '#222',
                disabled: '#CCCCCC',
                offWhite: '#FAF9F6',
              },
              fonts: {
                regular: 'Alexandria',
              },
            }}>
            <Navigator />
            <StatusBar style="auto" />
          </ThemeProvider>
        )}
      </GestureHandlerRootView>
    </Provider>
  )
}
