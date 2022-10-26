import React from 'react'
import { LogBox, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import AppNavigators from './src/navigation/AppNavigators'
import store from './src/redux/store'
import Layouts from './src/themes/Layouts'

const App = () => {
  return (
    <View style={Layouts.flexFill} >
      <Provider store={store}>
        <SafeAreaProvider>
          <AppNavigators />
        </SafeAreaProvider>
      </Provider>
    </View>
  )
}

LogBox.ignoreAllLogs();

export default App