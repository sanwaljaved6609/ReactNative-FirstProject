import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Loader = () => {

    const [loader, setLoader] = useState(true)
  return (
    <View style={styles.container}>
      {/* <Text style={{fontSize:30, marginVertical:20, textAlign:'center'}}>Loader</Text> */}

      <TouchableOpacity style={{alignItems:'center'}}>
        {loader && (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="blue" />
            <Text style={styles.loadingText}>Loading...</Text>
          </View>
        )}
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
        onPress={() => setLoader(!loader)}
      >
        <Text style={styles.buttonText}>
          {loader ? 'Hide Loader' : 'Show Loader'}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Loader


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        textAlign:'center',
    },
  button: {
    backgroundColor: 'green',
    margin: 20,
    height: 60,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    padding: '13',
    fontWeight: 'bold',
  },
  loaderContainer:{
    width:"30%",
    height:130,
    backgroundColor:"#f0f0f0",
    justifyContent:'center',
    alignItems:'center',
    elevation:5
  },
  loadingText:{
    fontSize:15,
    fontWeight:'bold',
    marginVertical:10
  }
});