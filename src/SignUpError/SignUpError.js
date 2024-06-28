import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';

const initalValues = {
  email: '',
  newPassword: '',
  confirmPassword: '',
  firstName: '',
  lastName: '',
};

const SignUpError = ({navigation, route}) => {
  const {item} = route?.params || {};
  const [isSelected, setSelection] = useState(false);
  const [signupValues, setSignupValues] = useState(initalValues);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let valid = true;
    let errors = {};

    if (!signupValues.email.includes('@')) {
      errors.email = 'Email format is invalid';
      valid = false;
    }

    if (signupValues.newPassword.length < 8) {
      errors.newPassword = 'New password should be at least 8 characters long';
      valid = false;
    }
    if (!item) {
      errors.competition = 'You must pick a competition to register';
      valid = false;
    }

    if (signupValues.newPassword !== signupValues.confirmPassword) {
      errors.confirmPassword = 'Confirm password should match new password';
      valid = false;
    }

    [
      'email',
      'newPassword',
      'confirmPassword',
      'firstName',
      'lastName',
    ].forEach(field => {
      if (!signupValues[field]) {
        errors[field] = 'This is a required field';
        valid = false;
      }
    });

    setErrors(errors);
    return valid;
  };

  const handleChange = (name, value) => {
    setSignupValues({
      ...signupValues,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    if (validate()) {
      navigation.navigate('Home');
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assests/back.png')} />
        </TouchableOpacity>
        <Text style={styles.heading}>Create Account</Text>
      </View>
      <View style={styles.compContainer}>
        <Text style={styles.compText}>
          {item ? item.name : 'Competition to sign up*'}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUpComp')}>
          <Image source={require('../assests/below-arrow.png')} />
        </TouchableOpacity>
      </View>
      {errors?.competition && (
        <Text style={styles.errorText}>{errors?.competition}</Text>
      )}
      <View>
        <TextInput
          placeholder="Email"
          value={signupValues.email}
          onChangeText={text => handleChange('email', text)}
          style={styles.textInputStyle}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
      </View>
      <View>
        <TextInput
          placeholder="New Password"
          value={signupValues.newPassword}
          onChangeText={text => handleChange('newPassword', text)}
          secureTextEntry
          style={styles.textInputStyle}
        />
        {errors.newPassword && (
          <Text style={styles.errorText}>{errors.newPassword}</Text>
        )}
      </View>
      <View>
        <TextInput
          placeholder="Confirm Password"
          value={signupValues.confirmPassword}
          onChangeText={text => handleChange('confirmPassword', text)}
          secureTextEntry
          style={styles.textInputStyle}
        />
        {errors.confirmPassword && (
          <Text style={styles.errorText}>{errors.confirmPassword}</Text>
        )}
      </View>
      <View>
        <TextInput
          placeholder="First Name"
          value={signupValues.firstName}
          onChangeText={text => handleChange('firstName', text)}
          style={styles.textInputStyle}
        />
        {errors.firstName && (
          <Text style={styles.errorText}>{errors.firstName}</Text>
        )}
      </View>
      <View>
        <TextInput
          placeholder="Last Name"
          value={signupValues.lastName}
          onChangeText={text => handleChange('lastName', text)}
          style={styles.textInputStyle}
        />
        {errors.lastName && (
          <Text style={styles.errorText}>{errors.lastName}</Text>
        )}
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.labelText}>
        By Signing up, I agree to Cloit's{' '}
        <Text style={styles.underline}>Terms & Conditions</Text> and{' '}
        <Text style={styles.underline}>Privacy Policy</Text>.
      </Text>
      </View>

      <TouchableOpacity
        style={[styles.signup, {backgroundColor: '#253BFF'}]}
        onPress={handleSubmit}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SignUpError;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 40,
    marginTop: 10,
  },
  heading: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 25,
    color: 'black',
  },
  compText: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 16,
  },
  compContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    backgroundColor: '#F9FAFB',
    marginTop: 20,
    borderRadius: 10,
    padding: 10,
  },
  textInputStyle: {
    marginHorizontal: 25,
    backgroundColor: '#F9FAFB',
    marginTop: 20,
    borderRadius: 10,
    padding: 10,
    fontFamily: 'PlusJakartaSans-Regular',
    color: 'black',
    fontSize: 16,
  },
  signup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 50,
    marginTop: 40,
    marginBottom:10
  },
  errorText: {
    color: '#FF2323',
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontSize: 16,
    marginLeft: 25,
  },
  buttonText: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    color: 'white',
  },
  checkboxContainer:{
    flexDirection:'row',
    alignItems:'center',
    gap:10,
    marginTop:50
  },
  labelText:{
    fontFamily: 'PlusJakartaSans-Regular',
    color: 'black',
    fontSize: 16,
  },
  underline:{
    textDecorationLine:'underline'
  }

  
});
