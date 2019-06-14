import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainScreen from './Main';
import Login from './Login';
import signup from './signup';
import about from './about';
import Menu from './Menu';


const AppNavigator = createStackNavigator(
        {
            Utama: MainScreen,
            Login:Login,
            Signup:signup,
            About:about,
            Menu:Menu,
        },
        {
            initialRouteName: "Utama"
        }
        );
export default createAppContainer(AppNavigator);