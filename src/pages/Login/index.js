import React from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../../components/CustomButton';
import colors from '../../config/colors';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 'slide1',
    title: 'Uma conta digital \n para familia',
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
    <View style={styles.sliderWrapper}>
      <Image style={{ alignSelf: 'center' }} source={require('../../assets/images/yours.png')} />
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{item.text}</Text>
      </View>
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

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 20,
    marginTop: 20,
    letterSpacing: 2,
  },
  title: {
    color: 'white',
    fontSize: 26,
    textAlign: 'center',
    marginVertical: 30,
  },
  textWrapper: {
    borderLeftWidth: 1,
    borderLeftColor: '#f0f0f0',
    paddingLeft: 10,
    justifyContent: 'center',
    paddingBottom: 20,
    marginHorizontal: 40,
  },
  sliderWrapper: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    paddingTop: 50,
  },
});
export default Login;