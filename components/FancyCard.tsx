import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View>
      <Text style = {styles.headingText}>FancyCard</Text>
      <View style = {[styles.card, styles.cardElevated]} >
        <Image
        
        />
        </View>
    </View>
  )
}

export default FancyCard

const styles = StyleSheet.create({
headingText: {
    fontSize: 20,
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
})