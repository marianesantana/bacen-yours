import React from 'react';
import { View, Text } from 'react-native';

import {
  Container,
  InformationImage,
  InfoContainer,
  InformationName,
  IconContainer,
  TextDayContainer,
  TextDay
} from './styles';

import SetaPraCima from '../../assets/images/seta-cima.png'
import SetaPraBaixo from '../../assets/images/seta-baixo.png'
import Cartao from '../../assets/images/cartaozinho.png'

export default function RecentItem({ information }) {
  return (
    <Container>
      <IconContainer>
        <InformationImage source={SetaPraCima} />
        <View
          style={{
            flex: 1,
            borderLeftWidth: 1,
            borderLeftColor: '#F2298F',
          }}
        />
      </IconContainer>
      <InfoContainer>
        <InformationName>{information.name}</InformationName>
        <Text>{information.cost}</Text>
        <Text>R$ {information.quantity}</Text>
      </InfoContainer>
      <TextDayContainer>
        <TextDay>05 de Julho</TextDay>
      </TextDayContainer>
    </Container>
  );
}
