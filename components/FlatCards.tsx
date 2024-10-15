import React from 'react'
import { View,StyleSheet, Text } from 'react-native'

const FlatCards = () => {
  return (
   <View>
    <Text style = {styles.HeadingText}>FlatList</Text>
    <View>
        <View>
            <Text>Red</Text>
        </View>
    </View>
   </View>

  )
}

export default FlatCards;
 
const styles = StyleSheet.create({
    HeadingText : {
        fontSize: 34,
        fontWeight: 'bold',
        paddingHorizontal: 18,
    }
})
