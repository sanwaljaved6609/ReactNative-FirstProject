import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useRef } from 'react'

const UseRefHook = () => {

    const myRef = useRef();

    function handleRef() {
        myRef.current.setNativeProps({
            text:"Sanwal",
            style:{backgroundColor:"lightpink"}
        })

        myRef.current.focus();
    }

  return (
    <View style={styles.conatiner}>
      <TextInput
      ref={myRef}
      style={styles.input}
      placeholder='Enter Your Text'
      color="grey"
      />

      <TouchableOpacity style={styles.button} onPress={handleRef}>
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default UseRefHook


const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"grey"
    },
    input:{
        backgroundColor:"white",
        width:"90%",
        height:50,
        borderRadius:10,
        elevation:4,
        margin:20,
        fontSize:25,
    },
    button:{
        backgroundColor:"blue",
        width:"90%",
        height:42,
        borderRadius:10,
        elevation:5,
        opacity:0.9
    },
    btnText:{
        color:"white",
        fontSize:24,
        fontWeight:"bold",
        textAlign:'center'
    }


})