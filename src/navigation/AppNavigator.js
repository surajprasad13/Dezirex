import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

//screens
import Splash from '../screens/Splash';
import Security from '../screens/Security';
import Login from '../screens/login/Login';
import Register from '../screens/login/Register';
import Password from '../screens/login/Password';

//profile screens
import Birthday from '../screens/profile/Birthday';
import Education from '../screens/profile/Education';
import Gender from '../screens/profile/Gender';
import Hobbies from '../screens/profile/Hobbies';
import Interest from '../screens/profile/Interest';
import Lifestyle from '../screens/profile/Lifestyle';
import Location from '../screens/profile/Location';
import Photos from '../screens/profile/Photos';
import Religion from '../screens/profile/Religion';
import Someone from '../screens/profile/Someone';
import Who from '../screens/profile/Who';
import MainNavigator from './MainNavigator';
import Name from '../screens/profile/Name';
import Height from '../screens/profile/Height';
import Selfie from '../screens/profile/Selfie';
import Signup from '../screens/login/Signup';
import Gmail from '../screens/profile/Gmail';

function AppNavigator() {
  return (
    <Stack.Navigator
      //initialRouteName="Login"
      headerMode="none"
      mode="modal"
      screenOptions={{gestureDirection: 'horizontal'}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Security" component={Security} />
      <Stack.Screen name="Password" component={Password} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Gmail" component={Gmail} />
      <Stack.Screen name="Name" component={Name} />
      <Stack.Screen name="Birthday" component={Birthday} />
      <Stack.Screen name="Who" component={Who} />
      <Stack.Screen name="Gender" component={Gender} />
      <Stack.Screen name="Height" component={Height} />
      <Stack.Screen name="Interest" component={Interest} />
      <Stack.Screen name="Education" component={Education} />
      <Stack.Screen name="Religion" component={Religion} />
      <Stack.Screen name="Lifestyle" component={Lifestyle} />
      <Stack.Screen name="Hobbies" component={Hobbies} />
      <Stack.Screen name="Photos" component={Photos} />
      <Stack.Screen name="Selfie" component={Selfie} />
      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="Someone" component={Someone} />
      <Stack.Screen name="Main" component={MainNavigator} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
