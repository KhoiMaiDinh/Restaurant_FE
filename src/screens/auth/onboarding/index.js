import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { IC_Binoculars } from '../../../assets/icons'
import scale from '../../../utils/responsive'

const OnboardingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        {/* <View style={styles.IC_Binoculars}>
            <IC_Binoculars/>
        </View> */}
        {/* View 1 */}
        <>
            <View>
                <Text style={styles.titleText}>Browse  Food</Text>
                <Text>Welcome to our restaurant app! Log in
                and check  out our delicious food.</Text>
            </View>
        </>

    </SafeAreaView>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5EA33A',
    },
    titleText: {
        fontWeight: 400,
        fontSize: 17,
    },
    IC_Binoculars: {
        position: 'absolute',
        top: scale(300),
        backgroundColor: 'red',
        width: scale(200),
        height: scale(150),
        left: scale(132),
        justifyContent: 'center',
        alignItems: 'center',
    }
})