import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header=()=>{
    return(
        <View style={styles.header}/>
    )
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: "#fff",
      height: 60,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      elevation: 2,
      marginBottom:10,
    }
  })
  

export default Header;
