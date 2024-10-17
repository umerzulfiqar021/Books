import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native'
import React, { FC } from 'react'
import { Colors } from '../style/color'
interface Props{
options: TextInputProps
}

const MainInput: FC<Props> = ({options}) => {
  return (
    <View style = {styles.con}>
      <TextInput
      style = {styles.input} {...options}
      />
     
    </View>
  )
}

export default MainInput

const styles = StyleSheet.create({
    con:{
        height: 48,
       borderRadius:8,
       width:'100%',
       backgroundColor: Colors.lightGray,
       justifyContent: 'center',
       marginTop:1,
        marginBottom: 8
       

    },
    input:{
        padding: 5,
        fontSize:16,
        marginHorizontal:5,
        color:'#000'

    }
})