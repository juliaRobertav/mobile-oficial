import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import styles from './styles';

import background from '../../assets/Login2.png';

import axios from 'axios';
import Conta from '../conta';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tentativas, setTentativas] = useState(0);

  const logar = () => {
    axios
      .post('http://127.0.0.1:8000/api_login/', {
        email: email,
        senha: senha,
      })
      .then((res) => {
        if (res.data && res.data.sucesso === true) {
          navigation.navigate('Conta');
        } else {
          handleLoginError();
        }
      })
      .catch((erro) => {
        console.error('Erro ao fazer login:', erro);
        if (erro.response) {
          console.error('Detalhes da API:', erro.response.data);
        }
        handleLoginError();
      });
  };

  const handleLoginError = () => {
    // setTentativas(tentativas + 1);
    if (tentativas >= 3) {
      // Se exceder 3 tentativas, bloqueia o login
      Alert.alert('Erro', 'Você excedeu o número máximo de tentativas de login. Tente novamente mais tarde.');
    } else {
      Alert.alert('Erro', 'Credenciais inválidas. Tente novamente.');
    }
  };

  function cadastrar() {
    navigation.navigate('SignUp');
  }

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.container} source={background}>
        <View style={styles.minicontainer}>
          <Text style={styles.title}>Login</Text>
          <TextInput
            placeholder="email"
            onChangeText={setEmail}
            value={email}
            style={styles.email}
          />
          <TextInput
            placeholder="password"
            onChangeText={setSenha}
            value={senha}
            style={styles.caixa}
            secureTextEntry={true}
          />
          <View style={styles.btns}>
            <TouchableOpacity style={styles.btnIn} onPress={logar}>
              <Text style={{ fontSize: 25, color: '#fff' }}>SignIn</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnUp} onPress={cadastrar}>
              <Text style={{ fontSize: 25, color: '#fff' }}>SignUp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
