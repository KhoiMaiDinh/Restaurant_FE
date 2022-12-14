import { StyleSheet, Image, Text, View, SafeAreaView, TouchableOpacity, TextInput, TouchableWithoutFeedback, Dimensions, Keyboard, ScrollView, KeyboardAvoidingView, ImageBackground } from 'react-native'
import React, {useState} from 'react'
import {CUSTOM_COLOR} from '../../../../constants/color';
import {IC_GoBack} from '../../../../assets/icons/index';
import scale from '../../../../utils/responsive';
import FONT_FAMILY from '../../../../constants/fonts';
import { IMG_LisaAvatar } from '../../../../assets/images';
import ImagePicker from 'react-native-image-crop-picker';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';


const EditProfileScreen = () => {
    const [email, setEmail] = useState('');
    const [checkValidEmail, setCheckValidEmail] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [checkValidNumber, setCheckValidNumber] = useState(false);

    const handleCheckEmail = text => {
        let re = /\S+@\S+\.\S+/;
        let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    
        setEmail(text);
        if (re.test(text) || regex.test(text)) {
          setCheckValidEmail(false);
        } else {
          setCheckValidEmail(true);
        }
      };
    const handleCheckNumber = text => {
        let phoneNumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    
        setPhoneNumber(text);
        if (phoneNumber.test(text)) {
          setCheckValidNumber(false);
        } else {
          setCheckValidNumber(true);
        }
      };
      const [image, setImage] = useState('https://drive.google.com/file/d/1Snr93Bao8zv0tBTNONR7T2NpRs_gTtkz/view?usp=share_link');
      const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
          compressImageMaxWidth: scale(300),
          compressImageMaxHeight: scale(300),
          cropping: true,
          compressImageQuality: 0.7
        }).then(image => {
          console.log(image);
          setImage(image.path);
          this.bs.current.snapTo(1);
        });
      }
      const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
          width: scale(300),
          height: scale(300),
          cropping: true,
          compressImageQuality: 0.7
        }).then(image => {
          console.log(image);
          setImage(image.path);
          this.bs.current.snapTo(1);
        });
      }
      renderInner = () => (
        <View style={stylePanel.panel}>
          <View style={{alignItems: 'center'}}>
            <Text style={stylePanel.panelTitle}>Upload Photo</Text>
            <Text style={stylePanel.panelSubtitle}>Choose Your Profile Picture</Text>
          </View>
          <TouchableOpacity style={stylePanel.panelButton} onPress={takePhotoFromCamera}>
            <Text style={stylePanel.panelButtonTitle}>Take Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylePanel.panelButton} onPress={choosePhotoFromLibrary}>
            <Text style={stylePanel.panelButtonTitle}>Choose From Library</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={stylePanel.panelButton}
            onPress={() => this.bs.current.snapTo(1)}>
            <Text style={stylePanel.panelButtonTitle}>Cancel</Text>
          </TouchableOpacity>
        </View>
      );
      renderHeader = () => (
        <View style={stylePanel.header}>
          <View style={stylePanel.panelHeader}>
            <View style={stylePanel.panelHandle} />
          </View>
        </View>
      );
    
      bs = React.createRef();
      fall = new Animated.Value(1);

  return (
    <ScrollView>
        <SafeAreaView style={styles.container}>
        <BottomSheet
        ref={this.bs}
        snapPoints={[330, 0]}
        renderContent={this.renderInner}
        renderHeader={this.renderHeader}
        initialSnap={1}
        callbackNode={this.fall}
        enabledGestureInteraction={true}
      />
      <Animated.View style={{margin: 20,
        opacity: Animated.add(0.1, Animated.multiply(this.fall, 1.0)),
    }}>
            {/* Avatar */}
            <>
                <TouchableOpacity style={styles.avatarTouch} >
                    <Image  source={{
                    uri: image,
                    }}
                    style={{height: '100%', width: '100%', borderRadius: scale(360)}}
                    />
                </TouchableOpacity>
            </>
            {/* Edit Profile Picture */}
            <>
                <TouchableOpacity style={styles.editProfilePictureTouch} onPress={() => this.bs.current.snapTo(0)} >
                    <Text style={styles.editProfilePictureText}>Chọn ảnh đại diện</Text>
                </TouchableOpacity>
            </>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss() && TextInput.clearFocus()}>
                <KeyboardAvoidingView>
                    {/* Public Profile */}
                    <>
                        <Text style={styles.publicProfileText} >
                            Tài khoản
                        </Text>
                    </>
                    {/* Name View */}
                    <View style={styles.nameView}>

                   
                    {/* First Name */}
                    <>
                        <View style={styles.NameInput}>
                            <Text style={styles.inputText}>
                                Họ 
                            </Text>
                            <TextInput 
                                placeholderTextColor={CUSTOM_COLOR.Grey}
                                placeholder="Họ"
                                style={styles.input}
                                keyboardType="ascii-capable"
                            />
                        </View>
                    </>
                    <>
                    <View style={{borderColor: CUSTOM_COLOR.Primary, borderWidth: 1,justifyContent: 'center',marginLeft:scale(6),  width: scale(1)}}/>
                    </>
                    {/* Last Name */}
                    <>
                        <View style={styles.NameInput}>
                            <Text style={styles.inputText}>
                                Tên
                            </Text>
                            <TextInput 
                                placeholderTextColor={CUSTOM_COLOR.Grey}
                                placeholder="Tên"
                                style={styles.input}
                                keyboardType="ascii-capable"
                            />
                        </View>
                    </>
                     </View>
                    {/* Private Profile */}
                    <>
                        <Text style={styles.privateProfileText} >
                        Hồ sơ Cá nhân
                        </Text>
                    </>
                    {/* Email */}
                    <>
                        <View style={styles.emailInput}>
                            <Text style={styles.inputText}>
                                Email
                            </Text>
                            <TextInput 
                                onChangeText={text => handleCheckEmail(text)}
                                placeholderTextColor={CUSTOM_COLOR.Grey}
                                placeholder="Email"
                                style={styles.input}
                                keyboardType="ascii-capable"
                            />
                        </View>
                            <View style={{marginTop: scale(30)}}>
                                {checkValidEmail ? (
                                    <Text style={styles.textFailed}>Sai định dạng email. VD:"user@gmail.com"</Text>
                                ) : (
                                    <Text style={styles.textFailed}> </Text>
                                )}
                            </View>
                    </>
                    {/* Number */}
                    <>
                        <View style={styles.numberInput}>
                            <Text style={styles.inputText}>
                                Số điện thoại
                            </Text>
                            <TextInput 
                                onChangeText={text => handleCheckNumber(text)}
                                placeholderTextColor={CUSTOM_COLOR.Grey}
                                placeholder="Số điện thoại"
                                style={styles.input}
                                keyboardType="numeric"
                            />
                        </View>
                        <View style={{marginTop: scale(40)}}>
                                {checkValidNumber ? (
                                    <Text style={styles.textFailed}>Sai định dạng số điện thoại VD: 033 388 3127</Text>
                                ) : (
                                    <Text style={styles.textFailed}> </Text>
                                )}
                        </View>
                    </>
                    {/* Location */}
                    <>
                        <View style={styles.locationInput}>
                            <Text style={styles.inputText}>
                                Địa chỉ
                            </Text>
                            <TextInput 
                                placeholderTextColor={CUSTOM_COLOR.Grey}
                                placeholder="Địa chỉ"
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
                    <Text style={styles.buttonText}>Lưu</Text>
                </TouchableOpacity>
            </>
            </Animated.View>
        </SafeAreaView>
    </ScrollView>
  )
}

