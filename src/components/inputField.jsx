import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const InputField = () => {

    const [value, setValue] = useState('');

  return (
    <View>

      <Text style={{fontSize:30, marginTop: 20}}>InputField</Text>

      <TextInput 
      style={{fontSize:30, borderWidth:2, borderColor:"green", margin:10}} 
      placeholder="Type your name here..."
    //   value={value} 
      onChangeText={(value)=>setValue(value)} />

      <Button title='clear' onPress={()=>{setValue(value)}}/>

      <Text style={{fontSize:25, marginTop:10}}>User Name: {value}</Text>

    </View>
  )
}

export default InputField