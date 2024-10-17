import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Colors } from '../style/color'
const AddButton = ({onAddPress}) => {
  return (
    

      <TouchableOpacity style = {styles.touch} onPress={onAddPress}>

        <Image
        style = {styles.imageS}
        source={require('../../assets/add.png')}

        />
       
      </TouchableOpacity>

  )
}

export default AddButton

const styles = StyleSheet.create({
    touch: {
        position: 'absolute',
        bottom: 50,
        alignSelf: 'center',
        backgroundColor: Colors.mainColor,
        zIndex: 1,
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',




    },
    imageS:{
        tintColor: Colors.white,
        height:45,
        width:45,
    }
})