import { TextInput, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { sendPasswordResetEmail } from 'firebase/auth'
import {auth} from '../config/firebase'
import React, {useState} from 'react'

const RecPassword = (props) => {

    const [email, setEmail] = useState()

    const recoverPassword = () => {
        sendPasswordResetEmail(auth, email)
        .then(() => {
            console.log('Email de redefinição enviado com sucesso!')
        })
        .catch(() => {
            console.log('Erro ao solicitar a redefinição de senha')
        })
    }

    return(
        <View styles = {styles.container}>
            <View style={styles.externalDATA}>
                    
                <View style={styles.internalDATA}>

                    <View style = {styles.rotulos}>
                        <Text style = {styles.entrada}>
                            E-mail:
                        </Text>
                            <TextInput 
                            style = {styles.input}
                            // placeholder = "Nome"
                            placeholderTextColor={'grey'}
                            keyboardType = "email-address"
                            value={email} 
                            onChangeText={setEmail}
                            />
                    </View>

                            <TouchableOpacity style={styles.greenButton}
                            onPress={recoverPassword}
                            >
                                <Text style = {styles.buttonText}>
                                    Recuperar senha
                                </Text>
                            </TouchableOpacity>

                </View>
            </View>
        </View>

    )
}
const styles  = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    externalDATA: {
        flexDirection: 'column',
        // alignItems: 'center',
        // backgroundColor: 'red',
        backgroundColor: '#ADD4D0',
        // justifyContent: 'center',
        
        height: '100%',
    },
    internalDATA:{
        flexDirection: 'column',
        // backgroundColor: 'purple',
        alignItems: 'center',
        // justifyContent: 'center', 
        marginTop: 200,
        
    },
    rotulos:{
        flexDirection: 'row',
        width: '100%',
        // backgroundColor: 'black',
        justifyContent: 'center'
    },
    entrada:{
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 15,
        color: 'white',
        marginTop: '3%',
        marginRight: '2%'

    },
    input: {
        borderWidth: 1,
        backgroundColor: 'white',
        color: 'black',
        width:'80%',
        height: 40,

        marginBottom: 15,
        // fontSize: 10,
    },

    greenButton:{
        marginTop: 250,
        height: 35,
        backgroundColor: '#49B176',
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 8,
        borderRadius: 3,
    },
    buttonText: {
        color: 'white', 
        fontSize: 20,
        fontFamily: 'AveriaLibre-Regular',
    }
})

export default RecPassword