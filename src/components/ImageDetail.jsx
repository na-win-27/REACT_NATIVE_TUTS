import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native'

const ImageDetail = (props) => {
    return (
        <View>
        <Image style={styles.imageStyles} source={props.imageSource}/>
        <Text>{props.title}</Text>
        <Text>{props.score}</Text>
        </View>
    );
};

const styles=StyleSheet.create({
    imageStyles:{
        height:200,
        width:350
    }
})

export default ImageDetail;