import { StyleSheet, Image, Text, View, SafeAreaView, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView,Dimensions } from 'react-native'
import React from 'react'
import {CUSTOM_COLOR} from '../../../../constants/color';
import {IC_GoBack} from '../../../../assets/icons/index';
import scale from '../../../../utils/responsive';
import FONT_FAMILY from '../../../../constants/fonts';
import { IMG_LisaAvatar } from '../../../../assets/images';

const EditProfileScreen = () => {
  return (
    <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss() && TextInput.clearFocus()}>
            <SafeAreaView style={styles.container}>
            {/* Button Back */}
            <>
                <TouchableOpacity style={styles.goBackButton} >
                    <IC_GoBack />
                </TouchableOpacity>
            </>
            {/* Avatar */}
            <>
                <TouchableOpacity style={styles.avatarTouch} >
                    <Image style={styles.avatar} source={IMG_LisaAvatar}/>
                </TouchableOpacity>
            </>
            {/* Edit Profile Picture */}
            <>
                <TouchableOpacity>
                    <Text style={styles.editProfilePictureText} >
                        Edit Profile Picture
                    </Text>
                </TouchableOpacity>
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
                        Phone Number
                    </Text>
                    <TextInput 
                        placeholderTextColor={CUSTOM_COLOR.Grey}
                        placeholder="Phone Number"
                        style={styles.input}
                        keyboardType="numeric"
                    />
                </View>
            </>
            {/* Save Profile */}
            <>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Save Profile</Text>
                </TouchableOpacity>
            </>
        </SafeAreaView>
    </TouchableWithoutFeedback>
             
    
    
  )
}

export default EditProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CUSTOM_COLOR.White,
    },
    goBackButton: {
        position: 'absolute',
        left: scale(14),
        top: 15,
    },
    avatarTouch: {
        width:scale(110),
        height:110,
        borderRadius: 360,
        top: 60,
        alignSelf: 'center',
    },
    avatar: {
        width:scale(102),
        height:100,
    },
    editProfilePictureText: {
        fontFamily: FONT_FAMILY.NexaLight,
        fontSize: scale(14),
        textAlign: 'center',
        color: CUSTOM_COLOR.Primary,
        top: 55,
    },
    publicProfileText: {
        fontFamily: FONT_FAMILY.NexaBold,
        fontSize: scale(25),
        color: CUSTOM_COLOR.Primary,
        textAlign: 'center',
        top: 100,
    },
    privateProfileText: {
        fontFamily: FONT_FAMILY.NexaBold,
        fontSize: scale(25),
        color: CUSTOM_COLOR.Primary,
        textAlign: 'center',
        top: 180,
    },
    firstNameInput: {
        width: scale(360),
        height: 50,
        top: 110,
        left: scale(25),
    },
    lastNameInput: {
        width: scale(360),
        height: 50,
        top: 140,
        left: scale(25),
    },
    emailInput: {
        width: scale(360),
        height: 50,
        top: 190,
        left: scale(25),
    },
    numberInput: {
        width: scale(360),
        height: 50,
        top: 220,
        left: scale(25),
    },
    inputText: {
        fontFamily: FONT_FAMILY.NexaRegular,
        fontSize: scale(16),
        textAlign: 'left',
        color: CUSTOM_COLOR.Primary,
        alignContent: 'flex-start',
    },
    input: {
        fontFamily: FONT_FAMILY.NexaRegular,
        fontSize: scale(16),
        textAlign: 'left',
        alignContent: 'flex-start',
        height: 50,
        color: CUSTOM_COLOR.Black,
        borderBottomWidth: 0.5,
        borderColor: CUSTOM_COLOR.Primary,
    },
    button: {
        alignSelf: 'center',
        top: 275,
        width: scale(300),
        height: 50,
        backgroundColor: CUSTOM_COLOR.Primary,
        borderRadius: 20,
    },
    buttonText: {
        fontFamily: FONT_FAMILY.NexaBold,
        fontSize: scale(20),
        position: 'absolute',
        alignSelf: 'center',
        justifyContent: 'center',
        top: 10,
        color: CUSTOM_COLOR.White,
    },
})