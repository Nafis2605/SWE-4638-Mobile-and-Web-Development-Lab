import React from "react"
import { View, Button, ScrollView, StyleSheet, Text, AsyncStorage } from "react-native"

const Separator = () => {
    return (
        <View style={styles.SeparatorStyle} />
    );
}

const AsyncStorageScreen = () => {
    //the for loop is inside the await function. It will run concurrently. 
    /* let func = async () => {
        let i = 0;
        await function () {
            for (i = 0; i < 1000000000; i++) {

            };
            alert("Done")
        }
    }
    func(); */

    const setData = async (key, value) => {
        try {
            value = JSON.stringify(value)
            await AsyncStorage.setItem(key, value);
            console.log("Data is saved successfully!");
        }

        catch (error) {
            alert(error);
            console.log(error);
        }
    };

    const getData = async (key) => {

        try {
            let data = await AsyncStorage.getItem(key);

            if (data != null) {
                data = JSON.parse(data)
                console.log(data)
            }
            else {
                console.log("No data exists!")
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    const removeData = async (key) => {
        try {
            await AsyncStorage.removeItem(key);
            console.log("Data is removed!")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <ScrollView style={styles.ScrollViewStyle}>
            <View style={styles.ViewStyle}>
                <Text style={styles.TextStyle}>Async Storage Screen</Text>
                <Separator />
                <Button
                    title="Save Data"
                    onPress={
                        function () {
                            setData("Course Info", { CourseCode: "SWE 4637", CourseName: "Mobile and Web Development" });
                            console.log("Get Data is clicked!");
                        }
                    }
                />
                <Separator />
                <Button
                    title="Retrieve Data"
                    onPress={
                        function () {
                            getData("Course Info")
                            console.log("Retrieve Data is clicked!")
                        }
                    }
                />
                <Separator />
                <Button
                    title="Remove Data"
                    onPress={
                        function () {
                            removeData("Course Info")
                            console.log("Remove Data is clicked!")
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
            fontSize: 25,
            color: "#9C27B0",
            textAlign: "center",
            padding: 5
        },
        ScrollViewStyle: {
            backgroundColor: "#FFDEAD",
        },
        ViewStyle: {
            margin: 20
        },
        SeparatorStyle: {
            marginVertical: 5,
        }

    }
);
export default AsyncStorageScreen;
