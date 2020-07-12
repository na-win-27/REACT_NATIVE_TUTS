import React from 'react';
import {Text,StyleSheet,View} from 'react-native'

const Hello = () => {
    return (
        
       <View> 
        <Text style={styles.textStyle}>HELLO</Text> 
       <Text style={styles.textStyle}>Hi</Text> 
       </View>
        
    );
};

const styles=StyleSheet.create({
    textStyle:{
        fontSize:30,
        textAlign:"center",
        textDecorationColor:"blue",
        textAlignVertical:"center",
        fontStyle:"italic"
    
    }
})

export default Hello;