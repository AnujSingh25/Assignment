import { Text } from 'react-native'
import React from 'react'

const MyText = (props: any) => {
    return (
        <Text {...props} style={{ color: "black", ...props.style }} >{props?.children}</Text>
    )
}

export default MyText;