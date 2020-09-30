import React, {useState} from 'react';
import { View, Text, Image } from 'react-native';

import logoImg from '../../assets/logo.png';

import { Container, Input, Button, ButtonText } from './styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Image source={logoImg} />

      <Input
        onChangeText={text => setEmail(text)}
        value={email}
        placeholder="E-mail"
      />

      <Input
        onChangeText={text => setPassword(text)}
        value={password}
        placeholder="Senha"
      />

      <Button onPress={() => {}}>
        <ButtonText>Acessar</ButtonText>
      </Button>
    </Container>
  );
}

export default Login;