 import {StyleSheet, Text, View, Dimensions, Image, TouchableOpacity} from 'react-native'
 import { useNavigation } from "@react-navigation/native"

const CardNextVax = (props) => {
    
    const {item} = props.item

    const navigation = useNavigation()



    const EditarVacina = () => {
        navigation.navigate('EditVax', {data : item})
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity style = {styles.container} onPress={EditarVacina}>
                <Text style={styles.vaxName}>{item.vacina}</Text>
                <Text style={styles.doseInfo}>{item.dose}</Text>
                <Text style={styles.doseDate}>{item.data}</Text>
                {/* <Image style={{flex:1, width: 150, height: 70}} source = {require('../Images/Comprovante.png')} /> */}
                <Text style={styles.doseNext}>Próxima dose : {item.proximaVacina}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 5,
        width: (Dimensions.get('window').width/1)-20,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
        marginHorizontal: 5
    },
    vaxName: {
        textAlign: 'center',
        fontSize: 25,
        color: '#3F92C5',
        fontFamily: 'AveriaLibre-Regular',
    },
    doseInfo: {
        textAlign: 'center',
        fontSize: 10,
        color: 'white',
        backgroundColor: '#3F92C5',
        borderRadius:3,
        fontFamily: 'AveriaLibre-Regular',
        width: 50
    },
    doseDate: {
        fontSize: 13,
        color: 'grey',
        fontFamily: 'AveriaLibre-Regular',
    },
    doseNext: {
        fontSize: 14,
        color:'#FD7979',
        fontFamily: 'AveriaLibre-Regular',
    }
})

export default CardNextVax