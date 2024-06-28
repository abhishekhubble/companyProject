import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const WelcomeScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assests/main-background.png')}
      style={styles.mainContainer}>
      <View style={styles.imageTextContainer}>
        <Text style={styles.imageText}>So</Text>
        <Text style={styles.imageText}>and Carrots</Text>
      </View>
      <View
        style={[styles.signup, {backgroundColor: '#253BFF', marginTop: 400}]}>
        <View style={styles.signupLeft}>
          <Image source={require('../assests/log-in.png')} />
          <Text style={styles.buttonText}>Sign up for free</Text>
        </View>
        <TouchableOpacity onPress={()=> navigation.navigate('SignUpError')}>
          <Image source={require('../assests/next.png')} />
        </TouchableOpacity>
      </View>
      <View
        style={[styles.signup, {backgroundColor: '#1D2939', marginTop: 10}]}>
        <View style={styles.signupLeft}>
          <Image source={require('../assests/mail.png')} />
          <Text style={styles.buttonText}>Continue with Email</Text>
        </View>
        <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
          <Image source={require('../assests/next.png')} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  imageText: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'PlusJakartaSans-Bold',
  },
  imageTextContainer: {
    marginTop: 50,
    marginLeft: 20,
  },
  signup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 50,
  },
  signupLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginLeft: 15,
  },
  buttonText:{
    fontFamily: 'PlusJakartaSans-SemiBold',
    color:'white',
    fontSize:16
  }
});
