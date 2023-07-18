import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'

const CustomSwitch = ({ value, onChng }) => {
    const [active, setActive] = useState(value)

    const handleChng = () => {
        setActive(!active)
        onChng(!active)
    }

    const switchStyle = [styles.container]
    const cStyle = [styles.circle, active ? styles.cActive : styles.inActive]

    if (active) {
        switchStyle.push(styles.right)
        cStyle.push(styles.cRyt)
    }

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={handleChng}>
            <View style={switchStyle}>
                <View style={cStyle} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 30,
        borderRadius: 15,
        padding: 2,
        justifyContent: 'center',
        elevation: 10,
        backgroundColor: 'white',
    },
    right: {
        flexDirection: 'row-reverse',
    },
    circle: {
        width: 26,
        height: 26,
        borderRadius: 13,
    },
    cActive: {
        backgroundColor: 'blue',
    },
    inActive: {
        backgroundColor: 'grey',
    },
    cRyt: {
        marginLeft: 20,
    },
})

export default CustomSwitch