import { Image } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MyDrawer from '../Components/MyDrawer'
import MyVax from './MyVax'
import NextVax from './NextVax'
import EditVax from './EditVax'


const Drawer = createDrawerNavigator()

const Home = (props) => {
    return (

        <Drawer.Navigator drawerContent={(props) => <MyDrawer {...props} />}
        screenOptions={{ 
                        // drawerActiveTintColor: 'orange', 
                        // drawerActiveBackgroundColor: 'green',
                        // drawerInactiveBackgroundColor: 'blue',
        
        drawerStyle: { backgroundColor: '#ADD4D0', fontColor: '#419ED7', fontFamily: 'AveriaLibre-Regular'},
        // drawerIcon: {fontFamily: 'AveriaLibre-Regular'},
        drawerLabelStyle: {fontSize: 15,fontFamily: 'AveriaLibre-Regular'},
        headerTitleStyle: {fontSize: 25, fontFamily: 'AveriaLibre-Regular'},
        backgroundColor: '#ADD5D0',
        }}>
            <Drawer.Screen name="Minhas Vacinas" component={MyVax} options = {{
            headerStyle:{backgroundColor: '#C1E7E3'},
            headerTintColor: '#419ED7',
            drawerIcon: () => (<Image source={require('../Images/Seringa.png')} style={{height:30, width:30}} />)
            }}/>

            <Drawer.Screen name="Próximas Vacinas" component={NextVax} options = {{
            headerStyle:{backgroundColor: '#C1E7E3'},
            headerTintColor: '#419ED7',
            drawerIcon: () => (<Image source={require('../Images/drawerCalend.png')} style={{height:30, width:30}} />)
            }}/>
        </Drawer.Navigator>
    )
}

export default Home