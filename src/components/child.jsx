import { View, Text } from 'react-native'
import React from 'react'

const Child = (props) => {

    const data = props.data;

  return (
    <View>
      <Text style={{fontSize:20}}>Props Data: {data}</Text>
    </View>
  )
}

export default Child