import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 5px;
`;

export const InformationImage = styled.Image`
  height: 21.26px;
  width: 21.26px;
  align-self: center;
`;

export const InfoContainer = styled.View`
  flex-direction: column;
  margin-top: 5px;
  margin-left: 10px;
`;

export const InformationName = styled.Text`
  font-weight: bold;
  font-size: 14px;
`;

export const IconContainer = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const TextDayContainer = styled.View`
  flex: 1;
  align-self: flex-start;
  align-items: flex-end;
`;

export const TextDay = styled.Text`
  margin-top: 7px;
  margin-left: 10px;
  font-size: 11px;
`;