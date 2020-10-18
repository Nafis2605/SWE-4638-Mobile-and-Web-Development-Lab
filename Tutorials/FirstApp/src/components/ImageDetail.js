import React from 'react';
import { Text, Image, StyleSheet, ScrollView, View } from 'react-native'

const ImageDetail = (props) => {
    let ImageSource = undefined;
    if (props.title == "Beach") {
        ImageSource = require("../../assets/pic/beach.jpg");
    }
    else if (props.title == "Forest") {
        ImageSource = require("../../assets/pic/forest.jpg");
    }
    else if (props.title == "Mountain") {
        ImageSource = require("../../assets/pic/mountain.jpg");
    }
    else {
        ImageSource = require("../../assets/pic/IUT_Logo.png");
    }

    return (
        <View style={styles.ViewStyle}>
            <Text style={styles.TextStyle}> {props.title}</Text>
            <Image

                source={ImageSource}
                style={styles.ImageStyle}
            />
        </View>
    )
}

const styles = StyleSheet.create(
    {
        TextStyle: {
            fontSize: 20,
            textAlign: "center",
        },
        ImageStyle: {
            width: 250,
            height: 250,
            margin: 5,
            borderColor: "red",
            borderWidth: 5,
        },
        ViewStyle: {
            borderColor: "blue",
            borderWidth: 5,
            margin: 5,
            flexDirection: "row",
            alignSelf: "flex-end"
        }

    }
)

export default ImageDetail;