import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View>
      <Text style = {styles.headingText}>FancyCard</Text>
      <View style = {[styles.card, styles.cardElevated]} >
        <Image
       source={{uri:'https://reactjs.org/logo-og.png'}}
       style = {styles.reactImage}
        />
        <View style = {styles.cardBody}>
            <Text style = {styles.cardTitle}>Yahaya🐴</Text>
            <Text style = {styles.cardLabel}>Label</Text>
            <Text style = {styles.cardDescription}>Description</Text>
            <View style = {styles.view1}> 
                 <Text style = {styles.cardFooter}>Footer</Text>
                 </View>
          
        </View>
        </View>
    </View>
  )
}

export default FancyCard

const styles = StyleSheet.create({
    reactImage: {
        height:200,
        marginBottom: 8,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
    },
headingText: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingHorizontal:8
},
cardBody:{
    flex:1,
    flexGrow: 1,
    paddingHorizontal: 12,
},
card: {
    width: 350,
    height:360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 4

},
cardTitle:{
    color: '#000000',
    fontSize:22,
    fontWeight: 'bold',
    marginBottom: 4,
},
cardLabel:{
    color: '#000000',
    fontSize:14,
    marginBottom:6,
},
cardDescription:{
    color: '#2C3335',
    fontSize: 12,
   marginBottom:12,
   marginTop: 6,
   flexShrink:1,
},

cardFooter:{
   
    color: '#000000',
   
},
view1:{
    // flex:1,
    alignItems: 'center',
    // justifyContent:'center',
},
cardElevated: {
    backgroundColor: '#CAD5E2',
    elevation: 8,
},
})