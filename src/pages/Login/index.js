import React from 'react';
import { View, Text, Image } from 'react-native';

import logoImg from '../../assets/logo.png';

import { Container } from './styles';

const Login = () => {
  return (
    <Container>
      <Image source={logoImg} />
    </Container>
  );
}

export default Login;