import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, TextInput, TouchableOpacity } from 'react-native-web';
import Icon from 'react-native-vector-icons/ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React,{Component} from 'react'

import HomeScreen from './layar/home'
import Pesanan from './layar/pesanan-saya'
import Tiket from './layar/konfirmasi-tiket'
import Buat from './layar/buat-tiket'
import Stack from './layar/stack'

const Tab = createBottomTabNavigator();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  };
  render(){
    return (
      <NavigationContainer>

        <Tab.Navigator screenOptions={{headerShown:false}}>
          <Tab.Screen name="Home" component={Stack} 
          options={{
            headerShown: false,
            tabBarLabel :'Home',
            tabBarIcon:()=>(
              <Icon name={'home'}  size={28}/>
            )
          }}
          />
          
          <Tab.Screen name="Booking" component={Pesanan}
          options={{
            headerShown: false,
            tabBarLabel :'Pemesanan',
            tabBarIcon:()=>(
              <Icon name={'book'}  size={28}/>
            )
          }}
          />
          
          <Tab.Screen name="Pembatalan" component={Tiket}
          options={{
            headerShown: false,
            tabBarLabel :'Pembatalan',
            tabBarIcon:()=>(
              <Icon name={'close-circle'}  size={28}/>
            )
          }}
          />
          <Tab.Screen name="Lainnya" component={Buat}
          options={{
            headerShown: false,
            tabBarLabel :'Lainya',
            tabBarIcon:()=>(
              <Icon name={'apps'}  size={28}/>
            )
          }}
          />
        </Tab.Navigator>

        

      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;