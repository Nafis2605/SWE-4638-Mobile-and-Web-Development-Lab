import React, { useState } from 'react';
import { ScrollView, Text, View, StyleSheet, Button } from 'react-native';
const Separator = () => {
    return (
        <View style={styles.SeparatorStyle} />
    );
}
const createRGB = () => {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let str = 'rgb(' + red + ',' + green + ',' + blue + ')';
    return str;
}
const BoxScreen = () => {
    let [Color, setColor] = useState("rgb(255, 255, 255)")
    return (
        <ScrollView style={styles.ScrollViewStyle}>
            <View style={styles.ViewStyle}>
                <Button
                    title="Change Color"
                    onPress={
                        function () {
                            setColor(createRGB())
                            console.log("Change Color is clicked")
                        }

                    }
                />
                <Separator />
                <View
                    style={
                        {
                            height: 200,
                            width: 200,
                            backgroundColor: Color,
                            alignSelf: "center",
                            borderColor: "rgb(0,0,0)",
                            borderWidth: 5
                        }
                    }
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create(
    {
        TextStyle: {
            fontSize: 25,
            color: "#9C27B0",
            textAlign: "center",
        },
        ViewStyle: {
            margin: 20
        },

        ScrollViewStyle: {
            backgroundColor: "#FFDEAD",
        },
        SeparatorStyle: {
            marginVertical: 5
        }
    }
);
export default BoxScreen;