export default EditProfileScreen
const stylePanel = StyleSheet.create({panel: {
    padding: scale(20),
    backgroundColor: CUSTOM_COLOR.White,
    paddingTop: scale(20),
},
commandButton: {
    padding: scale(15),
    borderRadius: scale(10),
    backgroundColor: CUSTOM_COLOR.White,
    alignItems: 'center',
    marginTop: scale(10),
  },
  header: {
    backgroundColor: CUSTOM_COLOR.Primary,
    shadowColor: CUSTOM_COLOR.White,
    shadowOffset: {width: -1, height: -3},
    shadowRadius: scale(2),
    shadowOpacity: 0.4,
    paddingTop: scale(20),
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: scale(40),
    height: scale(8),
    borderRadius: scale(4),
    backgroundColor: CUSTOM_COLOR.White,
    marginBottom: scale(10),
  },
  panelTitle: {
    fontSize: 27,
    color: CUSTOM_COLOR.Primary,
    height: scale(35),
  },
  panelSubtitle: {
    fontSize: scale(14),
    color: CUSTOM_COLOR.Primary,
    height: scale(30),
    marginBottom: scale(10),
  },
  panelButton: {
    padding: scale(13),
    borderRadius: scale(10),
    backgroundColor: CUSTOM_COLOR.Primary,
    alignItems: 'center',
    marginVertical: scale(7),
  },
  panelButtonTitle: {
    fontSize: 17,
    color: CUSTOM_COLOR.White,
  },
  action: {
    flexDirection: 'row',
    marginTop: scale(10),
    marginBottom: scale(10),
    borderBottomWidth: scale(1),
    borderBottomColor: '#f2f2f2',
    paddingBottom: scale(5),
  },
  actionError: {
    flexDirection: 'row',
    marginTop: scale(10),
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: scale(5),
  },
});
const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: CUSTOM_COLOR.White,
    },
    avatarTouch: {
        width:scale(110),
        height:scale(110),
        borderRadius: 360,
        marginTop: scale(5),
        alignSelf: 'center',
    },
    editProfilePictureTouch: {
        width:scale(150),
        height:scale(30),
        paddingTop: scale(2),
        alignSelf: 'center',
    },
    avatar: {
        width:scale(102),
        height:scale(100),
    },
    nameView: {
        flexDirection: 'row',
        marginTop: scale(20),
        height: scale(80),
        width: '100%',
        justifyContent: 'space-between',
    },
    editProfilePictureText: {
        fontFamily: FONT_FAMILY.NexaLight,
        fontSize: scale(14),
        textAlign: 'center',
        color: CUSTOM_COLOR.Primary,
        marginTop: scale(5),
    },
    publicProfileText: {
        fontFamily: FONT_FAMILY.NexaBold,
        fontSize: scale(25),
        color: CUSTOM_COLOR.Primary,
        textAlign: 'center',
        marginTop: scale(15),
    },
    privateProfileText: {
        fontFamily: FONT_FAMILY.NexaBold,
        fontSize: scale(25),
        color: CUSTOM_COLOR.Primary,
        textAlign: 'center',
    },
    NameInput: {
        width: scale(160),
        height: scale(50),
        //paddingLeft: scale(10),   
    },
    emailInput: {
        width: scale(345),
        height: scale(50),
        top: scale(0),
        left: scale(35),
    },
    numberInput: {
        width: scale(345),
        height: scale(50),
        top: scale(8),
        left: scale(35),
    },
    locationInput: {
        width: scale(345),
        height: scale(50),
        top: scale(8),
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
        height: scale(50),
        color: CUSTOM_COLOR.Black,
        borderBottomWidth: 0.5,
        borderColor: CUSTOM_COLOR.Primary,
    },
    button: {
        alignSelf: 'center',
        marginTop: scale(40),
        width: scale(200),
        height: scale(40),
        backgroundColor: CUSTOM_COLOR.Primary,
        borderRadius: scale(20),
        
    },
    buttonText: {
        fontFamily: FONT_FAMILY.NexaBold,
        fontSize: scale(17),
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: scale(7),
        color: CUSTOM_COLOR.White,
    },
    textFailed: {
        marginLeft: scale(40), 
        fontFamily: FONT_FAMILY.NexaRegular,
        fontSize: scale(12),
        color: CUSTOM_COLOR.Red,
      },
})