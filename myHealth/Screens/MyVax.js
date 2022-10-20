import {View, TouchableOpacity, FlatList, StyleSheet, Text, TextInput, Image, Pressable} from 'react-native'
import CardMyVax from '../Components/CardMyVax'

export const listaVacinas = [
  {
    id : 0,
    vacina: 'BCG',
    data: '11/06/2022',
    dose: 'Dose única',
    urlImage: 'http://',
    proximaVacina: 'não há'
  },
  {
    id : 1,
    vacina: 'Febre Amarela',
    data: '11/10/2022',
    dose: '1ª Dose',
    urlImage: 'http://',
    proximaVacina: '11/10/2023'
  },
  {
    id : 2,
    vacina: 'Hepatite B',
    data: '11/08/2022',
    dose: '1ª Dose',
    urlImage: 'http://',
    proximaVacina: '11/10/2022'
  },
  {
    id : 3,
    vacina: 'Poliomelite',
    data: '11/08/2022',
    dose: '1ª Dose',
    urlImage: 'http://',
    proximaVacina: '11/10/2022'
  },
  {
    id : 4,
    vacina: 'Dengue',
    data: '21/09/2022',
    dose: 'Dose única',
    urlImage: 'http://',
    proximaVacina: 'não há'
  },
//   {
//     vacina: 'COVID',
//     data: '2022-09-21',
//     dose: 1,
//     urlImage: 'http://',
//     proximaVacina: '2024-09-23'
//   },

]
const MyVax = (props) => {


    
    const NovaVacina = () => {
        props.navigation.navigate('NewVax')
    }

    const EditarVacina = () => {
        props.navigation.navigate('EditVax')
    }   


    return(
        <View>
            <View style={styles.externalDATA}>
                <View style={styles.internalDATA}>  
                    <View style={styles.searchDATA}>  
                        <Image source={require('../Images/search.png')}
                        style={{height:20, width:20,marginTop:10, marginLeft:5}} />
                        <TextInput
                        style = {styles.inputSearch}
                        placeholder = "Selecionar"
                        placeholderTextColor={'grey'}
                        keyboardType = 'default'
                        >
                        </TextInput>
                    </View>

                    <FlatList data={listaVacinas} 
                    renderItem={(item) => <CardMyVax 
                    item={item}/>} 
                    numColumns={2} />

                    <TouchableOpacity style={styles.button}
                    onPress={NovaVacina}
                    >
                    <Text style = {styles.buttonText}>
                        Nova vacina
                    </Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
        // justifyContent: 'center', 
        // marginTop: 100,
        
    },
    searchDATA:{
        flexDirection: 'row',
        borderWidth: 1,
        backgroundColor: 'white',
        color: 'black',
        width:'90%',
        height: 42,
        marginTop: 15,
        marginBottom: 10,
        justifyContent: 'flex-start',
    },
    inputSearch:{
        // borderWidth: 1,
        backgroundColor: 'white',
        color: 'black',
        width:'92%',
        height: 40,
        // marginTop: 30,
    },
    button: {
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
        fontSize: 17,
    },
})

export default MyVax