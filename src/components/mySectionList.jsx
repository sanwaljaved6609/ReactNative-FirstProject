import { View, Text, SectionList, StyleSheet } from 'react-native'
import React from 'react'

const MySectionList = () => {

    const list = [
        {
            title: "Fruits",
            data : [

                {id: 1, name: "Mango"},
                {id: 2, name: "Apple"},
                {id: 3, name: "Banana"},
            ]
        },
        {
            title: "Vegetables",
            data : [

                {id: 4, name: "Carrot"},
                {id: 5, name: "Lady Finger"},
                {id: 6, name: "Potato"},
            ]
        }
    ]

    const renderItem = ({item}) => (
        <View>
            <Text style={style.values}>{item.name}</Text>
        </View>
    )
    const sectionHeader = ({section}) => (
        <View>
            <Text style={style.sectionHeader}>{section.title}</Text>
        </View>
    )

  return (
    <View style={style.container}>
      <Text style={{fontSize:30, fontWeight:900, textAlign:"center"}}>MySectionList</Text>

      <SectionList
      sections={list}
      renderItem={renderItem}
      renderSectionHeader={sectionHeader}
      keyExtractor={(item)=> item.id.toString()}
      />
    </View> 
  )
}

export default MySectionList

const style = StyleSheet.create({
    container:{
        margin:20
    },
    sectionHeader:{
        fontSize:25,
        fontWeight:500,
        backgroundColor:"crimson",
        color:"white",
        textAlign:"center",
        borderRadius:10,
        margin:5,
        padding:15
    },
    values:{
        fontSize:20,
        backgroundColor:"yellow",
        margin:5,
        padding:10,
        textAlign:"center",
        borderWidth:2,
        borderColor:"orange",
        borderRadius:10
    }
})