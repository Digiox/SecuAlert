import React from 'react';
import { Plateform , Dimensions } from "react-native";
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from "react-navigation-drawer"

import Notifs from "../Notifs"
import Main from "../Main";
import Settings from "../Settings";
import LogIn from "../LogIn"
import Register from "../Register"
import MenuDrawer from "./MenuDrawer"

const WIDTH = Dimensions.get('window').width;
const DrawerConfig = {
    drawerWidth: WIDTH*0.83,
    contentComponent: ({ navigation }) => {
        return (<MenuDrawer navigation={navigation}/>)
    }
}

const DrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: Main
        },
        Notifs: {
            screen: Notifs
        },
        Settings: {
            screen: Settings
        },
        LogIn: {
            screen: LogIn
        },
        Register: {
            screen: Register
        }
},
DrawerConfig
)

export default createAppContainer(DrawerNavigator);
