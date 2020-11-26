import React from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

const storeData = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
        alert(error);
    }
};

const getData = async (key) => {
    try {
        let data = await AsyncStorage.getItem(key);
        if (data != null) {
            const jsonData = JSON.parse(data);
            return jsonData;
        } else {
            alert("No data is available!");
        }
    } catch (error) {
        alert(error);
    }
};
const removeData = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
        alert("Data is removed!")
    } catch (error) {
        console.log(error)
    }
}

export { storeData, getData, removeData };
