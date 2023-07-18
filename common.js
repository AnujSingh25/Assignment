import { FlatList } from "react-native"

export function CustomFlatlist({ renderItem = () => { }, data, ...prop }) {
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            {...prop}
        />
    )
}