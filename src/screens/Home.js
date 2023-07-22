import React, { useEffect, useState } from "react"
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import Header from "../components/CustomHeder"
import MyText from "../components/MyText"
import { CustomFlatlist, MaterialIconsIcon } from "../../common"
import CustomSwitch from "../components/CustomSwitch"
import { Modal, TextInput } from "react-native-paper"

const { height, width } = Dimensions.get("screen")
const { blue, white } = { blue: "#625df5", white: "white" }

// react-native-vector-icons site is not working from yesterday ---->>> https://oblador.github.io/react-native-vector-icons/
// so icon are same everywhere

const Home = () => {
  const [getSwitch, setSwitch] = useState(false)
  const [visible, setVisible] = useState(false)
  const [visibleGst, setVisibleGst] = useState(false)
  const [apiRes, setApiRes] = useState([])
  const [gstNo, setGstNo] = useState('')
  const [switchIndex, setSwitchIndex] = useState([])
  const [textInput, setTextinput] = useState(Array(7).fill(''))
  const placeholders = ['GST', 'First Name', 'Last Name', 'Email', 'Phone Number', 'Branch Name', 'Branch Address']

  const handleChng = (value, index) => {
    if (switchIndex.includes[index]) {
      switchIndex.splice(index, 1)
    } else {
      setSwitchIndex([...switchIndex, { index }])
      setSwitch(value)
    }
  }

  const ApiCall = async () => {
    try {
      await fetch('https://dummyjson.com/products', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => { return res.json() })
        .then(({ products }) => setApiRes(products))
        .catch(err => alert(err))
    } catch (error) {
      console.log(error)
    }
  }

  const PostData = async () => {
    setVisibleGst(false)
    setVisible(!visible)
    setGstNo('')
    try {
      const data = {
        title: textInput[0]
      }
      await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      }).then(res => { return res.json() })
        .then(res => console.log(res))
        .catch(res => alert(res))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    ApiCall()
  }, [])

  const hndleChng = (text, index) => {
    const newData = [...textInput];
    newData[index] = text;
    setTextinput(newData);
  }

  const setValue = gstNo => {
    const newData = [...textInput]
    newData[0] = gstNo
    setTextinput(newData)
    setVisibleGst(true)
  }

  return (
    <View style={{
      width: '100%',
      height: '100%',
      backgroundColor: blue,
      alignItems: 'center'
    }}>
      <Header />
      <View style={{ width: '90%', height: '90%', backgroundColor: white, margin: 10, borderRadius: 25, elevation: 10, borderColor: blue }}>
        <View style={[style?.flex, { padding: 10, borderBottomWidth: 1, borderColor: blue }]}>
          <View style={style?.flex}>
            <MaterialIconsIcon
              name={'search'}
              size={25}
              color={'grey'}
            />
            <MaterialIconsIcon
              name={'notifications'}
              size={25}
              color={'grey'}
            />
          </View>
          <MaterialIconsIcon
            name={'people'}
            size={25}
            color={blue}
          />

        </View>

        <View style={[style?.flex, { margin: 10 }]}>
          <View style={{ justifyContent: 'flex-end' }}>
            <MyText>Item List</MyText>
          </View>
          <TouchableOpacity onPress={() => setVisible(!visible)}
            style={{ justifyContent: 'center', backgroundColor: blue, width: '40%', height: 40, borderRadius: 5, alignItems: 'center' }}>
            <MyText style={{ color: white }}>Add Item</MyText>
          </TouchableOpacity>
        </View>

        <View style={{ height: height / 1.6 }}>
          <ScrollView horizontal>
            <View style={{ flexDirection: 'column' }}>
              <View style={{ flexDirection: 'row', margin: 10 }}>
                <View style={{ width: width / 1.4, padding: 20 }}>
                  <MyText>Brand</MyText>
                </View>
                <View style={[style.title, {}]}>
                  <MyText>Price</MyText>
                </View>
                <View style={[style.title, {}]}>
                  <MyText>Rating</MyText>
                </View>
                <View style={[style.title, {}]}>
                  <MyText>Action</MyText>
                </View>
              </View>
              <View style={{ height: height / 1.9 }}>
                <CustomFlatlist
                  data={apiRes}
                  renderItem={({ item: { brand, title, price, rating }, index }) => {
                    return (
                      <View key={index} style={{ flexDirection: 'row', backgroundColor: white, elevation: 5, margin: 10 }}>
                        <View style={{ width: width / 1.4, padding: 20, justifyContent: 'center' }}>
                          <MyText>{brand}</MyText>
                          <MyText>{title}</MyText>
                        </View>
                        <View style={[style.title, { justifyContent: 'center' }]}>
                          <MyText>{price}</MyText>
                        </View>
                        <View style={[style.title, { justifyContent: 'center' }]}>
                          <MyText>{rating}</MyText>
                        </View>
                        <View style={[style.title, {}]}>
                          <CustomSwitch value={getSwitch} onChng={() => handleChng(!getSwitch, index)} />
                        </View>
                      </View>
                    )
                  }}
                />
              </View >
            </View >
          </ScrollView >
        </View >

      </View >

      <Modal visible={visible} onDismiss={() => setVisible(!visible)} contentContainerStyle={{ flex: 1 }}>
        <View style={{ width: width, height: height, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: white, padding: 10, elevation: 10, borderRadius: 5 }}>
            <View style={{ alignItems: 'center' }}>
              <MyText style={{ fontSize: 15, fontWeight: '700' }}>Add Customers details</MyText>
              <MyText>Add details</MyText>
            </View>
            <View style={{ borderBottomWidth: 0.5, width: width * 0.9, padding: 10 }}>
            </View>

            {visibleGst ? (
              <View style={{ width: width * 0.85 }}>
                <CustomFlatlist
                  data={textInput}
                  renderItem={({ item, index }) => {
                    return (
                      <TextInput
                        mode="outlined"
                        outlineColor="silver"
                        activeOutlineColor="silver"
                        placeholder={`${placeholders[index]}`}
                        style={{ height: 40, marginBottom: 10, }}
                        value={item}
                        onChangeText={(text) => hndleChng(text, index)}
                      />
                    )
                  }}
                />
              </View>
            ) : (
              <TextInput
                mode="outlined"
                outlineColor="silver"
                activeOutlineColor="silver"
                placeholder={'GST No'}
                style={{ height: 40, marginBottom: 10, }}
                value={gstNo}
                onChangeText={txt => setGstNo(txt)}
              />
            )}

            <View style={[style?.flex, { width: '60%' }]}>

              <TouchableOpacity onPress={() => (setVisibleGst(false), setVisible(!visible), setGstNo(''))}
                style={style?.modalBtn}>
                <MyText style={{ color: 'black' }}>Cancel</MyText>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => { !visibleGst ? setValue(gstNo) : PostData() }}
                style={[style?.modalBtn, { backgroundColor: blue }]}>
                <MyText style={{ color: white }}>Add</MyText>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      </Modal >

    </View >

  )
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  modalBtn: {
    backgroundColor: white,
    width: '50%',
    height: 35,
    borderRadius: 5,
    margin: 2,
    borderWidth: 1,
    borderColor: 'silver',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    width: width / 4, padding: 20
  },
  flex: {
    flexDirection: 'row', justifyContent: 'space-between'
  }
})

export default Home