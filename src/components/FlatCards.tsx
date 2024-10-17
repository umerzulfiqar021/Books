import React from 'react'
import { View,StyleSheet, Text } from 'react-native'

const FlatCards = () => {
  return (
   <View>
    <Text style = {styles.HeadingText}>FlatList</Text>
    <View style = {styles.container}>
        <View style = {[styles.card,styles.cardOne]}>
            <Text>Red</Text>
        </View>
        <View style = {[styles.card,styles.cardTwo]}>
            <Text>Red</Text>
        </View>
        <View style = {[styles.card,styles.cardThree]}>
            <Text>Red</Text>
        </View>
        <View style = {[styles.card,styles.cardTwo]}>
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
    },
    container : {
        flex:1,
        flexDirection: 'row',
        padding:8,
    },
    card: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%',
        height: 100,
        borderRadius: 4,
        margin: 8,


    },
    cardOne: {
        backgroundColor: '#EF5354'
    },
    cardTwo: {
        backgroundColor: '#50DBB4'
    },
    cardThree: {
        backgroundColor: '#5DA3FA'
    },
})
