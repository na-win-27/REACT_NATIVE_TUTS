import React from 'react';
import {Text,View,StyleSheet,FlatList} from 'react-native'

const ListScreen = () => {

    const friends=[
        {name:"none 1"},
        {name:"none 2"},
        {name:"none 3"},
        {name:"none 4"},
        {name:"none 5"},
        {name:"none 6"},
        {name:"none 7"},
        {name:"none 8"},
        {name:"none 9"},
        ]


    return (
        <FlatList 
        keyExtractor={(friend)=>{
            return friend.name
        }}
        data={friends}
        renderItem={({item})=>{
            return(
                <Text>{item.name}</Text>
            )
        }}
        />
        
    );
};

const styles=StyleSheet.create({

})
export default ListScreen;