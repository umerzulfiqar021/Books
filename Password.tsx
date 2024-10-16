import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'

const PssswordSchema = Yup.object().shape({
    passwordLenght: Yup.number()
    .min(4,'4 character is min')
    .max(16,'should not increase length more than16')
    .required('lenght is rquired')
})
const Password = () => {
    const [passowrd,setPassword] = useState('');
    const [isPasswordGenerated,setIsPasswordGenerated] = useState (false);
    const [lowerCase,setLowerCase] = useState(true)
    const [upperCase,setUpperCase] = useState(false)
    const [numbers,useNumbers] = useState(false)
    const [symbols,setSymbols] = useState(false)
    const generatePasswordString = (passwordLenght:number) => {

    }
    //helpful
    const generatePassword = (characters:string,passwordLenght:number) => {
        let result = '';
        for (let index = 0; index < passwordLenght; index++) {
            const characterIndex = Math.round(Math.random() * characters.length)
           result +=  characters.charAt(characterIndex)
            
        }
        return result
    }
    const resetPasswordState = () => {

    }
  return (
    <View>
      <Text>Password 1</Text>
    </View>
  )
}

export default Password

const styles = StyleSheet.create({})