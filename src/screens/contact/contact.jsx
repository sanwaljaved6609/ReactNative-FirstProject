import {  FlatList, Text } from 'react-native'
import React from 'react'
import { users } from './info'
import ContactInfoComponent from '../../components/contactInfoComponent'
import styles from './style'

const Contact = () => {

    const renderItem = ({item}) => <ContactInfoComponent name={item.name} email={item.email} />

  return (
    <FlatList
    data={users}
    renderItem={renderItem}
    keyExtractor={(item)=>item.id.toString()}
    ListHeaderComponent={()=>(<Text style={styles.heading}>Contact</Text>)}
    contentContainerStyle={styles.list}
    />
  )
}

export default Contact