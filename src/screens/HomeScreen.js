import React from "react";
import { Text, StyleSheet,View,Button,TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  
  return( 
    
    <View>
    <Text style={styles.text}>NAVIN</Text>
    <Button title="GO TO COMPONENTS"  
    onPress={()=>props.navigation.navigate("Hello")}
    />

    <Button title="GO TO LIST" onPress={()=>props.navigation.navigate("List")} />

   <Button onPress={()=>props.navigation.navigate("Image")} title="IMAGE SCREEN"></Button>


   <Button onPress={()=>props.navigation.navigate("Counter")} title="COUNTER SCREEN"></Button>

   <Button onPress={()=>props.navigation.navigate("Colour")} title="COLOUR SCREEN"/>

   <Button onPress={()=>props.navigation.navigate("Square")} title="COLOUR CHANGER SCREEN"/>

   <Button onPress={()=>props.navigation.navigate("Text")} title="Text SCREEN"/>
    </View>
    )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40
  }
});

export default HomeScreen;
