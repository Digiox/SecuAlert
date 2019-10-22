import React from 'react';
import { Plateform , Dimensions } from "react-native";
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from "react-navigation-drawer"

import Notifs from "../Notifs"
import Main from "../Main";

const WIDTH = Dimensions.get('window').width;
const DrawerConfig = {
    drawerWidth: WIDTH*0.83
}

const DrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: Main
        },
        Notifs : {
            screen: Notifs
        }
},
DrawerConfig
)

export default createAppContainer(DrawerNavigator);
