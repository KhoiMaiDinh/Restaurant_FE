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
import userApi from '../../../../services/userApi';
import { MultipleSelectList, SelectList } from 'react-native-dropdown-select-list';
import DropDownPicker from 'react-native-dropdown-picker';
import { set } from 'lodash';
import * as yup from 'yup'
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { edit } from '../../../../features/auth/userSlice';




const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const editProfileValidate = yup.object({
  email: yup
    .string()
    .email('Email không hợp lệ')
    .max(30, 'Độ dài email phải nhỏ hơn 30 kí tự')
    .required('Email không được để trống'),
  
  phoneNumber: yup.string().matches(phoneRegExp, 'Số điện thoại không hợp lệ'),
  name: yup.string().required('Họ tên không được để trống'),
  address: yup.string().required('Địa chỉ không được để trống'),
});




const EditProfileScreen = props => {
    const {user} = props.route.params;
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
      {label:'Quận 1', value:'Quận 1'},
      {label:'Quận 2', value:'Quận 2'},
      {label:'Quận 3', value:'Quận 3'},
      {label:'Quận 4', value:'Quận 4'},
      {label:'Quận 5', value:'Quận 5'},
      {label:'Quận 6', value:'Quận 6'},
      {label:'Quận 7', value:'Quận 7'},
      {label:'Quận 8', value:'Quận 8'},
      {label:'Quận 9', value:'Quận 9'},
      {label:'Quận 10', value:'Quận 10'},
      {label:'Quận 11', value:'Quận 11'},
      {label:'Quận 12', value:'Quận 12'},
      {label:'Thành phố Thủ Đức', value:'Thành phố Thủ Đức'},
      {label:'Quận Bình Tân', value:'Quận Bình Tân'},
      {label:'Quận Bình Thạnh', value:'Quận Bình Thạnh'},
      {label:'Quận Gò Vấp', value:'Quận Gò Vấp'},
      {label:'Quận Phú Nhuận', value:'Quận Phú Nhuận'},
      {label:'Quận Tân Bình', value:'Quận Tân Bình'},
      {label:'Quận Tân Phú', value:'Quận Tân Phú'},
      {label:'Huyện Bình Chánh', value:'Huyện Bình Chánh'},
      {label:'Huyện Cần Giờ', value:'Huyện Cần Giờ'},
      {label:'Huyện Củ Chi', value:'Huyện Củ Chi'},
      {label:'Huyện Hóc Môn', value:'Huyện Hóc Môn'},
      {label:'Huyện Nhà Bè', value:'Huyện Nhà Bè'},
    ]);

    const fullAddress = user.address.split(", ");
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
    const [district, setDistrict] = useState(fullAddress[1]?fullAddress[1]:"Quận 1");
    
    const dispatch = useDispatch();

    const handleEditUser = async(data) => {
      try {
        const longAddress = data.address.concat(", ", district, ", TP HCM" )
        const payload = {
          avatar: {
            ref: ' ',
            url: ' ',
          },
          name: data.name,
          email: data.email,
          phoneNumber: data.phoneNumber,
          address: longAddress
        };
        const id = user._id;
        console.log(payload); 
        console.log(user)
        await userApi.editUser(id, payload)
        await dispatch(edit(payload));
      } catch (error) {
        console.log(error)
      }
    };
  

    const {
      control,
      handleSubmit,
      formState: {errors},
    } = useForm({
      mode: 'onChange',
      defaultValues: {
        email: email,
        name: name,
        phoneNumber:`${phoneNumber}`,
        address: fullAddress[0],
      },
      resolver: yupResolver(editProfileValidate),
    });
    
      const [image, setImage] = useState();
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
            <Text style={stylePanel.panelTitle}>Tải ảnh</Text>
            <Text style={stylePanel.panelSubtitle}>Chọn ảnh đại diện của bạn</Text>
          </View>
          <TouchableOpacity style={stylePanel.panelButton} onPress={takePhotoFromCamera}>
            <Text style={stylePanel.panelButtonTitle}>Chụp ảnh</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylePanel.panelButton} onPress={choosePhotoFromLibrary}>
            <Text style={stylePanel.panelButtonTitle}>Chọn từ thư viện</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={stylePanel.panelButton}
            onPress={() => this.bs.current.snapTo(1)}>
            <Text style={stylePanel.panelButtonTitle}>Thoát</Text>
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
        <SafeAreaView style={styles.container}>
        <>
        <View style={styles.view}>
            <View >
                <TouchableOpacity
                    style={styles.goBackButton}
                    onPress={() => {
                      props.navigation.goBack();
                    }}>
                    <IC_GoBack />
                    <Text style={styles.screenTittle2}>Quay lại</Text>
                </TouchableOpacity>
            </View>
        </View>
    </>
     {/* Private Profile */}
     <>
                        <Text style={styles.privateProfileText} >
                        Thông tin Cá nhân
                        </Text>
                    </>

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
                    {image ? <Image  source={{
                    uri: image,
                    }}
                    style={{height: '100%', width: '100%', borderRadius: scale(360)}}
                    /> : <Image  source={IMG_LisaAvatar}
                      style={{height: '100%', width: '100%', borderRadius: scale(360)}}
                      />}
                    
                </TouchableOpacity>
            </>
            {/* Edit Profile Picture */}
            <>
                <TouchableOpacity style={styles.editProfilePictureTouch} onPress={() => this.bs.current.snapTo(0)} >
                    <Text style={styles.editProfilePictureText}>Thay đổi ảnh đại diện</Text>
                </TouchableOpacity>
            </>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <KeyboardAvoidingView>
                   

                   
                    {/* Name */}
                    <>
                    <Controller
                    name="name"
                    control={control}
                    render={({field: {onChange, value}}) => (
                      <View style={styles.NameInput}>
                            <Text style={styles.inputText}>
                                Họ và Tên
                            </Text>
                            <TextInput 
                                onChangeText={text => onChange(text)}
                                placeholderTextColor={CUSTOM_COLOR.Grey}
                                placeholder="Họ và Tên"
                                style={styles.input}
                                keyboardType="ascii-capable"
                                value={value}
                            />
                            {errors?.name&&(
                              <Text style={styles.textFailed}>{errors.name.message}</Text>
                            )}
                        </View>
                    )}
                    />
                     
        </>
                        
                 
                   
                    {/* Email */}
                    <>
                    <Controller
                    name="email"
                    control={control}
                    render={({field: {onChange, value}}) => (
                      <View style={styles.emailInput}>
                            <Text style={styles.inputText}>
                                Email
                            </Text>
                            <TextInput 
                                onChangeText={text => onChange(text)}
                                placeholderTextColor={CUSTOM_COLOR.Grey}
                                placeholder="Email"
                                style={styles.input}
                                keyboardType="ascii-capable"
                                value={value}
                            />
                        
                                {errors?.email && (
                                    <Text style={styles.textFailed}>{errors.email.message}</Text>
                                )}
                        </View>
                    )}
                    />
                    </>

                    
                    {/* Number */}
                    <>
                    <Controller
                    name="phoneNumber"
                    control={control}
                    render={({field: {onChange, value}}) => (
                      <View style={styles.numberInput}>
                            <Text style={styles.inputText}>
                                Số điện thoại
                            </Text>
                            <TextInput 
                                onChangeText={text => onChange(text)}
                                placeholderTextColor={CUSTOM_COLOR.Grey}
                                placeholder="Số điện thoại"
                                style={styles.input}
                                keyboardType="numeric"
                                value={value}
                            />
                                {errors?.phoneNumber && (
                                    <Text style={styles.textFailed}>{errors.phoneNumber.message}</Text>
                               )}
                        </View>
                    )}
                    />
        
        
                        
                    </>
                    {/* Location */}
                    <>
                    <Controller 
                    name="address"
                    control={control}
                    render={({field: {onChange, value}}) => (
                  <View style={styles.locationInput}>
                      <Text style={styles.inputText}>
                          Địa chỉ
                      </Text>
                      <TextInput 
                          onChangeText={text => onChange(text)}
                          placeholderTextColor={CUSTOM_COLOR.Grey}
                          placeholder="Địa chỉ"
                          style={styles.input}
                          keyboardType="ascii-capable"
                          value={value}
                      />
                      {errors?.address && (
                        <Text style={styles.textFailed}>{errors.address.message}</Text>
                      )}
                  </View>
                 
                    )}
                    />  
              </>
                <View style={styles.locationInputState}>
                      <Text style={styles.inputText}>
                          Quận/Huyện
                      </Text>
                      <DropDownPicker
                        open={open}
                        value={district}
                        items={items}
                        setOpen={setOpen}
                        setValue={setDistrict}
                        setItems={setItems}
                        style={{
                          borderColor: CUSTOM_COLOR.Primary,
                          marginTop: scale(10),
                        }}
                        textStyle={{
                          fontFamily: FONT_FAMILY.NexaRegular,
                          fontSize: scale(16),
                          color: CUSTOM_COLOR.Black,
                        }}
                        placeholderStyle={{
                          fontFamily: FONT_FAMILY.NexaRegular,
                          fontSize: scale(16),
                          textAlign: 'left',
                          alignContent: 'flex-start',
                          color: CUSTOM_COLOR.Grey,
                        }}
                      />
                  </View>
               
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
            {/* Save Profile */}
            <>
                <TouchableOpacity style={styles.button} onPress={handleSubmit(handleEditUser)}>
                    <Text style={styles.buttonText}>Lưu</Text>
                </TouchableOpacity>
            </>
            </Animated.View>
        </SafeAreaView>
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
    paddingVertical: scale(5),
  },
  panelSubtitle: {
    fontSize: scale(14),
    color: CUSTOM_COLOR.Primary,
    //height: scale(30),
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
        flex: 1,
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
        width: scale(345),
        height: 'auto',
        paddingLeft: scale(35),
        marginBottom: scale(13),
    },
    emailInput: {
        width: scale(345),
        height: 'auto',
        paddingLeft: scale(35),
        marginBottom: scale(13),
    },
    numberInput: {
        width: scale(345),
        height: 'auto',
        paddingLeft: scale(35),
        marginBottom: scale(13),
    },
    locationInput: {
        width: scale(345),
        height: 'auto',
        paddingLeft: scale(35),
        marginBottom: scale(40),
    },
    locationInputState: {
      width: scale(345),
      height: 'auto',
      paddingLeft: scale(35),
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
        marginTop: scale(50),
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
      view:{
        marginTop: scale(15),
        marginLeft: scale(10),
        justifyContent: 'space-between',
        width: '70%',
        height: scale(32),
        flexDirection: 'row',
        alignItems: 'center',
    },
      goBackButton: {
        alignSelf: 'center',
        flexDirection: 'row',
        height: scale(32),
        justifyContent: 'center',
    },
    screenTittle2: {
      color: CUSTOM_COLOR.Black,
      fontSize: scale(15),
      fontFamily: FONT_FAMILY.NexaRegular,
      alignSelf: 'center',
  },
})