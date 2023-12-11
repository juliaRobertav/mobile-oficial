import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, ImageBackground, ActivityIndicator, ScrollView } from 'react-native'
import styles from './styles'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { db, app } from "../firebaseConfig";
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import axios from 'axios';

import background from '../../assets/Login2.png'

export default function Conta({ navigation }) {

    const [cliente, setCliente] = useState()
    const [conta , setConta ] = useState()
    const [limite , setLimite ] = useState()
    const [ultima_movimentacao , setUltima_movimentacao ] = useState()
    const [renda , setRenda ] = useState()
    const [agencia , setAgencia ] = useState('')
    const [saldo , setSaldo ] = useState('')

    return (
        <View style={styles.container}>
            <ImageBackground
            style={styles.container}
            source={background}
            >
                <ScrollView style={{width: '180%'}}>


            <View style={styles.inputs}>   
                <Text style={styles.title}>Conta</Text>
                    <TextInput
                        placeholder='Cliente'
                        onChangeText={setCliente}
                        value={cliente}
                        style={styles.cliente}
                    />
       
                    <TextInput
                        placeholder='Conta'
                        onChangeText={setConta}
                        value={conta}
                        style={styles.conta}
                    />
                    <TextInput
                        placeholder='Limite'
                        onChangeText={setLimite}
                        value={limite}
                        style={styles.limite}
                    />
                    <TextInput
                        placeholder='Ultima_movimentacao'
                        onChangeText={setUltima_movimentacao}
                        value={ultima_movimentacao}
                        style={styles.mov}
                    />
                    <TextInput
                        placeholder='Renda'
                        onChangeText={setRenda}
                        value={renda}
                        style={styles.renda}
                    />
                    <TextInput
                        placeholder='Agencia'
                        onChangeText={setAgencia}
                        value={agencia}
                        style={styles.agencia}
                    />
                    <TextInput
                        placeholder='Saldo'
                        onChangeText={setSaldo}
                        value={saldo}
                        style={styles.saldo}
                    />

            
                    <TouchableOpacity
                        style={styles.btnProximo}>
                     
                        <Text style={{ fontSize: 20, color:'#fff' }}>PRÓXIMO</Text>
                    </TouchableOpacity>
                </View> 
                </ScrollView>
            </ImageBackground>
        </View>
    )
}