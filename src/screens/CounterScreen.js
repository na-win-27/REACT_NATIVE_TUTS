/******************************************
 *  Author : na-win-27
 *  Created On : Sun Jul 12 2020
 *  File : CounterScreen.js
 *******************************************/
import React,{useState, useReducer} from 'react'
import {View,Text,StyleSheet,Button} from 'react-native'

const reducer=(state,action)=>{
    switch(action.type){
        case 'add':
            return {...state,count:state.count+action.payload}
        case 'sub':
            return {...state,count:state.count-action.payload}
        default:
            return state
    }
}

const CounterScreen = () => {
    const [state,dispatch]=useReducer(reducer,{count:0})
    return (
       <View>
       <Button title="INCREASE"  onPress={()=>{
           dispatch({type:'add',payload:10})
       }}/>
       <Button title="DECREASE" onPress={()=>{
        dispatch({type:'sub',payload:10})
       }}/>
       <Text>CURRENT COUNT:{state.count}</Text>
       </View>
    );
};


const styles=StyleSheet.create({

})

export default CounterScreen;