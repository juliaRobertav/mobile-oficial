import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, ImageBackground} from 'react-native'
import styles from './styles'
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebaseConfig'

import background from '../../assets/Login2.png'

export default function Login({ navigation }) {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [login, setLogin] = useState(0); 
    const [telaBloq, setTelaBloq] = useState(false);
    
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
          <View style={styles.miniContainer}>
            <Text style={styles.title}>HOME</Text>
          
          <View style={styles.btns}>
            <TouchableOpacity style={styles.btnP} onPress={logar}>
              <Text style={{ fontSize: 15, color: '#fff' }}>PIX</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.btnE} onPress={cadastrar}>
              <Text style={{ fontSize: 15, color: '#fff' }}>EXTRATO</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btns2}>
            <TouchableOpacity style={styles.btnC} onPress={logar}>
              <Text style={{ fontSize: 15, color: '#fff' }}>CARTÃO</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.btnEm} onPress={cadastrar}>
              <Text style={{ fontSize: 15, color: '#fff' }}>EMPRÉSTIMO</Text>
            </TouchableOpacity>
          </View>
          </View>
          </ImageBackground>
        </View>
      );
    }