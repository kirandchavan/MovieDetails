import React from 'react'
import { NativeModules, Platform, StatusBar, View, } from 'react-native'

const CustomStatusBar = ({ statusBarColor, barStyle, noHeightRequired }) => {
  const { StatusBarManager } = NativeModules;
  const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? StatusBarManager.HEIGHT : StatusBarManager.HEIGHT;
  return (
    <>
      <StatusBar barStyle={barStyle} backgroundColor={statusBarColor} />
      <View style={{
        height: noHeightRequired ? 0 : STATUSBAR_HEIGHT,
        backgroundColor: statusBarColor
      }} />
    </>
  )
}

export default CustomStatusBar