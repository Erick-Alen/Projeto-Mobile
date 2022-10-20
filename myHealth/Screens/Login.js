import { TextInput, StyleSheet, View, Button, Text, TouchableOpacity, ImageBackground, Image, ActivityIndicator} from 'react-native'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../config/firebase'
import React, {useState} from 'react'
// import styled from 'styled-components'

// import { SafeAreaView } from 'react-native-safe-area-context'


const Login = (props) => {

    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [check , setCheck] = useState(false)
    // const [rodinha , setRodinha] = useState(false)


    // const createButtonAlert = () =>
    // Alert.alert(
    //   "Alert Title",
    //   "My Alert Msg",
    //   [
    //     {
    //       text: "Ask me later",
    //       onPress: () => console.log("Ask me later pressed")
    //     },
    //     {
    //       text: "Cancel",
    //       onPress: () => console.log("Cancel Pressed"),
    //       style: "cancel"
    //     },
    //     { text: "OK", onPress: () => console.log("OK Pressed") }
    //   ]
    // );

    // const validateLogin = () => {
    //      setRodinha(true)
    //     signInWithEmailAndPassword(auth, email, senha)
    //     .then((userCredential) => {
    //         <ActivityIndicator size = "small" color = "red"/>
    //         console.log("Usuário autenticado com sucesso!")
    //         props.navigation.navigate('Home')
    //     })
    //     .catch( () => {
    //         console.log("Falha ao autenticar: ")
    //         setCheck(true)
            
    //         // createThreeButtonAlert();
    //     })
    
    // }
    
    const validateLogin = () => {
        props.navigation.navigate('Home')
    }

    const recoverPassword = () => {
        props.navigation.navigate('RecPassword')
    }

    const createAccount = () => {
        props.navigation.navigate('CreateAcc')
    }

    return(
        <View styles = {styles.container}>
            <ImageBackground source={require('../Images/bkgInicial.png')} style = {styles.image}>
                <View style={styles.gradiente}>
                    <View style={styles.externalDATA}>

                        <View style={styles.base}>
                                <View style={styles.textoInicial}>
                                        <Text style = {styles.appName}>
                                            <Image source={require('../Images/Seringa.png')} style={{height:40, width:40, marginRight:50}} />
                                            MyHealth
                                        </Text>

                                    <Text style = {styles.appSlogan}>Controle suas vacinas e fique seguro</Text>
                                </View>

                            <View style={styles.internalDATA}>
                                <View style={styles.dataInputs}>

                                    <View style = {styles.rotulos}>
                                        <Text style = {styles.entrada}>
                                            E-mail: 
                                        </Text>
                                        <TextInput 
                                        style = {styles.input}
                                        // placeholder = "email"
                                        placeholderTextColor={'grey'}
                                        keyboardType = "email-address"
                                        value={email} onChangeText={setEmail} 
                                        />
                                    </View>

                                    <View style = {styles.rotulos}>
                                        <Text style = {styles.entrada}>
                                            Senha:
                                        </Text>
                                        <TextInput 
                                            style = {styles.input}
                                            value={senha}
                                            secureTextEntry={true} 
                                            onChangeText={setSenha} 
                                            />
                                    </View>

                                    <View>
                                        <Text style = {styles.alerta}>
                                            {check ? 'E-mail e/ou senha inválidos': null}
                                            {/* {check ? {'Autenticando... ' <ActivityIndicator size = "small" color = "red" value = "autenticando..."/>} : null} */}
                                    </Text>
                                    </View>
                                </View>
                                
                                <View style={styles.buttons}>
                                        <TouchableOpacity style={styles.entrar}
                                        onPress={validateLogin}
                                        >
                                            <Text style = {styles.buttonText}>
                                                Entrar
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.conta}
                                        onPress={createAccount}
                                        >
                                            <Text style = {styles.buttonText}>
                                                Criar minha conta
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.senha}
                                        onPress={recoverPassword}
                                        >
                                            <Text style = {styles.buttonText}>
                                                Esqueci minha senha
                                            </Text>
                                        </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>    
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flex: 2,
        // justifyContent: 'center',
        // alignItems: 'center',

        // border: '1px solid red'
    },
    textoInicial:{
        // backgroundColor: 'grey',
        alignItems: 'center',
    },
    appName:{
        marginTop: 0,
        fontSize: 45,
        color:'#419ED7',
        textDecorationLine: 'underline',
        fontFamily: 'AveriaLibre-Regular',
        
    },
    appSlogan:{
        fontFamily: 'AveriaLibre-Regular',
        textAlign: 'center',
        marginTop: 30,
        fontSize: 35,
        color:'#419ED7',
    },
    buttons: {
        marginTop: 0,
        // backgroundColor: 'blue',
        flexDirection: 'column',
        alignItems: 'center',
    },
    externalDATA: {
        flexDirection: 'row',
        // alignItems: 'center',
        // backgroundColor: 'red',
        // backgroundColor: '#ADD4D0',
        justifyContent: 'center',
        
        height: '100%',
    },
    internalDATA:{
        justifyContent: 'flex-end',
        flexDirection: 'column',
        // backgroundColor: 'purple',
        alignItems: 'center',
        marginTop: 100,
        
    },
    entrar: {
        height: 35,
        borderRadius: 3,
        backgroundColor: '#49B176',
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 8,
    },
    conta: {
        borderRadius: 3,
        backgroundColor: '#419ED7',
        width: 200,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        elevation: 8,

    },
    senha: {
        borderRadius: 3,
        backgroundColor: '#B0CCDE',
        width: 200,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        elevation: 8,
    },
    rotulos:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-end',
        marginRight: 100,
        // backgroundColor: 'black'
    },
    entrada:{
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 17,
        color: 'white',
        marginTop: '3%',
        marginRight: '2%'
    },
    alerta:{
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 17,
        color: '#FD7979',
        marginBottom: '-3%',
        marginLeft: 70
    },
    input: {
        borderWidth: 1,
        backgroundColor: 'white',
        color: 'black',
        width:'80%',
        height: 40,
        marginBottom: 15,
    },
    dataInputs:{
        // backgroundColor: 'red',
        marginBottom: 100,
        justifyContent: 'center',
        height: 60,
        width: '95%',
        // marginRight
    },
    buttonText: {
        fontFamily: 'AveriaLibre-Regular',
        color: 'white', 
        fontSize: 20,
    },
    base:{
        flex: 1,
        justifyContent: 'center',
    },
    image:{
        height: '100%',
        justifyContent: 'center',
    },
    gradiente:{
        // backgroundColor: "rgba(221, 230, 229, 0.4)",
        // backgroundColor: "rgba(84, 131, 126, 0.2) ",
        // backgroundColor: "rgba(255, 255, 255, 0.62) "
        backgroundColor: "rgba(221, 230, 229, 0.8) ",
        // backgroundColor: "rgba(59, 94, 90, 0.51) "
    },
    
})

export default Login
