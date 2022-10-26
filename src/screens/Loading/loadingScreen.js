import React, {useEffect} from "react";
import { ImageBackground, SafeAreaView, View, Image, Text, StyleSheet, ActivityIndicator } from "react-native";
import { CUSTOM_COLOR } from "../../constants/color";
import scale from "../../utils/responsive";
import { IMG_LOADING, IMG_LOGO } from "../Loading/images";
import { useNavigation } from "@react-navigation/native";


const LoadingScreen = () => {
    function navi() {
        navigation.navigate("OnboardingScreen");
    }
    const navigation = useNavigation();
    const myTimeout = setTimeout(navi, 8000);
    useEffect(() => {
        myTimeout;
        
      }, []);
    
    return (
        < SafeAreaView style={styles.container}>
            <ImageBackground source={IMG_LOADING} resizeMode={'cover'} style={styles.backGround}>
                <View style={styles.circle}>
                    <Image source={IMG_LOGO} resizeMode={'center'} style={styles.logo}> 
                    </Image>
                    <View style={styles.ellipse}>
                        <ActivityIndicator
                            size='large'
                            color={CUSTOM_COLOR.Primary}
                            style={styles.vector}
                        />
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView >
    )
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Primary,
  },
  circle: {
    width: scale(262),
    height: scale(262),
    borderRadius: scale(262 / 2),
    backgroundColor: CUSTOM_COLOR.White,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  backGround: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  ellipse: {
    backgroundColor: 'transparent',
    width: scale(27),
    height: scale(27),
    borderRadius: scale(27) / 2,
    borderWidth: scale(1.5),
    borderColor: CUSTOM_COLOR.Primary,
    position: 'absolute',
    bottom: scale(40),
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 2,
    marginTop: 7,
  },
  vector: {
    width: scale(27),
    height: scale(27),
    //marginTop: 7,
    borderWidth: scale(5),
    borderColor: CUSTOM_COLOR.White,
    alignSelf: 'center',
  },
});

