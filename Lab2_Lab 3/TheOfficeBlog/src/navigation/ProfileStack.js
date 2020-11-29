import React from "react";
import { createStackNavigator } from "@react-navigation/stack"

import ProfileScreen from "../screens/ProfileScreen"
import EditProfileScreen from "../screens/EditProfileScreen";

const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => {
    return (
        <ProfileStack.Navigator initialRouteName="Profile">
            <ProfileStack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ headerShown: false }} />
            <ProfileStack.Screen
                name="Edit Profile"
                component={EditProfileScreen}
                options={{ headerShown: false }} />
        </ProfileStack.Navigator>
    );
}
export default ProfileStackScreen;