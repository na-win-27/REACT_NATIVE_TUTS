/******************************************
 *  Author : na-win-27
 *  Created On : Sun Jul 12 2020
 *  File : ColourScreen.js
 *******************************************/

 import React,{useState} from 'react';
 import {Button,View,StyleSheet,FlatList} from 'react-native'
 
 const ColourScreen = () => {

    
    const [colours,setColours]=useState([])
    
    console.log(colours)
     return (
         <View>
         <Button title="ADD COLOUR" onPress={()=>{
             setColours([...colours,randomRGB()])
         }}/>

         
         <FlatList
         keyExtractor={item=>item}
         data={colours}
         renderItem={({item})=>{
             return(
                 <View style={{height:100,width:100,backgroundColor:item}}></View>
             )
         }}/>
         
         </View>
     );
 };
 

 const randomRGB=()=>{
     const red=Math.floor(Math.random()*256);
     const green=Math.floor(Math.random()*256);
     const blue=Math.floor(Math.random()*256);

     return `rgb(${red},${green},${blue})`
 }

 const styles=StyleSheet.create({

 })
 export default ColourScreen;