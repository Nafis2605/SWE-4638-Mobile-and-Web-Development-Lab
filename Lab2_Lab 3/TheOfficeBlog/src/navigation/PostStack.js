import React from "react";
import { createStackNavigator } from "@react-navigation/stack"

import HomeTabScreen from "../navigation/HomeTab"
import PostScreen from "../screens/PostScreen";

const PostStack = createStackNavigator();

const PostStackScreen = () => {
    return (
        <PostStack.Navigator initialRouteName="Home">
            <PostStack.Screen
                name="Home"
                component={HomeTabScreen}
                options={{ headerShown: false }} />
            <PostStack.Screen
                name="Post"
                component={PostScreen}
                options={{ headerShown: false }} />
        </PostStack.Navigator>
    );
}
export default PostStackScreen;