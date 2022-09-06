import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogIn from './page/LogIn';
import SignUp from './page/SignUp';
import Rooms from './page/Rooms';
import ChatRoom from './page/ChatRoom';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
function Router() {
  const [userSession, setUserSession] = useState();
  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);
  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Log In" component={LogIn} />
        <Stack.Screen name="Sign Up" component={SignUp} />
      </Stack.Navigator>
    );
  };
  const MainStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Rooms"
          component={Rooms}
          options={{
            headerTintColor: '#3F72AF',
            headerRight: () => (
              <Icon
                name="logout"
                size={30}
                color={'red'}
                onPress={() => auth().signOut()}
              />
            ),
            headerStyle: {
              backgroundColor: '#CBF1F5',
            },
          }}
        />
        <Stack.Screen name="Chat Room" component={ChatRoom} options={{
            headerTintColor: '#3F72AF', headerStyle: {
              backgroundColor: '#CBF1F5',
            }}}/>
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!userSession ? (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        ) : (
          <Stack.Screen name="MainStack" component={MainStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
