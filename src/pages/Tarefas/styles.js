import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 36px;
  color: #3A3A3A;
`;

export const Tasks = styled.View`
  flex: 1;
  margin-top: 15px;
`;

export const Task = styled.View`
  background-color: #fff;
  margin-bottom: 10px;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 5px;
`;

export const TaskActions = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TaskActionsTwoIcons = styled.View`
  flex-direction: row;
`;

export const ErrorMessage = styled.Text`
  margin-bottom: 20px;
  font-size: 14px;
  color: #c53030;
`;

export const TaskText = styled.Text`
  font-size: 22px;
  color: #3A3A3A;
`;

export const FormAddNewTask = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;

export const Input = styled.TextInput`
  width: 250px;
  margin-top: 15px;
  flex-direction: row;
  background-color: #fff;
  height: 40px;
  padding: 0 20px;
  border-radius: 5px;
`;

export const Button = styled.TouchableOpacity`
  width: 100px;
  height: 40px;
  margin-top: 15px;
  background-color: #04D361;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;