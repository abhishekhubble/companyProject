import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

const data = [
  {
    name: 'Competition One',
    date: '22/02/2025',
    venue: 'Seoul',
  },
  {
    name: 'Competition Two',
    date: '22/02/2025',
    venue: 'Seoul',
  },
  {
    name: 'Competition Three',
    date: '22/02/2025',
    venue: 'Seoul',
  },
  {
    name: 'Competition Four',
    date: '22/02/2025',
    venue: 'Seoul',
  }
];

const SignUpComp = ({navigation}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('SignUpError', {item: item})}>
      <Text style={styles.cardTextName}>{item.name}</Text>
      <Text style={styles.cardTextDate}>{item.date}</Text>
      <Text style={styles.cardTextVenue}>{item.venue}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <Image source={require('../assests/back.png')} />
          <Text style={styles.headingText}>Asia</Text>
        </View>
        <Image source={require('../assests/search.png')} />
      </View>
      <View>
        <Text style={styles.heading}>Competition</Text>
        <Text style={styles.para}>
          An account is needed per one host. If you already have an account for
          the host of competition you want to sign up, you can login and
          register.
        </Text>
      </View>
      <ScrollView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.container}
      />
      </ScrollView>
    </View>
  );
};

export default SignUpComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  leftHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 100,
  },
  headingText: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 16,
  },
  heading: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 25,
    color: 'black',
    marginTop:10
  },
  para:{fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 16,
    color: 'black',
    marginTop:10,
    marginBottom:10

  },
  card: {
    backgroundColor: '#253BFF',
    padding: 20,
    marginVertical: 20,
    borderRadius: 15,
  },
  cardText: {
    color: '#fff',
    fontSize: 16,
  },
  cardTextName:{
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontSize: 18,
    color: 'white',
  },
  cardTextDate:{
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 16,
    color: 'white',
  },
  cardTextVenue:{
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 16,
    color: 'white',
  }
});
