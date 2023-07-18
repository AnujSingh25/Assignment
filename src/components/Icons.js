import React from "react"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Zocial from 'react-native-vector-icons/Zocial'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'

export const MaterialCommunityIconsIcon = ({ name, ...props }) => {
    return (
        <MaterialCommunityIcons name={name} {...props} />
    );
};

export const FontAwesome5Icon = ({ onPress = () => { }, name, ...props }) => {
    return (
        <FontAwesome5 name={name} {...props} />
    );
}

export const IoniconsIcon = ({ onPress = () => { }, name, ...props }) => {
    return (
        <Ionicons name={name} {...props} />
    );
};

export const FontistoIcon = ({ onPress = () => { }, name, ...props }) => {
    return (
        <Fontisto name={name} {...props} />
    );
};

export const AntDesignIcon = ({ onPress = () => { }, name, ...props }) => {
    return (
        <AntDesign name={name} {...props} />
    );
}

export const MaterialIconsIcon = ({ onPress = () => { }, name, ...props }) => {
    return (
        <MaterialIcons name={name} {...props} />
    );
};

export const EntypoIcon = ({ onPress = () => { }, name, ...props }) => {
    return (
        <Entypo name={name} {...props} />
    );
};

export const ZocialIcon = ({ onPress = () => { }, name, ...props }) => {
    return (
        <Zocial name={name} {...props} />
    );
};

export const FontAwesomeIcon = ({ onPress = () => { }, name, ...props }) => {
    return (
        <FontAwesome name={name} {...props} />
    );
}

export const FeatherIcon = ({ onPress = () => { }, name, ...props }) => {
    return (
        <Feather name={name} {...props} />
    );
};