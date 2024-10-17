import {
    Image,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
  } from 'react-native';
  import React, {FC} from 'react';
  
  interface Props {
    author: string;
    name_of_book: string;
    price: number;
    cover: string;
    categoryColor: string;
    onDelete: () => void
  }
  
  const Book: FC<Props> = ({
    author,
    name_of_book,
    price,
    cover,
    categoryColor,
    onDelete,
  }) => {
    return (
      <View style={styles.container}>
        <View style={[styles.coloredSquare, {backgroundColor: categoryColor}]}>
          <Image source={{uri: cover}} style={styles.image} />
          <TouchableOpacity onPress={onDelete}> 
            <Text style = {styles.dlt}>   Delete Book</Text>
            </TouchableOpacity>
         
        </View>
  
        <Text>{author}</Text>
        <Text>{name_of_book}</Text>
        <Text>{price}$</Text>
      </View>
    );
  };
  
  export default Book;
  
  const styles = StyleSheet.create({
    dlt:{
        color: 'red'
    },
    container: {alignItems: 'center', marginBottom: 50},
    coloredSquare: {
      
      borderRadius: 8,
      height: 130,
      width: 130,
      alignItems: 'center',
      marginBottom: 5,
    },
    image: {
      height: 130,
      width: 80,
      resizeMode: 'stretch',
      backgroundColor: 'blue',
      marginTop: -20,
      borderRadius: 8,
    },
  });