// import { Text, Button, Alert } from 'react-native'
import { View } from 'react-native'
import React from 'react'
// import Parent from './src/components/parent.jsx'
// import InputField from './src/components/inputField'
// import Styling from './src/components/styling'
// import MyFlatList from './src/components/flatList'
// import MySectionList from './src/components/mySectionList'
import LoginForm from './src/components/loginForm'

const App = () => {

  // const [name, setName] = useState("Sanwal");

  // function updateName(){
  //   setName('Sanwal Javed')
  //   }

  return (
    <View>

      {/* <Text style = {{ fontSize: 40, backgroundColor: "yellow", marginBottom: 30 }}>First Project </Text>

      <Text style={{fontSize:25}} > My name is {name} : </Text>

      <Button title='Press me' onPress={()=>updateName()}/>  */}

      {/* <Parent/> */}

      {/* <InputField/> */}

      {/* <Styling /> */}

      {/* <MyFlatList/> */}

      {/* <MySectionList/> */}

      <LoginForm/>


    </View>
  )
}

export default App