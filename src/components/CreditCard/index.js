import React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

import FlipCard from 'react-native-flip-card';

import {
  Container,
  HeaderContainer,
  ValueContainer,
  FooterFlagContainer,
  ImageFlagCard,
  BalanceText,
  ContactLessIcon,
  BalanceValue,
  BalanceIconContainer,
  ContainerFlip,
  ContainerFront,
} from './styles';

export default function CreditCard() {

  return (
    <ContainerFlip>
      <FlipCard>
        {/* Face Side */}
        <ContainerFront>
          <HeaderContainer>
            <BalanceIconContainer>
              <ContactLessIcon
                source={{
                  uri:
                    'https://www.expertsure.com/uk/merchant-accounts/wp-content/uploads/2015/07/heading-contactless.png',
                }}
              />
              <BalanceText>Seu saldo</BalanceText>
              <Icon
                name="arrow-drop-up"
                size={30}
                style={{marginTop: 6, marginRight: 10}}
                color="#FFF"
              />
            </BalanceIconContainer>
            <Feather
              name="eye"
              size={20}
              style={{marginTop: 10, paddingRight: 10}}
              color="#FFF"
            />
          </HeaderContainer>
          <ValueContainer>
            <BalanceValue>R$ 100,00</BalanceValue>
          </ValueContainer>
          <FooterFlagContainer>
            <ImageFlagCard
              source={{
                uri:
                  'https://cdn.freebiesupply.com/logos/large/2x/visa-logo-black-and-white.png',
              }}
            />
          </FooterFlagContainer>
        </ContainerFront>
        {/* Back Side */}
        <ContainerFront>
          <Text style={{margin: 10}}>The Back</Text>
        </ContainerFront>
      </FlipCard>
    </ContainerFlip>
  );
}