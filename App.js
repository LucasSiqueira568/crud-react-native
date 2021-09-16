import React from 'react';
// import {Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import UserList from './src/components/UserList'
import UserForm from './src/components/UserForm'
import { Button, Icon } from 'react-native-elements';
import { UserProvider } from './src/Context/UsersContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <UserProvider>

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="UserList"
        screenOptions={screnOptions}
        >

        <Stack.Screen
          name="UserList"
          component={UserList}
          options={({ navigation }) => {
            return {
              title: "Lista de usuários",
              headerRight: () => (
                <Button
                onPress={() => navigation.navigate('UserForm')}
                type="clear"
                icon={<Icon name="add" size={25} color="white" />}
                />
                
                )
              }
              
            }
          }
          
          />
        <Stack.Screen
          name="UserForm"
          component={UserForm}
          options={{
            title: "Formulário de Cadastro"
            
          }}
          
          />


      </Stack.Navigator>
    </NavigationContainer>
          </UserProvider>
  )
}

const screnOptions = {
  headerStyle: {
    backgroundColor: '#0077b6'
  },
  headerTintColor: '#FFF',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
}

