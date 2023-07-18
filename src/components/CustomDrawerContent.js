import * as React from "react"
import { View, Text, TouchableOpacity } from 'react-native'
import { DrawerContentScrollView } from "@react-navigation/drawer"
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { CustomFlatlist } from "../../common"

function CustomDrawerContent({ navigation, props }) {

    const data = [
        {
            name: 'Dashboard',
            icon: 'home',
            icon2: ''
        },
        {
            name: 'Customers',
            icon: 'home',
            icon2: ''
        },
        {
            name: 'Vendors',
            icon: 'home',
            icon2: ''
        },
        {
            name: 'Goods/Service',
            icon: 'home',
            icon2: ''
        },
        {
            name: 'Settings',
            icon: 'home',
            icon2: 'home'
        },
        {
            name: 'Reports',
            icon: 'home',
            icon2: 'home'
        }
    ]

    return (

        <DrawerContentScrollView {...props} backgroundColor='blue'
            showsVerticalScrollIndicator={false}
            style={{
                borderTopRightRadius: 15, borderBottomRightRadius: 15,
            }}>
            <View style={{}}>
                <CustomFlatlist
                    data={data}
                    renderItem={({ item, index }) => {
                        return (
                            <View key={index}>
                                <TouchableOpacity style={{ flexDirection: 'row', margin: 10 }}>
                                    <View style={{ width: '20%', padding: 5, alignItems: 'center', justifyContent: 'center' }}>
                                        <Icon
                                            name={item?.icon}
                                            size={25}
                                            color={'white'}
                                        />
                                    </View>

                                    <View style={{ width: '60%', alignItems: 'center', justifyContent: 'center', }}>
                                        <Text style={{ fontSize: 15, color: 'white' }}>{item?.name}</Text>
                                    </View>

                                    <View style={{ width: '20%', alignItems: 'center', justifyContent: 'center' }}>
                                        {item?.icon2 && <Icon
                                            name={item?.icon2}
                                            size={25}
                                            color={'white'}
                                        />}
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />
            </View>
        </DrawerContentScrollView>
    )

}

export default CustomDrawerContent