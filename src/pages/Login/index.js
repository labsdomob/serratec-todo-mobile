import React, {useState} from 'react';
import { View, Text, Image } from 'react-native';
import { useAuth } from '../../hooks/auth';

import logoImg from '../../assets/logo.png';

import { Container, Input, Button, ButtonText } from './styles';

const Login = () => {
  const { signIn } = useAuth();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit() {
    if(!email) return;
    if(!password) return;
    
    setLoading(true);

    console.log("submit", email, password);

    try {
      await signIn({
        email: email,
        password: password,
      });

      // history.push('/dashboard');  

    } catch (error) {
      console.log(error);
      console.log("Usuário ou senha não confere.");

    } finally {
      setLoading(false);
    }
  }

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

      <Button onPress={() => handleSubmit()}>
        <ButtonText>{loading ? 'Carregando...' : 'Acessar'}</ButtonText>
      </Button>
    </Container>
  );
}

export default Login;