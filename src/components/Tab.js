import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import Poupar from '../assets/images/poupar.png'

const Tab = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.containerButton} onPress={onPress}>
      <Image source={Poupar} name={'user'} size={30} />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerButton: {
    flex: 1,
    elevation: 3,
    justifyContent: 'flex-end',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    paddingBottom: 5,
    backgroundColor: '#FFF',
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 10,
  },
});

export default Tab;
