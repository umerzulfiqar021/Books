import { Alert, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Book from '../components/Book'
import axios from 'axios'
import AddButton from '../components/AddButton'
import Modal from '../components/AddModal'
import AddModal from '../components/AddModal'
const Home = () => {
    const tempData = [
        {
        author: 'tabraz shamsi',
        nameOfBook:'Fourty Rules of love',
        price: 2000,
        coverURL: 'https://cssbooks.net/wp-content/uploads/2021/04/The-Forty-Rules-of-Love-By-Elif-Shafak-1.jpg',
        catagoryColor: 'Brown'
    },
        {
        author: 'tabraz shamsi',
        nameOfBook:'Fourty Rules of love',
        price: 2000,
        coverURL: 'https://cssbooks.net/wp-content/uploads/2021/04/The-Forty-Rules-of-Love-By-Elif-Shafak-1.jpg',
        catagoryColor: 'Brown'
    },
        {
        author: 'tabraz shamsi',
        nameOfBook:'Fourty Rules of love',
        price: 2000,
        coverURL: 'https://cssbooks.net/wp-content/uploads/2021/04/The-Forty-Rules-of-Love-By-Elif-Shafak-1.jpg',
        catagoryColor: 'Brown'
    },
        {
        author: 'tabraz shamsi',
        nameOfBook:'Fourty Rules of love',
        price: 2000,
        coverURL: 'https://cssbooks.net/wp-content/uploads/2021/04/The-Forty-Rules-of-Love-By-Elif-Shafak-1.jpg',
        catagoryColor: 'Brown'
    },
        {
        author: 'tabraz shamsi',
        nameOfBook:'Fourty Rules of love',
        price: 2000,
        coverURL: 'https://cssbooks.net/wp-content/uploads/2021/04/The-Forty-Rules-of-Love-By-Elif-Shafak-1.jpg',
        catagoryColor: 'Brown'
    },
]
const [data,setData] = useState([])
 const URL = 'https://671029b3a85f4164ef2d3eaf.mockapi.io/books'
const  getBooks =  async () => {
    const  response = await axios.get(URL)
    setData(response.data)
   console.log(data)
  }
  useEffect(()=>{
    getBooks()
  },[])
  const onDeletePress = async (bookId) => {
    try {
        const response = await axios.delete(`${URL}/${bookId}`)
      const deleted = response.data;
      Alert.alert('Book Deleted')
  getBooks(); 
      } catch (error) {
        // console.log(error);
        
        Alert.alert(error?.message);
      }
  }
  const [modalVisible,setModalVisible] = useState(false)
 
  return (
    <View>
      <FlatList
      numColumns={2}
      contentContainerStyle = {styles.content}
      columnWrapperStyle = {styles.col}
      data={data}
    //   keyExtractor={(_,index)=> index.toString}
      renderItem={({item})=> <Book
      {...item} onDelete={()=>onDeletePress(item.id)}
      />}
      />
      <View>
         <AddButton onAddPress={()=> setModalVisible(true) }/>
          <AddModal  visible={modalVisible} onBookAdded={getBooks} onRequestClose={()=> setModalVisible(false)}/>
         </View>
     

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    content: {
        
        paddingTop:50,
        justifyContent: 'space-between',
        paddingHorizontal:30,
    },
    col:{
        flex:1,
        justifyContent: 'space-around'
    }
})