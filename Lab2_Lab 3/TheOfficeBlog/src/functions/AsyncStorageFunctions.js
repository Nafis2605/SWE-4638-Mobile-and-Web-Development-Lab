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

const getPostID = async () => {
    let postID = []
    try {
        postID = await AsyncStorage.getAllKeys()
        return postID;
    } catch (error) {
        console.log(error)
    }
}

const getPosts = async () => {
    let postID = await getPostID();
    let posts = []
    postID.forEach(async (postID) => {
        if (postID.startsWith('post')) {
            posts.push(await getData(postID))
            return posts;
        }
    }
    );
}

export { storeData, getData, removeData, getPostID, getPosts };
