import { StyleSheet, Text, View, Linking, Image} from 'react-native'
import React from 'react'

const ActionCard = () => {
    const openWebsite = (websiteLink: string) => {
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style = {styles.headingText}>ActionCard</Text>
      <View style = {[styles.card, styles.elevatedCard]}>
    <View style = {styles.headingContainer}>
      <Text style = {styles.headerText}>
        hello
      </Text>
    </View>
    <Image
    source={{
      uri: 'https://reactjs.org/logo-og.png'
    }}
    style= {styles.imageStyle}
    />
    <View  style= {styles.bodyContainer}></View>
      </View>
    </View>
  )
}

export default ActionCard

const styles = StyleSheet.create({
  headingText: {
    fontSize:22,
  },
  imageStyle:{
      height:200,
  },
  card:{},
  elevatedCard: {},
  headingContainer: {},
  headerText:{},
})