import styled from 'styled-components/native'
import { FlatList } from 'react-native'

export const Container = styled.View`
  display: flex;
  height: 250px;
  margin-right: 10px;
  margin-left: 10px;
  elevation: 3px;
  shadow-color: #000;
  shadow-opacity: 0.22px;
  shadow-radius: 2.22px;
  background-color: #ffffff;
  border-radius: 20px;
`;

export const RecentInformationList = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;
