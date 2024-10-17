import { StyleSheet, Text, View, TouchableOpacity,ActivityIndicator } from 'react-native'
import React from 'react'
import { Colors } from '../style/color'

const Button = ({title,onPress,loading,disable}) => {
  return (
   
      <TouchableOpacity style = {[styles.but, disable && {opacity:.4}]} onPress={()=> {
        onPress && onPress()
      }
      }
      disabled= {disable}>
    {loading? (
        <ActivityIndicator color={Colors.white}/>
    ): (
        <Text style = {{color:'white'}}>{title}</Text>
    )}
     
    </TouchableOpacity>
   
  )
}

export default Button

const styles = StyleSheet.create({
    but:{
        marginLeft: 100,
        width:'50%',
        height: 50,
        backgroundColor : '#4456',
        alignItems:'center',
        justifyContent: 'center',
        marginTop:23
    }
})