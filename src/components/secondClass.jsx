import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class SecondClass extends Component {
     constructor(){
            super()
            this.state = {
                name:"Sanwal"
            }
        }
  render() {
    return (
      <View>
        <Text>Name: {this.state.name}</Text>
        <Text>Age: {this.props.data}</Text>
      </View>
    )
  }
}

export default SecondClass