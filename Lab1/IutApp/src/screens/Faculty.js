import React from "react"
import { Text, View, StyleSheet } from "react-native"
import { FlatList, ScrollView } from "react-native-gesture-handler";

const Faculty = () => {
    const faculty = [
        { name: "Professor Dr. Muhammad Mahbub Alam", key: "1" },
        { name: "Professor Dr. Abu Raihan Mostofa Kamal", key: "2" },
        { name: "Professor Dr. Md. Hasanul Kabir", key: "3" },
        { name: "Professor Dr. Kamrul Hasan", key: "4" },
        { name: "Mr. Mohayeminul Islam", key: "5" },
        { name: "Ms. Tajkia Rahman Toma", key: "6" },
        { name: "Mr. Ridwan Kabir", key: "7" },
        { name: "Mr. Tasnim Ahmed", key: "8" },
        { name: "Mr. Fardin Saad", key: "9" },
        { name: "Md. Jubair Ibna Mostafa", key: "10" },
        { name: "Ms. Sadia Sharmin", key: "11" },
    ];
    return (
        //<ScrollView style={styles.ScrollViewStyle}>

        <FlatList
            style={styles.FlatListStyle}
            showsVerticalScrollIndicator={false}
            data={faculty}
            renderItem={
                function ({ item }) {
                    return (
                        <Text style={styles.TextStyle}>{item.key}.  {item.name} </Text>
                    )
                }
            }
        />
        //</ScrollView>
    );
}
const styles = StyleSheet.create(
    {
        /*ScrollViewStyle: {
            backgroundColor: '#c6d7eb',
        },*/

        TextStyle: {
            fontSize: 15,
            color: '#1e3d59',
            textAlign: "left",
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
            paddingBottom: 10,

        },
        FlatListStyle: {
            textAlign: 'left',
            backgroundColor: '#c6d7eb',
        }
    }
)

export default Faculty;