import { Text, View } from 'react-native'
import React, { Component } from 'react'
import SecondClass from '../components/secondClass'

export class ClassComponent extends Component {
  render() {
    const age = 30;
    return (
      <View>
        <Text style={{fontSize:30, marginVertical:10, textAlign:'center'}}>My Class Component</Text>
        <SecondClass data={age}/>
      </View>
    )
  }
}

export default ClassComponent