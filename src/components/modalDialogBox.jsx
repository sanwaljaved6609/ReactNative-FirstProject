import { View, Text, TouchableOpacity, Modal, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'

const ModalDialogBox = () => {

    const [modalVisible, setModalVisible] = useState(false);

    function showAlert(){
        Alert.alert(
            "Success", 
            "This is alert message",
             [
                {
                    title:'Cancel', style:'cancel'
                }
            ],
            {cancelable:true}
        )
    }

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.openButton} onPress={()=>setModalVisible(true)}>
        <Text style={styles.openButtonText}>
            Show Modal
        </Text>
      </TouchableOpacity>

      <Modal
      visible={modalVisible}
      animationType='fade'
      transparent={true}
      onRequestClose={()=>setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
            <View style={styles.modalView}>
                <Text style={styles.modalTitle}>Modal Box</Text>
                <Text style={styles.modalText}>This is my beautoful Modal Box</Text>
                <TouchableOpacity style={styles.closeButton} onPress={()=>setModalVisible(false)}>
                    <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
            </View>
        </View>
      </Modal>

      <TouchableOpacity style={styles.openButton} onPress={showAlert}>
        <Text style={styles.openButtonText}>
            Alet Message
        </Text>
      </TouchableOpacity>

      

    </View>
  )
}

export default ModalDialogBox

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'pink'
    },
    openButton:{
        backgroundColor:"blue",
        width:'30%',
        height:40,
        borderRadius:10,
        marginVertical:10
    },
    openButtonText:{
        color:'white',
        fontSize:16,
        fontWeight:'bold',
        textAlign:'center',
        justifyContent:'center',
        paddingVertical:8,
    },
    modalOverlay:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0.7)'
    },
    modalView:{
        width:'70%',
        height:200,
        borderRadius:20,
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:2,
        borderRadius:20,
        backgroundColor:'white'
    },
    modalTitle:{
        fontSize:25,
        fontWeight:'bold'
    },
    modalText:{
        fontSize:16
    },
    closeButton:{
        backgroundColor:'green',
        width: 90,
        height:35,
        borderRadius:10,
        marginVertical:25
    },
    closeButtonText:{
        color:'white',
        fontSize:15,
        paddingHorizontal:25,
        paddingVertical:5,
        fontWeight:'bold'
    }


})