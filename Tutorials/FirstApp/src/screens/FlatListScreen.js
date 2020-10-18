import React from "react"
import { Text, ScrollView, StyleSheet } from "react-native"
import { FlatList } from "react-native-gesture-handler";

const FlatListScreen = () => {
    const uni = [
        { name: "IUT", key: "1" },
        { name: "BUET", key: "2" },
        { name: "DU", key: "3" },
        { name: "CUET", key: "4" },
        { name: "KUET", key: "5" },
        { name: "MIST", key: "6" },
    ];
    return (
        //<ScrollView style={styles.ViewStyle} >
        //Flat List itself is scrollable. 

        <FlatList
            style={styles.FlatListStyle}
            showsVerticalScrollIndicator={false}
            data={uni}
            renderItem={
                function ({ item }) {
                    return (
                        <Text style={styles.TextStyle}>{item.key}. {item.name} </Text>
                    )
                }
            }
        />
        //</ScrollView>
    );
};

const styles = StyleSheet.create(
    {
        TextStyle: {
            fontSize: 25,
            color: "#9C27B0",
            textAlign: "center",
            paddingTop: 10
        },
        FlatListStyle: {
            backgroundColor: "#FFDEAD",
        }

        /*ViewStyle: {
            backgroundColor: "grey",
            borderColor: "red",
            borderWidth: 5
        }*/
    }
);

export default FlatListScreen;