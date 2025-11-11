import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

const MyFlatList = () => {

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

    // const values = [
    //     {id: 1, val: "value 1"},
    //     {id: 2, val: "value 2"},
    //     {id: 3, val: "value 3"},
    //     {id: 4, val: "value 4"},
    //     {id: 5, val: "value 5"},
    //     {id: 6, val: "value 6"},
    //     {id: 7, val: "value 7"}
    // ]

    const renderItem = ({item}) => (
        <View style={style.itemarea}>
            <Text style={style.item}>{item.item}</Text>
        </View>
    );

    // const renderValues = ({item}) => (
    //     <View style={style.itemarea}>
    //         <Text style={style.item}>{item.val}</Text>
    //     </View>
    // );

    

  return (
    <View style={style.container}>

        <Text style={{fontSize:35, textAlign:"center", fontWeight: 900}}>Flat List</Text>

        <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={style.list}
        ListEmptyComponent={<Text>No data!</Text>}
        />    

        {/* <FlatList
        data={values}
        renderItem={renderValues}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={style.list}
        ListEmptyComponent={<Text>No data!</Text>}
        /> */}

    </View>
  )
}

export default MyFlatList


const style = StyleSheet.create({
    container:{
        padding: 20,
        flex: 1,
    },

    list:{
        margin: 10,
        // flexGrow:1
    },

    itemarea:{
        margin:5,
        padding:3,
    },

    item:{
        padding: 10,
        backgroundColor:"lightgreen",
        borderWidth:2,
        borderColor:"darkgreen",
        textAlign:"center",
        fontSize:25,
        fontWeight:600
    }
})