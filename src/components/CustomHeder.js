import React from "react"
import {
    View,
    StatusBar,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/native"

const Header = () => {

    const navigation = useNavigation()

    return (
        <View
            style={{
                backgroundColor: 'blue',
                height: 47,
                width: '100%',
                borderBottomColor: 'white',
                borderBottomWidth: 1
            }}
        >
            <StatusBar
                backgroundColor={'blue'}
                barStyle="light-content"
            />

            <View style={Styles.header}>

                <TouchableOpacity
                    onPress={() => ''}
                    style={{ justifyContent: 'center' }}>
                    <Icon
                        name={'search'}
                        size={30}
                        color='black'
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.openDrawer()}
                    style={{ justifyContent: 'center' }}>
                    <Icon
                        name={'search'}
                        size={30}
                        color='black'
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: '100%',
        justifyContent: 'space-between',
        padding: 10
    },
})

export default Header