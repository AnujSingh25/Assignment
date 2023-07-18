import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import DrawerNav from './src/Routers/DrawerNav'

const App = () => {

  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  )
}

export default App