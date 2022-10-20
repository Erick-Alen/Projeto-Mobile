import { TextInput, StyleSheet, View, Text,TouchableOpacity, Image } from 'react-native'
import DatePicker from 'react-native-date-picker'
import React, {useState} from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";





const NewVax = (props) => {

    const [CheckboxState, setCheckboxState] = React.useState(true);
    const [CheckboxState1, setCheckboxState1] = React.useState(true);
    const [CheckboxState2, setCheckboxState2] = React.useState(true);
    const [CheckboxState3, setCheckboxState3] = React.useState(true);

    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);

    const regVax = () => {
        props.navigation.navigate('Home')
    }

    return(
        <View styles = {styles.container}>
            <View style={styles.externalDATA}>
                <View style={styles.internalDATA}>        


                    <View style = {styles.rotulosCalend}>

                        <Text style = {styles.entrada}>
                            Data de vacinação:
                        </Text>

                        <View style = {styles.viewCalend}
                        >
                            <TextInput 
                            style = {styles.inputCalend}
                            placeholderTextColor={'grey'}
                            placeholder = "Selecione..."
                            />

                            <TouchableOpacity style = {{backgroundColor: 'white', height:38, marginTop: 1}}
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
                        Nome da vacina:
                        </Text>
                            <TextInput 
                            style = {styles.input}
                            placeholderTextColor={'grey'}
                            />
                    </View>

                    <View style = {styles.rotuloCheckbox}>
                        <Text style = {styles.entradaCheckbox}>
                            Dose:
                        </Text>
                        <BouncyCheckbox style = {{marginLeft: '3%'}}
                            size={20}
                            fillColor="#419ED7"
                            unfillColor="#FFFFFF"
                            text="Única   "
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
                            text="1ª dose"
                            // ref={(ref: any) => (bouncyCheckboxRef = ref)}
                            iconStyle={{ borderColor: "red" }}
                            innerIconStyle={{ borderWidth: 2 }}
                            textStyle={{ fontFamily: "JosefinSans-Regular" }}
                            disableBuiltInState
                            isChecked={!CheckboxState1}
                            onPress={() => setCheckboxState1(!CheckboxState1)}
                        />
                    </View>
                    <View style = {styles.rotuloCheckbox}>

                        <BouncyCheckbox 
                            style = {{marginLeft: '15%'}}
                            size={20}
                            fillColor="#419ED7"
                            unfillColor="#FFFFFF"
                            text="2ª dose"
                            iconStyle={{ borderColor: "red" }}
                            innerIconStyle={{ borderWidth: 2 }}
                            textStyle={{ fontFamily: "JosefinSans-Regular" }}
                            disableBuiltInState
                            isChecked={!CheckboxState2}
                            onPress={() => setCheckboxState2(!CheckboxState2)}

                        />
                        <BouncyCheckbox style = {{marginLeft: '3%'}}
                            size={20}
                            fillColor="#419ED7"
                            unfillColor="#FFFFFF"
                            text="3ª dose"
                            // ref={(ref: any) => (bouncyCheckboxRef = ref)}
                            iconStyle={{ borderColor: "red" }}
                            innerIconStyle={{ borderWidth: 2 }}
                            textStyle={{ fontFamily: "JosefinSans-Regular" }}
                            disableBuiltInState
                            isChecked={!CheckboxState3}
                            onPress={() => setCheckboxState3(!CheckboxState3)}
                        />
                    </View>
                    <View style = {styles.rotulos}>
                        <Text style = {styles.entrada}>
                        Comprovante:
                        </Text>
                        <TouchableOpacity style={styles.button}
                        // onPress={regVax}
                        >
                            <Text style = {styles.buttonText}>
                                Selecionar imagem
                            </Text>
                        </TouchableOpacity>
                            {/* <TextInput 
                            style = {styles.input}
                            placeholderTextColor={'grey'}
                            /> */}
                    </View>

                    <View style = {styles.rotulosCalend}>
                        <Text style = {styles.entrada}>
                            Próxima vacinação:
                        </Text>

                        <View style = {styles.viewCalend}
                        >
                            <TextInput 
                            style = {styles.inputCalend}
                            placeholderTextColor={'grey'}
                            placeholder = "Selecione..."
                            />

                            <TouchableOpacity style = {{backgroundColor: 'white', height:38, marginTop: 1}}
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

                    <TouchableOpacity style={styles.greenButton}
                    onPress={regVax}
                    >
                        <Text style = {styles.buttonText}>
                            Cadastrar
                        </Text>
                    </TouchableOpacity>

                    {/* <TouchableOpacity style={styles.redButton}
                    onPress={delVax}
                    >
                        <Text style = {styles.buttonText}>
                            <Image source={require('../Images/trash.png')} style={{height:20, width:20, marginRight: 3}} />
                            Excluir
                        </Text>
                    </TouchableOpacity> */}
                </View>
            </View>
        </View>
    )
}
    const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#ADD4D0',
        // flex: 2,
        // justifyContent: 'center',
        // alignItems: 'center',
        // border: '1px solid red'
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
        justifyContent: 'flex-start',
        flexDirection: 'column',
        // backgroundColor: 'purple',
        alignItems: 'center',
        marginTop: 50,
        width: '90%',
    },
    button: {
        backgroundColor: '#419ED7',
        width: 180,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 3,
        elevation: 7
    },
    rotulos:{
        flexDirection: 'row',
        width: '100%',
        // backgroundColor: 'black',
        justifyContent: 'flex-end'
    },
    entrada:{
        textAlign: 'center',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 15,
        color: 'white',
        marginTop: '3%',
        marginRight: '2%'

    },
    rotuloCheckbox:{
        flexDirection: 'row',
        marginBottom: 10,
        width: '100%',
        // backgroundColor: 'black',
        justifyContent: 'center'
    },
    entradaCheckbox:{
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 15,
        color: 'white',
        marginTop: '3%',
        marginBottom: '2%',
    },
    input: {
        borderWidth: 1,
        backgroundColor: 'white',
        color: 'black',
        width:'63%',
        height: 40,
        marginBottom: 15,
        // fontSize: 10,
    },
    rotulosCalend:{
        flexDirection: 'row',
        width: '100%',
        // backgroundColor: 'black',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    viewCalend:{
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'black',
        justifyContent: 'center',
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
        marginBottom: 15,
        // fontSize: 10,
    },
    greenButton:{
        backgroundColor: '#49B176',
        width: 180,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        elevation: 7,
        marginTop: 50
    },
    redButton:{
        backgroundColor: '#FD7979',
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        elevation: 7,
        marginTop: 80,
    },
    buttonText: {
        color: 'white', 
        fontSize: 17,
        fontFamily: 'AveriaLibre-Regular',
    }
})
export default NewVax