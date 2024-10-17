import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View>
      <Text style = {styles.HeadingText}>ElevatedCards</Text>
      <ScrollView horizontal  style = {styles.container}>
        <View style = {[styles.card, styles.cardElevated]} >
        <Text>Tap</Text>
        </View>
        <View style = {[styles.card, styles.cardElevated]} >
        <Text>me</Text>
        </View>
        <View style = {[styles.card, styles.cardElevated]} >
        <Text>To</Text>
        </View>
        
        <View style = {[styles.card, styles.cardElevated]} >
        <Text>scroll</Text>
        </View>
        <View style = {[styles.card, styles.cardElevated]} >
        <Text>more</Text>
        </View>

        <View style = {[styles.card, styles.cardElevated]} >
        <Text>😊</Text>
        </View>
        
      </ScrollView>
    </View>
  )
}

export default ElevatedCards

const styles = StyleSheet.create({
    container: {
        padding: 8,
        
    },
    card: {
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
        width:100,
        height:100,
        borderRadius: 4,
        margin: 8,

    },
    cardElevated: {
        backgroundColor: '#CAD5E2',
        elevation: 8,
    },
    HeadingText : {
        fontSize: 34,
        fontWeight: 'bold',
        paddingHorizontal: 18,
    },
})