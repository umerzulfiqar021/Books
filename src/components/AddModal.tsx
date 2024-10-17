import { Alert, Image, Pressable, StyleSheet, Text, View,  } from 'react-native'
import React from 'react'
import { Modal,TouchableOpacity } from 'react-native'
import MainInput from './MainInput'
import Button from './Button'
import { useState } from 'react'
import axios from 'axios'
const AddModal = ({visible,onRequestClose,onBookAdded}) => {
  const [author,setAuthor] = useState('')
  const [book,setBook] = useState('')
  const [price,setPrice] = useState('')
  const [cover,setCover] = useState('')
  const URL = 'https://671029b3a85f4164ef2d3eaf.mockapi.io/books';
  const formValid = author && book && price && cover  ;
  const post = async () => { 
   
    if (!formValid){
      Alert.alert('Please fill all fields (❁´◡`❁)')
      return;
    }
    try {
      const response = await axios.post(URL,{
        author: author,
        cover:cover,
        name_of_book : book
    })
    const Data = response.data;
    console.log(Data)
    Alert.alert('Added successfuly (☞ﾟヮﾟ)☞')
    setAuthor('')
    setBook('')
    setCover('')
    setPrice('')

    onBookAdded && onBookAdded();
    onRequestClose();

    }

   
   catch (error) {
      Alert.alert(error.message, '(┬┬﹏┬┬)')
    
}}
  
  return (
   <Modal style = {styles.mod} visible={visible} onRequestClose={onRequestClose} animationType='slide'>
    <Pressable onPress={onRequestClose}>
      <Image style = {styles.image}
      source={require('../../assets/close.png')}
      />
    </Pressable>
    <MainInput options={{placeholder:'Author', value : author,  onChangeText : val => setAuthor(val) }}/>
    <MainInput options={{placeholder:'Book Name',value:book, onChangeText:val => setBook(val)}}/>
    <MainInput options={{placeholder:'Price',keyboardType: 'numeric',value:price,onChangeText: val=> setPrice(val)}}/>
    <MainInput options={{placeholder:'Cover', value:cover, onChangeText: val=> setCover(val)}}/>
    
    <Button  title={'Save Book' } onPress={()=> post()} />
   </Modal>
  );
}

export default AddModal;

const styles = StyleSheet.create({
  mod:{
    height:200,
    width:200
  },
  image: {
    height: 50,
    marginBottom: 10,
    width: 50,
    resizeMode: 'stretch',
    backgroundColor: 'blue',
    marginTop: 20,
    borderRadius: 8,
   alignSelf: 'center',
  },
 


  
})