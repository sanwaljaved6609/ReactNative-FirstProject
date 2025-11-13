import { View, Text, Alert, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {

    const [count, setCount] = useState(1);
    const [score, setScore] = useState(9);

    // useEffect(()=>{
    //     Alert.alert("Success", "This is useffect", [{Text: "Ok"}])
    // },[]);

    useEffect(()=>{
        Alert.alert("Success", "This is Counter", [{Text: "Ok"}])
    },[count]);
    useEffect(()=>{
        Alert.alert("Success", "This is Scorer", [{Text: "Ok"}])
    },[score]);

  return (
    <View>
      <Text style={{fontSize:30, marginVertical:30, textAlign:'center'}}>UseEffectHook</Text>

      {/* <Text style={{fontSize:20}}>Count:{count}</Text>
      <Button title="counter" onPress={()=>setCount(count+1)}/> */}

      <Text style={{fontSize:20}}>Count: {count}</Text>
      <Text style={{fontSize:20}}>Score: {score}</Text>

      <Button title='counter' onPress={()=>setCount(count+1)}/>
      <Button title='scorer' onPress={()=>setScore(score*7)}/>


    </View>
  )
}

export default UseEffectHook


