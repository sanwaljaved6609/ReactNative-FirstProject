import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

const data = [
        {id: 1, item: "item 1"},
        {id: 2, item: "item 2"},
        {id: 3, item: "item 3"},
        {id: 4, item: "item 4"},
        {id: 5, item: "item 5"},
        {id: 6, item: "item 6"},
        {id: 7, item: "item 7"},
        {id: 8, item: "item 8"},
        {id: 9, item: "item 9"},
        {id: 10, item: "item 10"},
        {id: 11, item: "item 11"},
        {id: 12, item: "item 12"},
        {id: 13, item: "item 13"},
    ]

const Grid = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>Grid</Text>
      <ScrollView style={{flex:1}}  contentContainerStyle={styles.container}>
        {
            data.map((event)=>( 
                <View style={styles.grid}  key={event.id}>
                    <Text style={styles.gridItem}>{event.item}</Text>
                </View>
            ))
        }
      </ScrollView>
    </View>
  )
}

export default Grid


const styles = StyleSheet.create({
    mainContainer:{
        flex:1
    },
    heading:{
        fontSize:35,
        fontWeight:"bold",
        marginVertical:25,
        textAlign:'center',
        color:"darkorange"
    },
    container:{
        flexDirection:'row',
        marginHorizontal:10,
        flexWrap:'wrap',
        justifyContent:'space-between',
        flexGrow:1
    },
    grid:{
        width:"47%",
        height:110,
        borderRadius:20,
        backgroundColor:"orange",
        margin:4
    },
    gridItem:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        padding:30,
        color:"white"
    }
})