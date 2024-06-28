import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(true);

  const toggleModalVisibility = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModalVisibility}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Image source={require('../assests/blue-star.png')} />
              <TouchableOpacity onPress={toggleModalVisibility}>
              <Image source={require('../assests/close.png')} />
              </TouchableOpacity>
            </View>
            <View style={{width: '100%', alignItems: 'flex-start'}}>
              <Text style={styles.heading}>Welcome to Soo</Text>
            </View>
            <View style={{width: '100%', alignItems: 'flex-start'}}>
              <Text style={styles.subHeading}>Great to have you with us!</Text>
            </View>
            <TouchableOpacity
              style={[styles.signup, {backgroundColor: '#253BFF'}]}
              onPress={toggleModalVisibility}
              >
              <Text style={styles.buttonText}>Got it</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '90%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  closeButton: {
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  heading: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 25,
    color: 'black',
    marginTop: 70,
    textAlign: 'left',
  },
  subHeading: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontSize: 20,
    color: 'black',
    // marginTop: 70,
    textAlign: 'left',
  },
  signup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 50,
    marginTop:80

  },
  buttonText:{
    fontFamily: 'PlusJakartaSans-SemiBold',
    color:'white'
  }
});
