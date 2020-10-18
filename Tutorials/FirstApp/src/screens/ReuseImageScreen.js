import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'
import ImageDetail from "../components/ImageDetail"

const ReuseImageScreen = () => {
    return (
        <ScrollView>
            <ImageDetail title="Beach" />
            <ImageDetail title="Forest" />
            <ImageDetail title="Mountain" />
        </ScrollView>
    )
}

const styles = StyleSheet.create(
    {
        TextView: {
            fontSize: 20,
        },
    }
);

export default ReuseImageScreen;

