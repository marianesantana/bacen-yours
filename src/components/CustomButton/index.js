import React from 'react';
import { ActivityIndicator, TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const CustomButton = ({ backgroundColor, textColor, text, isLoading, spinnerColor, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ ...styles.button, backgroundColor: backgroundColor || 'white' }}>
        {isLoading ? (
          <ActivityIndicator color={spinnerColor || 'white'} />
        ) : (
          <Text style={{ ...styles.text, color: textColor || 'white' }}>{text}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 3,
      width: 3,
    },
    shadowRadius: 3,
    elevation: 6,
  },
  text: {
    fontSize: 18,
  },
});

CustomButton.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  spinnerColor: PropTypes.string,
};

export default CustomButton;