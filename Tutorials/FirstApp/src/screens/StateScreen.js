import React, { useState } from "react";
import { ScrollView, View, Button, StyleSheet, Text } from "react-native"
const Separator = () => {
    return (
        <View style={styles.SeparatorStyle} />
    );
}

//Three things to consider for state variable - which variable, variable type, initial value 

const StateScreen = (props) => {
    let [Counter, setCounter] = useState(0);
    return (
        <ScrollView style={styles.ScrollViewStyle}>
            <View style={styles.ViewStyle}>
                <Text style={styles.TextStyle}>{Counter}</Text>
                <Separator />
                <Button
                    title="Increase"
                    color="green"
                    onPress={
                        function () {
                            setCounter(Counter + 1);
                            console.log(Counter + 1);
                        }
                    }
                />
                <Separator />
                <Button
                    title="Decrease"
                    color="red"
                    onPress={
                        function () {
                            setCounter(Counter - 1);
                            console.log(Counter - 1)
                        }
                    }
                />
                <Separator />
                <Separator />
                <Button
                    title='Box Screen'
                    onPress={
                        function () {
                            props.navigation.navigate("Box Screen")
                            console.log("Images Buttion is clicked!")
                        }
                    }
                />
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create(
    {
        TextStyle: {
            fontSize: 40,
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
export default StateScreen;