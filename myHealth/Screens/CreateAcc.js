import { TextInput, StyleSheet, View, TouchableOpacity, Text, Image, Keyboard, KeyboardAvoidingView, ScrollView} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../config/firebase'
import React, {useState, useEffect} from 'react'
import DatePicker from 'react-native-date-picker'
import BouncyCheckbox from "react-native-bouncy-checkbox";

// import { SafeAreaView } from 'react-native-safe-area-context'



const CreateAcc = (props) => {

    const [CheckboxState, setCheckboxState] = React.useState(true);
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);

    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [repeteSenha, setRepeteSenha] = useState()
    const [verifica , setVerifica] = useState(false)


    const createAccount = () => {    
        // if (repeteSenha != senha){
        //     console.log('Senhas diferentes')
        //     setVerifica(true)
        // } else {    
            createUserWithEmailAndPassword(auth, email, senha)
            .then( (userCredential) => {
                console.log("Usuário adicionado com sucesso!")
                props.navigation.pop()
            })
            .catch( (error) => {
                console.log("Ocorreu um erro ao cadastrar usuário")
                console.log("Erro: " + error.message)
            })
        }
    


    // const createAccount = () => {
    //     props.navigation.pop()
    // }

    return(

    //         <KeyboardAvoidingView
    //   behavior={Platform.OS === "ios" ? "padding" : "height"}
    //   enabled = {true}
    //   style={styles.container}
    // >
    //   <ScrollView>
    <View style={styles.externalDATA}>
        <View style={styles.internalDATA}>
            <View style={styles.dataInputs}>
{/* //        <KeyboardAwareScrollView> */}


                <View style = {styles.rotulos}>
                    <Text style = {styles.entrada}>
                        Nome completo:
                    </Text>
                        <TextInput 
                        style = {styles.input}
                        placeholderTextColor={'grey'}
                        keyboardType = "default"
                        />
                </View>

                <View style = {styles.rotuloCheckbox}>
                    <Text style = {styles.entradaCheckbox}>
                        Sexo:
                    </Text>
                    <BouncyCheckbox 
                        size={20}
                        fillColor="#419ED7"
                        unfillColor="#FFFFFF"
                        text="Masculino"
                        iconStyle={{ borderColor: "red" }}
                        innerIconStyle={{ borderWidth: 2 }}
                        textStyle={{ fontFamily: "JosefinSans-Regular" }}
                        disableBuiltInState
                        isChecked={CheckboxState}
                        onPress={() => setCheckboxState(!CheckboxState)}

                    />
                    <BouncyCheckbox style = {{marginLeft: '3%'}}
                        size={20}
                        fillColor="#419ED7"
                        unfillColor="#FFFFFF"
                        text="Feminino"
                        // ref={(ref: any) => (bouncyCheckboxRef = ref)}
                        iconStyle={{ borderColor: "red" }}
                        innerIconStyle={{ borderWidth: 2 }}
                        textStyle={{ fontFamily: "JosefinSans-Regular" }}
                        disableBuiltInState
                        isChecked={!CheckboxState}
                        onPress={() => setCheckboxState(!CheckboxState)}
                    />
                </View>

                <View  style = {{
                        flexDirection: 'row',
                        width: '100%',
                        // backgroundColor: 'black',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        }}
                >
                    <Text style = {styles.entrada}>
                        Data de Nascimento:
                    </Text>
                    
                    <View style = {styles.viewCalend}
                    >
                    
                        <TextInput 
                        style = {styles.inputCalend}
                        placeholder = "Selecionar"
                        placeholderTextColor={'grey'}
                        keyboardType = 'default'
                        />

                        <TouchableOpacity style = {{backgroundColor: 'white', height:38, marginTop: 1, marginRight: 1}}
                        onPress={() => setOpen(true)}
                        >
                            <Image source={require('../Images/iconCalend.png')} style={{height:30, width:30, marginTop: 3}} />
                        </TouchableOpacity>

                            <DatePicker
                              modal
                              mode = "date"
                              open={open}
                              date={date}
                              onConfirm={(date) => {
                                setOpen(false)
                                setDate(date)
                              }}
                              onCancel={() => {
                                setOpen(false)
                              }}
                            />
                    </View>
                        
                </View>

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
                        secureTextEntry={true}
                        value={senha}
                        onChangeText={setSenha} 
                        />
                </View>

                <View style = {styles.rotulos}>
                    <Text style = {styles.entrada}>
                        Repetir Senha:
                    </Text>
                        <TextInput 
                        style = {styles.input}
                        secureTextEntry={true} 
                        onChangeText={setRepeteSenha} 
                        value={repeteSenha}
                        />
               </View>
               <Text style = {styles.alerta}
               >
                {verifica ? '*Senhas diferentes!': null}
                </Text>
                        
            </View>


            <TouchableOpacity style={styles.criaConta}
            onPress={createAccount}
            >
                <Text style = {styles.buttonText}>
                    Criar conta
                </Text>
            </TouchableOpacity>
            
        </View>
    </View>

    // </KeyboardAwareScrollView>
    //         </ScrollView>
    // </KeyboardAvoidingView>


    )
}
const styles  = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    externalDATA: {
        flexDirection: 'row',
        // alignItems: 'center',
        // backgroundColor: 'red',
        backgroundColor: '#ADD4D0',
        justifyContent: 'center',
        
        height: '100%',
    },
    internalDATA:{
        justifyContent: 'flex-end',
        flexDirection: 'column',
        // backgroundColor: 'purple',
        alignItems: 'center',
        // marginTop: 100,
        
    },
    
    rotulos:{
        flexDirection: 'row',
        // backgroundColor: 'black',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },
    rotuloCheckbox:{
        flexDirection: 'row',
        // marginBottom: 10,
        width: '100%',
        justifyContent: 'center'
    },
    entrada:{
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 15,
        color: 'white',
        marginTop: '3%',
        marginRight: '2%'

    },
    entradaCheckbox:{
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 15,
        color: 'white',
        marginTop: '3%',
        marginBottom: '2%',
        marginRight: '2%'

    },
    viewCalend:{
        flexDirection: 'row',
        width: '100%',
        // backgroundColor: 'black',
        justifyContent: 'space-between',
        borderWidth: 1,
        backgroundColor: 'white',
        color: 'black',
        width:'50%',
        height: 42,
        marginTop: 15,
        marginBottom: 10,
    },
    inputCalend:{
        // borderWidth: 1,
        backgroundColor: 'white',
        color: 'black',
        width:'80%',
        height: 40,
        alignItems:'flex-end',
        marginBottom: 15,
        // fontSize: 10,
    },
    alerta:{
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 15,
        color: '#FD7979',
        marginBottom: '-3%',
        marginLeft: 110
    },
    input: {
        borderWidth: 1,
        backgroundColor: 'white',
        color: 'black',
        width:'65%',
        height: 40,
        marginBottom: 15,
        // fontSize: 10,
    },
    pickDate:{
        backgroundColor: 'white',
        width: 40,
        height: 38,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginTop: 1,
        elevation: 7
    },
    dataInputs:{
        // backgroundColor: 'red',
        marginBottom: 150,
        justifyContent: 'flex-end',
        height: 60,
        width: '95%',
        // marginRight
    },
    criaConta: {
        backgroundColor: '#49B176',
        width: 180,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
        borderRadius: 3,
        elevation: 7

    },
    buttonText: {
        fontFamily: 'AveriaLibre-Regular',
        color: 'white', 
        fontSize: 20,
    },
})

export default CreateAcc