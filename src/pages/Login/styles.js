import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput`
  width: 290px;
  margin-top: 15px;
  flex-direction: row;
  background-color: #fff;
  height: 40px;
  padding: 0 20px;
  border-radius: 5px;
`;

export const Button = styled.TouchableOpacity`
  width: 290px;
  height: 40px;
  margin-top: 15px;
  background-color: #04D361;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
