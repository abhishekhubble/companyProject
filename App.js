import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyStack from './StackNavigation'
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
    <MyStack />
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})