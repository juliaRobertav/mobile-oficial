import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import styles from './styles';

import background from '../../assets/Login2.png';

import axios from 'axios';
import Conta from '../conta';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [login, setLogin] = useState(0); 
  const [telaBloq, setTelaBloq] = useState(false);
  // const [tentativas, setTentativas] = useState(0);

  const logar = () => {

    console.log("entrou na função")

    axios.post('http://127.0.0.1:8000/api_login/', {
        email: email,
        senha: senha,
      })
      .then((res) => {
        console.log("fez login")
        console.log(res)
        if (res.data && res.status === 200) {
          navigation.navigate(Conta);
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
    setLogin(login + 1); 
    if (login >= 2) {
      setTelaBloq(true);
      console.log('Você atingiu o número máximo de tentativas. Bloqueando tela...');
    }
  };
  

  function cadastrar() {
    navigation.navigate('SignUp');
  }

  return (
    <View style={styles.container}>
      {telaBloq ? (
              <Text style={styles.bloq}>Você atingiu o número máximo de tentativas...</Text>
          
          ) : (
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
        )}
    </View>
  );
}
