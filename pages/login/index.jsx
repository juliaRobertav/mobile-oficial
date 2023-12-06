import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, ImageBackground} from 'react-native'
import styles from './styles'
// import { signInWithEmailAndPassword } from "firebase/auth";
// import {auth} from '../firebaseConfig'

import background from '../../assets/Login2.png'

import axios from 'axios';

export default function Login({ navigation }) {

  const [userId, setUserId] = useState(0)
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')


  // adicionar essa função ao botão de login
  const buscar = ()=>{ // BUSCAR USUARIO
    axios.post('http://127.0.0.1:8000/api_login/', 
    {
      email: email,
      senha: senha

    },
    {}
    ).then((res)=>{
      console.log(res)
    }).catch((erro)=>{
      console.log(erro)
    })
  }

  //   const [email, setEmail] = useState()
  //   const [password, setPassword] = useState()
  //   const [login, setLogin] = useState(0); 
  //   const [telaBloq, setTelaBloq] = useState(false);
    
  //   const logar = () => {
  //   if (telaBloq) {
  //     return; // Não faça nada se a tela estiver bloqueada
  //   }

  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       const user = userCredential.user;
  //       navigation.navigate('Home', { usuario: user.email });
  //     })
  //     .catch((error) => {
  //       setLogin(login + 1);

  //       console.log('Lagartixa...');
  //       const errorCode = error.code;
  //       const errorMessage = error.message;

  //       if (login >= 2) {
  //         // Bloqueie a tela definindo isScreenLocked como true
  //         setTelaBloq(true);
  //         console.log('Você atingiu o número máximo de tentativas. Bloqueando tela...');
  //       }
  //     });
  // }

    function cadastrar(){
        navigation.navigate('SignUp')
    }

    return (
        <View style={styles.container}>
          <ImageBackground
            style={styles.container}
            source={background}
          >
          {/* {telaBloq ? (
              <Text style={styles.title}>Você atingiu o número máximo de tentativas...</Text>
          
          ) : ( */}
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
              onChangeText={setPassword}
              value={password}
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