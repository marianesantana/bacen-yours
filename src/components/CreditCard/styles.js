import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

export const Container = styled(LinearGradient).attrs({
  colors: ['#BF2B70', '#310c62']
})`
  height: 200px;
  flex-direction: column;
  margin: 10px;
  border-radius: 20px;
  background-color: #BF2B70;
`;

export const ContainerFlip = styled.View`
  height: 200px;
  flex-direction: column;
  margin: 10px;
`;

export const ContainerFront = styled(LinearGradient).attrs({
  colors: ['#BF2B70', '#310c62']
})`
  flex: 1;
  border-radius: 10px;
`;

export const HeaderContainer = styled.View`
  flex: 1;
  flex-direction: row;
  padding-left: 10px;
  justify-content: space-between;
`;

export const BalanceIconContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const ValueContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterFlagContainer = styled.View`
  flex: 1;
  flex-direction: row;
  
`;

export const BalanceValue = styled.Text`
  color: #FFF;
  font-size: 24px;
  font-family: 'sans-serif-light';
`;

export const BalanceText = styled.Text`
  text-transform: uppercase;
  color: #FFF;
  padding-top: 12px;
  font-size: 12px;
  font-family: 'sans-serif';
`;

export const ContactLessIcon = styled.Image`
  margin-top: 10px;
  margin-right: 10px;
  height: 20px;
  width: 30px;
`;

export const ImageFlagCard = styled.Image`
  height: 70px;
  width: 70px;
`;