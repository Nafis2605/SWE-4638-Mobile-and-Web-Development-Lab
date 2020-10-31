import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Text, TextInput, Switch } from 'react-native'
import { Picker } from '@react-native-community/picker';

const Separator = () => {
    return (
        <View style={styles.SeparatorStyle} />
    );
}
const InputScreen = () => {
    let [status, setStatus] = useState("");

    let [IsEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    }

    let [Language, setLanguage] = useState("English")
    return (
        <ScrollView style={styles.ScrollViewStyle}>
            <View style={styles.ViewStyle}>
                <Text style={styles.TextStyle}>{status}</Text>
                <Separator />
                <TextInput
                    style={styles.InputStyle}
                    placeholder="What's on your mind?"
                    onChangeText={
                        function (cuurentInput) {
                            setStatus(cuurentInput);
                        }
                    }
                    onSubmitEditing={
                        function () {
                            console.log(status)
                        }
                    }
                //secureTextEntry={true}
                />
                <Separator />
                <Switch
                    value={IsEnabled}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={IsEnabled ? "#f5dd4b" : "#f4f3f4"}
                    onValueChange={toggleSwitch}
                />
                <Separator />
                <Picker
                    mode="dialog"
                    style={styles.PickerStyle}
                    selectedValue={Language}
                    onValueChange={
                        function (itemValue, itemIndex) {
                            setLanguage(itemValue);
                        }
                    }
                >
                    <Picker.Item
                        label="English"
                        value="English"
                    />
                    <Picker.Item
                        label="Bengali"
                        value="Bengali"
                    />
                    <Picker.Item
                        label="Arabic"
                        value="Arabic"
                    />
                    <Picker.Item
                        label="Hindi"
                        value="Hindi"
                    />
                </Picker>
                <Separator />
                <Text style={styles.TextStyle}>{Language}</Text>
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
        },
        InputStyle: {
            borderColor: "rgb(0,0,0)",
            borderWidth: 5,
            padding: 20,
            backgroundColor: "rgb(255,255,255)",
        },
        PickerStyle: {
            backgroundColor: "rgb(255,255,255)",
        }
    }
);
export default InputScreen;


//For picker ->  npm install @react-native-community/picker --save