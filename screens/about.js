import React from 'react';
import { StyleSheet,View, Text } from 'react-native';

export default function about(){
    return(
        <View style={styles.container}>
        <Text>About Screen</Text>
    </View>
    )
    
}
const styles = StyleSheet.create({
    container:{
        padding:24,

    }
});