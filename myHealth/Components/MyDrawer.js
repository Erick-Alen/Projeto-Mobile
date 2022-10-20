import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { signOut } from "firebase/auth";
import {auth} from '../config/firebase'

import {View, Text, StyleSheet ,Image, TouchableOpacity } from "react-native";

const MyDrawer = (props) => {

    //  useEffect( () => {
    //     auth.onAuthStateChanged(() => {
    //         if (!auth.currentUser){
    //             props.navigation.pop()
    //         }
    //    }) 
                
    // }, [])
     
    const logOut = () => {
        signOut(auth)
        props.navigation.pop()
    }

    return(
        <DrawerContentScrollView {...props}>
            <View style={styles.container}>
                <Text style={styles.text} >
                    Olá usuário!
                </Text>
            </View>
            <DrawerItemList {...props} />
            {/* <View style={styles.container}>
                <Text style={styles.text}>
                    <Image source={require('../Images/drawerCalend.png')} style={{height:30, width:30}} />
                </Text>
                
            </View> */}
            <TouchableOpacity onPress={logOut} style = {{flexDirection: 'row'}}>
                <Image source={require('../Images/logout.png')}
                style={{height:20, width:20, marginTop: 20, marginLeft: 25}} />
                <Text style = {{fontFamily: 'AveriaLibre-Regular', textAlign :'center', marginTop: 20, marginLeft: 30}}> 
                    Sair
                </Text>
            </TouchableOpacity>
            {/* <DrawerItem label="Sair" onPress={logOut}/> */}
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
    },
    text: {
        fontSize: 25,
        color: '#419ED7',
        fontFamily: 'AveriaLibre-Regular'
    }
})

export default MyDrawer