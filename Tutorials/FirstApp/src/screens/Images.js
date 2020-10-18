import React from "react"
import { Image, ScrollView, StyleSheet } from "react-native"

const Images = (props) => {
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
            < Image
                resizeMode='contain'
                source={require("./../../assets/pic/IUT_Logo.png")}
                style={styles.ImageStyle}

            />

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