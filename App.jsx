// import { Text, Button, Alert } from 'react-native'
import { View } from 'react-native'
import React from 'react'
// import Parent from './src/components/parent.jsx'
// import InputField from './src/components/inputField'
// import Styling from './src/components/styling'
// import MyFlatList from './src/components/flatList'
// import MySectionList from './src/components/mySectionList'
// import LoginForm from './src/components/loginForm'
// import Contact from './src/screens/contact/contact'
// import Grid from './src/components/grid'
// import ClassComponent from './src/components/classComponent'
// import UseEffectHook from './src/components/useEffectHook'
// import HideShowToggle from './src/components/hideShowToggle'
// import Loader from './src/components/loader'
// import UseRefHook from './src/components/useRefHook'
import ModalDialogBox from './src/components/modalDialogBox'

const App = () => {

  // const [name, setName] = useState("Sanwal");

  // function updateName(){
  //   setName('Sanwal Javed')
  //   }

  return (
    <View style={{flex:1}}>

      {/* <Text style = {{ fontSize: 40, backgroundColor: "yellow", marginBottom: 30 }}>First Project </Text>

      <Text style={{fontSize:25}} > My name is {name} : </Text>

      <Button title='Press me' onPress={()=>updateName()}/>  */}

      {/* <Parent/> */}

      {/* <InputField/> */}

      {/* <Styling /> */}

      {/* <MyFlatList/> */}

      {/* <MySectionList/> */}

      {/* <LoginForm/> */}

      {/* <Contact/> */}

      {/* <Grid/> */}

      {/* <ClassComponent/> */}

      {/* <UseEffectHook/> */}

      {/* <HideShowToggle/> */}

      {/* <Loader/> */}

      {/* <UseRefHook/> */}

      <ModalDialogBox />




    </View>
  )
}

export default App