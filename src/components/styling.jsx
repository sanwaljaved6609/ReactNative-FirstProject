import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import styles from '../styles/style'

const Styling = () => {
  return (
    <View>
      <Text style={{fontSize:35, margin:30}}>Styling</Text>

      <Text style={style.internal}>Internal Styling</Text>
      
      <Text style={styles.external}>External Styling</Text>
      
    </View>
  )
}

export default Styling

const style = StyleSheet.create({
    internal : {
        fontSize:35,
        backgroundColor: "green",
        borderWidth:3,
        borderColor:"yellow",
        color:"white",
        margin: 10,
        padding:10
    }
})