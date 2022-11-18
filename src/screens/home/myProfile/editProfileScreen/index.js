import { StyleSheet, Image, Text, View, SafeAreaView, TouchableOpacity, TextInput, TouchableWithoutFeedback, Dimensions, Keyboard, ScrollView, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import {CUSTOM_COLOR} from '../../../../constants/color';
import {IC_GoBack} from '../../../../assets/icons/index';
import scale from '../../../../utils/responsive';
import FONT_FAMILY from '../../../../constants/fonts';
import { IMG_LisaAvatar } from '../../../../assets/images';

const EditProfileScreen = () => {
  return (
    <ScrollView>
        <SafeAreaView style={styles.container}>
            {/* Avatar */}
            <>
                <TouchableOpacity style={styles.avatarTouch} >
                    <Image style={styles.avatar} source={IMG_LisaAvatar}/>
                </TouchableOpacity>
            </>
            {/* Edit Profile Picture */}
            <>
                <TouchableOpacity style={styles.editProfilePictureTouch}>
                    <Text style={styles.editProfilePictureText} >
                        Edit Profile Picture
                    </Text>
                </TouchableOpacity>
            </>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss() && TextInput.clearFocus()}>
                <KeyboardAvoidingView>
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
                    <>
                    <View style={{borderColor: CUSTOM_COLOR.Primary, borderWidth: 1, left:scale(207.5), top:20, height:75, width: scale(1)}}/>
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
                    {/* Private Profile */}
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
                    {/* Location */}
                    <>
                        <View style={styles.locationInput}>
                            <Text style={styles.inputText}>
                                Location
                            </Text>
                            <TextInput 
                                placeholderTextColor={CUSTOM_COLOR.Grey}
                                placeholder="Location"
                                style={styles.input}
                                keyboardType="ascii-capable"
                            />
                        </View>
                    </>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
            {/* Save Profile */}
            <>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Save Profile</Text>
                </TouchableOpacity>
            </>
        </SafeAreaView>
    </ScrollView>
  )
}

export default EditProfileScreen

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: CUSTOM_COLOR.White,
    },
    avatarTouch: {
        width:scale(110),
        height:110,
        borderRadius: 360,
        top: 20,
        alignSelf: 'center',
    },
    editProfilePictureTouch: {
        width:scale(150),
        height:30,
        top: 20,
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
        top: 5,
    },
    publicProfileText: {
        fontFamily: FONT_FAMILY.NexaBold,
        fontSize: scale(25),
        color: CUSTOM_COLOR.Primary,
        textAlign: 'center',
        top: 40,
    },
    privateProfileText: {
        fontFamily: FONT_FAMILY.NexaBold,
        fontSize: scale(25),
        color: CUSTOM_COLOR.Primary,
        textAlign: 'center',
        top: 0,
    },
    firstNameInput: {
        width: scale(150),
        height: 50,
        top: 70,
        left: scale(35),
    },
    lastNameInput: {
        width: scale(150),
        height: 50,
        top: -55,
        left: scale(230),
    },
    emailInput: {
        width: scale(345),
        height: 50,
        top: 0,
        left: scale(35),
    },
    numberInput: {
        width: scale(345),
        height: 50,
        top: 30,
        left: scale(35),
    },
    locationInput: {
        width: scale(345),
        height: 50,
        top: 60,
        left: scale(35),
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
        top: 125,
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