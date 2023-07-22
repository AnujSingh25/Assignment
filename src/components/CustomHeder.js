import React from "react"
import {
    View,
    StatusBar,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'
import { useNavigation } from "@react-navigation/native"
import { MaterialIconsIcon } from "../../common"

const Header = () => {

    const navigation = useNavigation()

    return (
        <View
            style={{
                backgroundColor: "#625df5",
                height: 47,
                width: '100%',
                borderBottomColor: 'white',
                borderBottomWidth: 1
            }}
        >
            <StatusBar
                backgroundColor={"#625df5"}
                barStyle="light-content"
            />

            <View style={Styles.header}>

                <TouchableOpacity
                    onPress={() => ''}
                    style={{ justifyContent: 'center' }}>
                    <MaterialIconsIcon
                        name={'layers'}
                        size={30}
                        color={'white'}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.openDrawer()}
                    style={{ justifyContent: 'center' }}>
                    <MaterialIconsIcon
                        name={'height'}
                        size={30}
                        color={'white'}
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