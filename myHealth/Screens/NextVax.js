import {View, TouchableOpacity, StyleSheet, Text, FlatList} from 'react-native'
import CardNextVax from '../Components/CardNextVax'
import { listaVacinas } from './MyVax'


const NextVax = (props) => {


    const NovaVacina = () => {
        props.navigation.navigate('NewVax')
    }   

    return(
        <View>
            <View style={styles.externalDATA}>
                <View style={styles.internalDATA}>    

                <FlatList data={listaVacinas} 
                    renderItem={(item) => <CardNextVax 
                    item={item}/>} 
                    numColumns={1} />

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
        backgroundColor: 'green',
        alignItems: 'center',
        // justifyContent: 'center', 
        // marginTop: 100,
        
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
        color: 'white', 
        fontSize: 17,
        fontWeight: 'bold',
    },
})

export default NextVax