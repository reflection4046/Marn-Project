import { View, Text, SafeAreaView,StatusBar,Platform} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from "./screens/Home"


const stack = createNativeStackNavigator();


const Main = () => {
  return (
  <NavigationContainer>
    <stack.Navigator>

      <stack.Group>
          <stack.Screen name ="home" component={Home} />
      </stack.Group>

 
    </stack.Navigator>
    </NavigationContainer>
  );
  
}

export default Main