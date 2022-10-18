import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView,Dimensions } from 'react-native'
import React from 'react'
import {CUSTOM_COLOR} from '../../../../constants/color';
import {IC_GoBack} from '../../../../assets/icons/index';
import scale from '../../../../utils/responsive';
import FONT_FAMILY from '../../../../constants/fonts';

const EditProfileScreen = () => {
  return (
        <SafeAreaView style={styles.container}>
                {/* Button Back */}
            <>
                <TouchableOpacity style={styles.goBackButton} >
                    <IC_GoBack />
                </TouchableOpacity>
            </>
            {/* Edit Profile */}
            <>
                <Text style={styles.editProfileText} >
                Edit Profile
                </Text>
            </>
            {/* Public Profile */}
            <>
                <Text style={styles.publicProfileText} >
                Public Profile
                </Text>
            </>
            {/* First Name */}
            <>
                <View style={styles.firstNameInput}>
                    <Text style={styles.inputText}>
                        First Name
                    </Text>
                    <TextInput 
                        placeholderTextColor={CUSTOM_COLOR.Grey}
                        placeholder="First Name"
                        style={styles.input}
                        keyboardType="ascii-capable"
                    />
                </View>
            </>
            {/* Last Name */}
            <>
                <View style={styles.lastNameInput}>
                    <Text style={styles.inputText}>
                        Last Name
                    </Text>
                    <TextInput 
                        placeholderTextColor={CUSTOM_COLOR.Grey}
                        placeholder="Last Name"
                        style={styles.input}
                        keyboardType="ascii-capable"
                    />
                </View>
            </>
            {/* Public Profile */}
            <>
                <Text style={styles.privateProfileText} >
                Private Profile
                </Text>
            </>
            {/* Email */}
            <>
                <View style={styles.emailInput}>
                    <Text style={styles.inputText}>
                        Email
                    </Text>
                    <TextInput 
                        placeholderTextColor={CUSTOM_COLOR.Grey}
                        placeholder="Email"
                        style={styles.input}
                        keyboardType="ascii-capable"
                    />
                </View>
            </>
            {/* Number */}
            <>
                <View style={styles.numberInput}>
                    <Text style={styles.inputText}>
                        Number
                    </Text>
                    <TextInput 
                        placeholderTextColor={CUSTOM_COLOR.Grey}
                        placeholder="Number"
                        style={styles.input}
                        keyboardType="numeric"
                    />
                </View>
            </>
        </SafeAreaView>
        
    
    
  )
}

export default EditProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    goBackButton: {
        position: 'absolute',
        left: scale(14),
        top: 15,
    },
    editProfileText: {
        fontFamily: FONT_FAMILY.NexaRegular,
        fontSize: scale(24),
        textAlign: 'left',
        color: CUSTOM_COLOR.Black,
        top: 56,
        left: scale(25),
    },
    publicProfileText: {
        fontFamily: FONT_FAMILY.NexaRegular,
        fontSize: scale(16),
        textAlign: 'left',
        color: CUSTOM_COLOR.Black,
        top: 170,
        left: scale(25),
    },
    privateProfileText: {
        fontFamily: FONT_FAMILY.NexaRegular,
        fontSize: scale(16),
        textAlign: 'left',
        color: CUSTOM_COLOR.Black,
        top: 250,
        left: scale(25),
    },
    firstNameInput: {
        width: scale(325),
        height: 50,
        top: 190,
        left: scale(25),
    },
    lastNameInput: {
        width: scale(325),
        height: 50,
        top: 220,
        left: scale(25),
    },
    emailInput: {
        width: scale(325),
        height: 50,
        top: 270,
        left: scale(25),
    },
    numberInput: {
        width: scale(325),
        height: 50,
        top: 300,
        left: scale(25),
    },
    inputText: {
        fontFamily: FONT_FAMILY.NexaRegular,
        fontSize: scale(16),
        textAlign: 'left',
        color: CUSTOM_COLOR.Black,
        alignContent: 'flex-start',
    },
    input: {
        fontFamily: FONT_FAMILY.NexaRegular,
        fontSize: scale(16),
        textAlign: 'left',
        alignContent: 'flex-start',
        color: CUSTOM_COLOR.Black,
        borderBottomWidth: 1,
        borderColor: CUSTOM_COLOR.Grey,
    },
})