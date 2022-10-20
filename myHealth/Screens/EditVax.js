import { TextInput, StyleSheet, View, Text,TouchableOpacity, Image, Modal, Pressable, Alert } from 'react-native'
import DatePicker from 'react-native-date-picker'
import React, {useState} from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { listaVacinas } from './MyVax';





const NewVax = (props) => {

    const [CheckboxState, setCheckboxState] = React.useState(true);
    const [CheckboxState1, setCheckboxState1] = React.useState(true);
    const [CheckboxState2, setCheckboxState2] = React.useState(true);
    const [CheckboxState3, setCheckboxState3] = React.useState(true);

    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    // const {doseInfo, proximaVacina, vaxName} = props.route.params.data

    const regVax = () => {
        props.navigation.navigate('Home')
    }

    // console.log(props.route.params.dados)

    const delVax = () => {
        listaVacinas.splice(props.route.params.data.id, 1)
        console.log('Conferindo id')
        console.log(props.route.params.data.id)
        props.navigation.pop()
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
                            value={props.route.params.data.data}
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
                            Nome da Vacina:
                        </Text>
                            <TextInput 
                            style = {styles.input}
                            placeholderTextColor={'grey'}
                            value={props.route.params.data.vacina}
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
                            value={props.route.params.data.proximaVacina}

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
                            Salvar alterações
                        </Text>
                    </TouchableOpacity>


                    <Modal  animationType="fade"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                            // Alert.alert("Modal has been closed.");
                            setModalVisible(!modalVisible);
                            }}
                    >
                        <View style={styles.modalView}>

                                <Text style={styles.modalText}>
                                    Tem certeza que deseja    remover essa vacina?
                                </Text>

                            <View style={styles.modalInternView}>


                            
                                <TouchableOpacity
                                  style={[styles.modalBtYes]}
                                  onPress={delVax}
                                >
                                  <Text style={styles.textStyle}>SIM</Text>
                                </TouchableOpacity>
          
                                <TouchableOpacity
                                  style={[styles.modalBtCancel]}
                                  onPress={() => {setModalVisible(!modalVisible)}}
                                >
                                  <Text style={styles.textStyle}>CANCELAR</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                        

                    </Modal>

                    <TouchableOpacity
                        style={styles.redButton}
                        onPress={() => setModalVisible(true)}

                        >
                            <Text style = {styles.buttonText}>
                                <Image source={require('../Images/trash.png')} style={{height:20, width:20, marginRight: 3}} />
                                Excluir
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
    modalView: {
        flexDirection: 'column',
        marginTop: 300,
        marginHorizontal: 50,
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "#B9DFDB",
        borderRadius: 2,
        height: 180,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      modalInternView: {
        flexDirection: 'row',
        justifyContent: "space-around",
        marginTop: 40,

      },
    modalBtYes:{
        backgroundColor: '#FF8383',
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        elevation: 7,
    },
    modalBtCancel:{
        backgroundColor: '#3F92C5',
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        elevation: 7,
    },
    modalText: {
        color: "red",
        marginTop: 30,
        textAlign: 'center',
        fontSize: 17,

      },
    textStyle: {
        color: "white",
        fontFamily: 'AveriaLibre-Regular',

        textAlign: "center",
        fontSize: 17,
      },
    buttonText: {
        fontFamily: 'AveriaLibre-Regular',
        color: 'white', 
        fontSize: 17,
    }
})
export default NewVax