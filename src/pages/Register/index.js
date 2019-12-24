import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../../components/CustomButton';
import colors from '../../config/colors';

const Register = ({ navigation }) => {
  const [counter, setCounter] = useState(0);
  const [user, setUser] = useState({});

  handleCounter = () => {
    return counter < 4 ? setCounter(counter + 1) : null;
  };

  handleQuestions = counter => {
    switch (counter) {
      case 0: {
        return (
          <View style={styles.questionWrapper}>
            <Text style={styles.question}>Qual o seu nome?</Text>
            <TextInput
              style={styles.questionInput}
              onChangeText={text => setUser({ ...user, name: text })}
            />
          </View>
        );
      }
      case 1: {
        return (
          <View style={styles.questionWrapper}>
            <Text style={styles.question}>Oi, {user.name}</Text>
            <Text style={styles.question}>Qual o seu CPF?</Text>
            <TextInput
              style={styles.questionInput}
              onChangeText={text => setUser({ ...user, cpf: text })}
            />
          </View>
        );
      }
      case 2: {
        return (
          <View style={styles.questionWrapper}>
            <Text style={styles.question}>Você pode me passar o seu e-mail?</Text>
            <TextInput
              style={styles.questionInput}
              onChangeText={text => setUser({ ...user, email: text })}
            />
          </View>
        );
      }
      case 3: {
        return (
          <View style={styles.questionWrapper}>
            <Text style={styles.question}>E qual é o número do seu cartão?</Text>
            <TextInput
              style={styles.questionInput}
              onChangeText={text => setUser({ ...user, cardNumber: text })}
            />
          </View>
        );
      }
      case 4: {
        return (
          <View style={styles.questionWrapper}>
            <Text style={styles.question}>Ok, agora é hora de criar uma senha para sua conta:</Text>
            <TextInput
              style={styles.questionInput}
              onChangeText={text => setUser({ ...user, password: text })}
            />
          </View>
        );
      }
      default: {
        return <Text>Ocorreu um erro</Text>;
      }
    }
  };

    return (
      <LinearGradient style={{ flex: 1 }} colors={['#F1288F', '#4B1B89']}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={{ color: 'white', fontSize: 20, padding: 20 }}>{`${counter + 1} de 5`}</Text>
          </View>
          <View style={{ flex: 1 }}>{handleQuestions(counter)}</View>
          <View style={{ alignItems: 'center', marginBottom: 20 }}>
            <CustomButton
              onPress={() => handleCounter()}
              text="Próximo"
              backgroundColor={colors.primary}
              textColor="white"
            />
          </View>
        </SafeAreaView>
      </LinearGradient>
    );
    
};

const styles = StyleSheet.create({
  questionWrapper: {
    padding: 20,
    marginTop: 40,
  },
  question: {
    color: 'white',
    fontSize: 26,
    fontWeight: '400',
  },
  questionInput: {
    marginTop: 90,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    color: 'white',
    fontSize: 20,
  },
});
export default Register;