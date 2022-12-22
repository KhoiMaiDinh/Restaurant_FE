import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Geolocation from '@react-native-community/geolocation'
import Geocoder from 'react-native-geocoding'
import { useState } from 'react'
import { value } from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes'
import { BASE_URL } from '../../../utils/api'


const LocationScreen = () => {
    const [info,setInfo] = useState(0)
    Geolocation.getCurrentPosition(info =>{
        console.log("Check Geolocation output => ", info)
        setInfo({
            lat: info.coords.latitude,
            lng: info.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        })
        Geocoder.init(); //api
        Geocoder.from(info.coords.latitude, info.coords.longitude)
        .then(json =>{
            console.log("checking Geocoder json data ==> ",json)
            json.results[0].address_components.forEach((value,index) =>{
                this.setInfo({address: json.results[0].formatted_address,
                tempAddress: json.results[0].formatted_address})
            })
        })
    })
  return (
    <View>
      <Text> LocationScreen</Text>
    </View>
  )
}

export default LocationScreen

const styles = StyleSheet.create({})