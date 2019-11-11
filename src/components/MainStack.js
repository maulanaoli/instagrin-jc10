import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import DrawerMain from './DrawerMain';

const MainStack = createAppContainer(
  createStackNavigator(
    {
      Login: LoginForm,
      Register: RegisterForm,
      DrawerMain: ({navigation}) => (
        <DrawerMain screenProps={{rootStackNavigator: navigation}} />
      ),
    },
    {
      initialRouteName: 'Login',
      headerMode: 'none',
    },
  ),
);

export default MainStack;
