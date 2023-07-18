import React from "react"
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from "../screens/Home"
import CustomDrawerContent from "../components/CustomDrawerContent"

const DrawerNav = () => {
    const Stack = createDrawerNavigator()
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: 'transparent',
                },
            }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}

export default DrawerNav