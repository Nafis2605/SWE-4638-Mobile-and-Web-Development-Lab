import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Card, Avatar } from "react-native-elements";


const NotificationCard = (props) => {
    return (

        <Card>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Avatar
                    containerStyle={{ backgroundColor: "cyan" }}
                    rounded
                    icon={{
                        name: "thumbs-o-up",
                        type: "font-awesome",
                        color: "black",
                    }}
                    activeOpacity={1}
                />
                <Text style={{ paddingHorizontal: 10 }}>
                    {props.author} Liked Your Post.
              </Text>
            </View>
        </Card>

    )
}

export default NotificationCard;