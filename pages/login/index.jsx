import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, ImageBackground} from 'react-native'
import styles from './styles'

import background from '../../assets/Login2.png'

import axios from 'axios';
import Conta from '../conta';

export default function Login({ navigation }) {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  // consumindo api para logar
  const logar = () => {
    // BUSCAR USUARIO
    axios.get('http://127.0.0.1:8000/api_login/', 
    {
      email: email,
      senha: senha
    },
    {}
    ).then((res)=>{
      console.log(res)
      // ir para pagina de Conta se logar
      navigation.navigate(Conta);
    }).catch((erro)=>{
      console.log(erro)
    })
  }

  function cadastrar(){
    navigation.navigate('SignUp')
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.container}
        source={background}
      >
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
