import React from 'react';
import { Container, Top, Title } from './styles'
import Icon from 'react-native-vector-icons'

// import { Container } from './styles';

export default function Header() {
  return (
    <Container>
        <Top>
            <Title> Oi Dimas </Title>
        </Top>
        <Icon name='keyboard-arrow-down' size= {20} color='#d15'/>
    </Container>
  );
}
