import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import Child from './child';

const Parent = () => {

  const [count, setCount] = useState(0);
  const [item, setItem] = useState(1);

  function updateCount(){
    setCount(count + 1);
  }
  function updateItem() {
    setItem(item * 12);
  }

  return (
    <View>
      
      <Text style={{fontSize:50}}>Props</Text>

      <Button title='counter' onPress={updateCount}/>
      <Button title='Item Counter' onPress={updateItem}/>


      <Text style={{fontSize:20}}>Count : {count}</Text>

      <Child data={item}/>

    </View>
  )
}

export default Parent;