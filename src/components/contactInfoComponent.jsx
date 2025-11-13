import { View, Text } from 'react-native'
import React from 'react'
import styles from '../screens/contact/style'

const ContactInfoComponent = ({name, email}) => {
  return (
    <View style={styles.listContent}>
      <Text style={styles.listName}>{name}</Text>
      <Text style={styles.listEmail}>{email}</Text>
    </View>
  )
}

export default ContactInfoComponent