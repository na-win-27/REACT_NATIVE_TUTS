import React from 'react';
import {View,Text,StyleSheet} from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    return (
        <View>
      
        <ImageDetail  title="VIJAY" imageSource={require('../../assets/8.png')}  score={10}/>
        <ImageDetail title="vijay" imageSource={require('../../assets/3.png')} score={9} />
        </View>
    );
};

const styles=StyleSheet.create({

})

export default ImageScreen;