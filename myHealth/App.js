import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
// import { createStackNavigator } from "@react-navigation/stack"
import { Image , Text} from "react-native"
import React from "react"
import Login from "./Screens/Login"
import CreateAcc from "./Screens/CreateAcc"
import RecPassword from "./Screens/RecPassword"
import Home from "./Screens/Home"
import CardMyVax from "./Components/CardMyVax"
import EditVax from "./Screens/EditVax"
import NewVax from "./Screens/NewVax"
import NextVax from "./Screens/NextVax"


// const Stack = createStackNavigator
const Stack = createNativeStackNavigator()

const App = () => {
  return(

    <NavigationContainer style = {{backgroundColor:'black',fontFamily: 'AveriaLibre-Regular'}}>
      <Stack.Navigator screenOptions={{
        headerTintColor: '#419ED7',
        headerTitleStyle: {fontSize: 25,fontFamily: 'AveriaLibre-Regular'},
        headerStyle: {backgroundColor: '#C1E7E3'}
      }}>
        <Stack.Screen name="Login" component={Login} options = {{headerShown:false}}/>
        <Stack.Screen name="Home" component={Home} 
        options={{headerShown: false}} 
        />
        
        <Stack.Screen name="NewVax" component={NewVax} options = {{title: 'Nova Vacina',fontFamily: 'AveriaLibre-Regular'}}/>
        <Stack.Screen name="EditVax" component={EditVax} options = {{title: 'Editar Vacina',fontFamily: 'AveriaLibre-Regular'}}/>
        <Stack.Screen name="NextVax" component={NextVax} options = {{title: 'Próximas Vacinas',fontFamily: 'AveriaLibre-Regular'}}/>
        <Stack.Screen name="RecPassword" component={RecPassword} options = {{title: 'MyHealth',fontFamily: 'AveriaLibre-Regular'}}/>
        <Stack.Screen name="CardMyVax" component={CardMyVax} options = {{title: 'Informações da Vacina',fontFamily: 'AveriaLibre-Regular'}}/>
        <Stack.Screen name="CreateAcc" component={CreateAcc} options = {{
                                                  
          title: 'MyHealth | Criar Conta',
          fontFamily: 'AveriaLibre-Regular',
        }}
          // <View>
          //   <Text style = {styles.appName}>
          //     <Image source={require('Images/Seringa.png')} style={{height:40, width:40, marginRight:50}} />
          //     MyHealth|Criar Conta
          //   </Text>
          // </View>}}
          />
      </Stack.Navigator>
    </NavigationContainer>

  )
}
  
export default App