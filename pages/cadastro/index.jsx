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

export default function cadastro({ navigation }) {

    const [nome, setNome] = useState()
    const [data_nascimento, setData_nascimento] = useState()
    const [cpf, setCpf] = useState()
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [cep, setCep] = useState('')
    const [num, setNum] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [localidade, setLocalidade] = useState('')
    const [bairro, setBairro] = useState('')
    const [uf, setUf] = useState('')
    const [image, setImage] = useState(null)
    const [imagem, setImagem] = useState(null)
    const [blob, setBlob] = useState(null)
    const auth = getAuth(app);


    // consumindo api para cadastrar
    const cadastro = async () => {
        // registrar usuario
        console.log("entrou no cadastro")

        try {
            const response = await axios.post('http://127.0.0.1:8000/api_cadastro/', {
                nome: nome,
                nasc: data_nascimento,
                cpf: cpf,
                email: email,
                senha: senha,
                rua: logradouro,
                cep: cep,
                num: num,
                bairro: bairro,
                cidade: localidade,
                estado: uf,
                imagem: imagem
            })
            console.log("cadastrou", response.data)

        } catch(error)  {
            console.error('Erro no cadastro:', error)
        }

        // .then((res) => {
           
        //     console.log(res)
        //     if (res.data && res.status === 200) {
        //         navigation.navigate(Conta);
        //     } 
        // })
       

    }

    const getBlobFroUri = async (uri) => {
        const blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                resolve(xhr.response);
            };
            xhr.onerror = function (e) {
                reject(new TypeError("Network request failed"));
            };
            xhr.responseType = "blob";
            xhr.open("GET", uri, true);
            xhr.send(null);
        });

        return setBlob(blob);
    };

    const camera = async () => {
        try {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.canceled) {
                getBlobFroUri(result.assets[0].uri)
                setImage(result.assets[0].uri)
                const path = result.assets[0].uri
                setImagem(path.substring(path.lastIndexOf('/') + 1, path.length))
            }
        } catch (E) {
            console.log(E);
        }
    };

    const gallery = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.canceled) {
                getBlobFroUri(result.assets[0].uri)
                setImage(result.assets[0].uri)
                const path = result.assets[0].uri
                setImagem(path.substring(path.lastIndexOf('/') + 1, path.length))
            }
        } catch (E) {
            console.log(E);
        }
    };

    // const storage = getStorage(app);
    // // Create the file metadata
    // /** @type {any} */
    // const metadata = {
    //     contentType: 'image/jpeg'
    // };

    // const uploadingImage = () => {
    //     console.log("Data: ", Date.now())
    //     // Upload file and metadata to the object 'images/mountains.jpg'
    //     // const storageRef = ref(storage, 'images/' + Date.now());
    //     const storageRef = ref(storage, 'images/' + imagem);
    //     const uploadTask = uploadBytesResumable(storageRef, blob, metadata);

    // }


    // const cadastrar = async () => {
    //     const docRef = await addDoc(collection(db, "cadastro"), {

    //         nome: nome,
    //         nasc: data_nascimento,
    //         cpf: cpf,
    //         email: email,
    //         senha: senha,
    //         rua: logradouro,
    //         cep: cep,
    //         num: num,
    //         bairro: bairro,
    //         cidade: localidade,
    //         estado: uf,
    //         foto: email + '_' + imagem
    //     })
    //     navigation.navigate(Conta)
    // }

    const pesquisar = () => {
        console.log(cep)
        axios.get('https://viacep.com.br/ws/' + cep + '/json/')
            .then((res) => {
                setLogradouro(res.data.logradouro)
                setLocalidade(res.data.localidade)
                setBairro(res.data.bairro)
                setUf(res.data.uf)
            })
    }

    // const signup = (e) => {
    //     e.preventDefault()

    //     const file = imagem

    //     if (!file) {
    //         console.log('Faltou imagem...')
    //         return
    //     }
    //     if (!nome) {
    //         console.log('Faltou nome...')
    //         return
    //     }
    //     if (!email) {
    //         console.log('Faltou email...')
    //         return
    //     }

    //     if (imagem == null) return

    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             const user = userCredential.user;
    //             console.log('Entrou')
    //             adicionar()
    //             navigation.navigate('SignIn')
    //         })
    //         .catch((error) => {
    //             console.log("Auth", auth)
    //             console.log("email", email)
    //             console.log("senha", senha)
    //             console.log('não entrou')
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //         });
    //     uploadingImage()
    // }




    return (
        <View style={styles.container}>
            <ImageBackground
            style={styles.container}
            source={background}
            >
                <ScrollView style={{width: '180%'}}>
                <View>
                    <Text style={styles.title}>Cadastro</Text>
                </View>

                <View style={styles.contImg}>
                    <View style={styles.foto}>
                        {image && (
                            <>
                                <Image source={{ uri: image }} style={styles.foto1} />
                            </>
                        )}
                        {Image && <ActivityIndicator />}
                    </View>
                    <View style={styles.botao1}>
                        <TouchableOpacity
                            onPress={gallery}
                        >
                            <FontAwesome
                                name='image'
                                size={40}
                                color={'#000'}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={camera}
                        >
                            <AntDesign
                                name='camera'
                                size={40}
                                color={'#000'}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.caixas}>

                    <TextInput
                        placeholder='Nome Completo'
                        onChangeText={setNome}
                        value={nome}
                        style={styles.caixanome}
                    />


                <View style={styles.caixasNC}>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            placeholder='Nascimento'
                            onChangeText={setData_nascimento}
                            value={data_nascimento}
                            style={styles.caixanasc}
                        />
                        <TextInput
                        placeholder='CPF'
                        onChangeText={setCpf}
                        value={cpf}
                        style={styles.caixacpf}
                        />
                    </View>
                </View>



                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            placeholder='Cep'
                            onChangeText={(e) => { setCep(e) }}
                            value={cep}
                            style={styles.caixacep}
                        />
                        <TouchableOpacity
                            onPress={pesquisar}
                            style={styles.btnPesquisar}
                        >
                            <AntDesign
                                name='search1'
                                size={30}
                                color={'#000'}
                            />
                        </TouchableOpacity>
                    </View>




                <View style={styles.caixasRN}>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            placeholder='Logradouro'
                            onChangeText={setLogradouro}
                            value={logradouro}
                            style={styles.caixalogra}
                        />
                            <TextInput
                                placeholder='nº'
                                onChangeText={(e) => setNum(e)}
                                value={num}
                                style={styles.caixanum}
                            />
                    </View>
                </View>


                    
                    
                    <View style={styles.caixasNE}>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput
                                placeholder='Cidade'
                                onChangeText={setLocalidade}
                                value={localidade}
                                style={styles.caixacidade}
                            />
                        
                            <TextInput
                                placeholder='UF'
                                onChangeText={setUf}
                                value={uf}
                                style={styles.caixauf}
                            />
                        </View>
                    </View>

                    
                    <TextInput
                        placeholder='Bairro'
                        onChangeText={setBairro}
                        value={bairro}
                        style={styles.caixabairro}
                    />
                

                    <TextInput
                        placeholder='Email'
                        onChangeText={setEmail}
                        value={email}
                        style={styles.caixaemail}
                    />
                    <TextInput
                        placeholder='Senha'
                        onChangeText={setSenha}
                        value={senha}
                        style={styles.caixasenha}
                    />
                    
                    <TouchableOpacity
                        style={styles.btnProximo}
                        onPress={cadastro}
                    >
                        <Text style={{ fontSize: 25, color:'#fff' }} onPress={cadastro}>PRÓXIMO</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}