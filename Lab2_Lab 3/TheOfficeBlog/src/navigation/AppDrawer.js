import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import PostStackScreen from "./../navigation/PostStack";
import ProfileStackScreen from "../navigation/ProfileStack"


const AppDrawer = createDrawerNavigator();

const AppDrawerScreen = () => {
    return (
        <AppDrawer.Navigator>
            <AppDrawer.Screen name="Home" component={PostStackScreen} />
            <AppDrawer.Screen name="Profile" component={ProfileStackScreen} />
        </AppDrawer.Navigator>
    );
}

export default AppDrawerScreen;