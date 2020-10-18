import React from "react"
import { Dimensions, Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native"

const Images = (props) => {
    /* const dim = Dimensions.get("screen");
    console.log(dim.height);
    console.log(dim.width); */

    return (
        <ScrollView>
            <Image
                resizeMode='contain'
                source={
                    {
                        uri: "https://picsum.photos/seed/picsum/200/300",
                        height: 200,
                        width: 300,
                    }
                }
                style={styles.ImageStyle}
            />
            <TouchableOpacity
                onPress={
                    function () {
                        props.navigation.navigate("Flat List");
                    }
                }
            >
                < Image
                    resizeMode='contain'
                    source={require("./../../assets/pic/IUT_Logo.png")}
                    style={styles.ImageStyle}

                />
            </TouchableOpacity>
        </ScrollView>
    )
}
const styles = StyleSheet.create(
    {
        ImageStyle: {
            height: 250,
            width: 250,
            borderColor: "red",
            borderWidth: 5,
            alignSelf: "center",
            marginTop: 10,
        },

    }
)

export default Images;