import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../../components/CustomButton';
import colors from '../../config/colors';
import AppIntroSlider from 'react-native-app-intro-slider';


const slides = [
    {
      key: 'slide1',
      title: 'Poupe para conquistar os seus sonhos!',
      text: 'Com tudo que os jovens \n precisam para aprender \n a cuidar do seu dinheiro.',
    },
    {
      key: 'slide2',
      title: 'Educação financeira \n na palma da sua mão.',
      text: 'E tudo que os pais \n precisam pra acompanhar esse aprendizado.',
    },
  ];
  
  renderSlider = ({ item }) => {
    return (
        <View style={{ flex: 1 }}>
        <AppIntroSlider renderItem={renderSlider} slides={slides} nextLabel="" doneLabel="" />
      </View>
    );
  };
  
  const Login = ({ navigation }) => {
    return (
      <LinearGradient style={{ flex: 1 }} colors={['#F1288F', '#4B1B89']}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <AppIntroSlider renderItem={renderSlider} slides={slides} nextLabel="" doneLabel="" />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: -45 }}>
            <CustomButton
              onPress={() => navigation.navigate('REGISTER')}
              text="Login"
              textColor={colors.primary}
            />
            <CustomButton
              onPress={() => navigation.navigate('REGISTER')}
              text="Cadastro"
              textColor="white"
              backgroundColor={colors.primary}
            />
          </View>
        </SafeAreaView>
      </LinearGradient>
    );
  };
  export default Login;