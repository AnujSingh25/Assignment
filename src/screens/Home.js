import React, { useEffect, useState } from "react"
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import Header from "../components/CustomHeder"
import { MaterialIconsIcon } from "../components/Icons"
import MyText from "../components/MyText"
import { CustomFlatlist } from "../../common"
import CustomSwitch from "../components/CustomSwitch"

const { height, width } = Dimensions.get("screen")

const Home = () => {
  const { blue, white } = { blue: "blue", white: "white" }
  const [getSwitch, setSwitch] = useState(false)
  const [getIndex, setIndex] = useState('')
  const [apiRes, setApiRes] = useState([])

  const handleChng = (value, index) => {
    setSwitch(value)
    setIndex(index)
  }

  const ApiCall = async () => {
    await fetch('https://dummyjson.com/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => { return res.json() })
      .then(({ products }) => setApiRes(products))
      .catch(err => alert(err))
  }

  useEffect(() => {
    ApiCall()
  }, [])

  return (
    <View style={{
      width: '100%',
      height: '100%',
      backgroundColor: blue,
      alignItems: 'center'
    }}>
      <Header />
      <View style={{ width: '90%', height: '90%', backgroundColor: white, margin: 10, borderRadius: 25, elevation: 10, borderColor: blue }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1, borderColor: blue }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <MaterialIconsIcon
              name={'search'}
              size={25}
              color={blue}
            />
            <MaterialIconsIcon
              name={'search'}
              size={25}
              color={blue}
            />
          </View>
          <MaterialIconsIcon
            name={'search'}
            size={25}
            color={blue}
          />

        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
          <View style={{ justifyContent: 'flex-end' }}>
            <MyText>Item List</MyText>
          </View>
          <TouchableOpacity style={{ backgroundColor: blue, width: '40%', height: 45, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
            <MyText style={{ color: white }}>Add Item</MyText>
          </TouchableOpacity>
        </View>

        <View style={{ height: height / 1.6 }}>
          <ScrollView horizontal>
            <View style={{ flexDirection: 'column' }}>
              <View style={{ flexDirection: 'row', margin: 10 }}>
                <View style={{ width: width / 1.2, padding: 20 }}>
                  <MyText>Brand</MyText>
                </View>
                <View style={{ width: width / 4, padding: 20 }}>
                  <MyText>Price</MyText>
                </View>
                <View style={{ width: width / 4, padding: 20 }}>
                  <MyText>Rating</MyText>
                </View>
                <View style={{ width: width / 4, padding: 20 }}>
                  <MyText>Action</MyText>
                </View>
              </View>
              <View>
                <CustomFlatlist
                  data={apiRes}
                  renderItem={({ item: { brand, title, price, rating }, index }) => {
                    return (
                      <View key={index} style={{ flexDirection: 'row', backgroundColor: white, elevation: 5, margin: 10 }}>
                        <View style={{ width: width / 1.2, padding: 20 }}>
                          <MyText>{brand}</MyText>
                          <MyText>{title}</MyText>
                        </View>
                        <View style={{ width: width / 4, padding: 20 }}>
                          <MyText>{price}</MyText>
                        </View>
                        <View style={{ width: width / 4, padding: 20 }}>
                          <MyText>{rating}</MyText>
                        </View>
                        <View style={{ width: width / 4, padding: 20 }}>
                          <MyText>{getSwitch && getIndex == index ? 'ACTIVE' : 'INACTIVE'}</MyText>
                          <CustomSwitch value={getSwitch} onChng={() => handleChng(!getSwitch, index)} />
                        </View>
                      </View>
                    )
                  }}
                />
              </View>
            </View>
          </ScrollView>
        </View>

      </View>
    </View >

  )
}

const style = StyleSheet.create({

  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
})

export default Home