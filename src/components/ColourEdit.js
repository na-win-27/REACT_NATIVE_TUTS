/******************************************
 *  Author : na-win-27
 *  Created On : Sun Jul 12 2020
 *  File : ColourEdit.js
 *******************************************/
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
      <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;