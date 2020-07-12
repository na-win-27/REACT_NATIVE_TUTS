/******************************************
 *  Author : na-win-27
 *  Created On : Sun Jul 12 2020
 *  File : TextScreen.js
 *******************************************/
import React, { useState } from 'react';
import { View,StyleSheet,Text,TextInput } from 'react-native';

const TextScreen = () => {
    const [name,setName]=useState("")
    return (
        <View>
        <Text>ENTER NAME</Text>
        <TextInput style={styles.input}
        autoCapitalize="characters"
        autoCorrect={true}
        value={name}
        onChangeText={(newName)=>{
            setName(newName)
        }}
        />

        <Text>MY NAME IS :{name}</Text>
        </View>
    );
};

const styles=StyleSheet.create({
    input:{
        padding:8,
        margin:15,
        borderColor:"black",
        borderWidth:5

    }
})

export default TextScreen;