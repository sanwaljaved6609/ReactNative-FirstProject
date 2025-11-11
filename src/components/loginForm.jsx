import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet} from 'react-native'
import React, { useState } from 'react'

const LoginForm = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleLogin() {
        Alert.alert( "Login Details", `Email: ${email}\nPassword: ${password}`, [{text:"ok"}] );

        setEmail("")
        setPassword("")
    }

  return (
    <View style={style.container}>
      <Text style={{fontSize:30, fontWeight:"bold", textAlign:'center', marginBottom:30}}>Login</Text>

      <TextInput 
      placeholder='Email'
      value={email}
      onChangeText={setEmail}
      keyboardType='email-address'
      autoCapitalize='none'
      style={style.input}
      />

      <TextInput 
      placeholder='Password'
      value={password}
      onChangeText={setPassword}
      secureTextEntry
      style={style.input}
      />

      <TouchableOpacity style={style.button} onPress={handleLogin}>
        <Text style={style.btnText}>Login</Text>
      </TouchableOpacity>

    </View>
  )
}

export default LoginForm


const style = StyleSheet.create({
    container:{
        marginTop:50,
        justifyContent:"center",
        // backgroundColor: "#f0f0f0",
        paddingHorizontal:20,
        paddingVertical:20
    },
    input:{
        backgroundColor:"white",
        height:50,
        borderWidth:1,
        borderRadius:10,
        borderColor:"black",
        margin:10,
        fontSize:20,
    },
    button:{
        backgroundColor:"blue",
        height:45,
        textAlign:'center',
        justifyContent:'center',
        borderRadius:10,
        marginHorizontal:10
    },
    btnText:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        color:"white"
    }

})