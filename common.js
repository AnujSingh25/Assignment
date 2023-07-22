import { FlatList } from "react-native"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export function CustomFlatlist({ renderItem = () => { }, data, ...prop }) {
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            {...prop}
        />
    )
}

export const MaterialIconsIcon = ({ onPress = () => { }, name, ...props }) => {
    return (
        <MaterialIcons name={name} {...props} />
    );
};