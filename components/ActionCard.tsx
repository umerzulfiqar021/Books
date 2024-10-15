import { StyleSheet, Text, View, Linking, Image, TouchableOpacity} from 'react-native'
import React from 'react'

const ActionCard = () => {
    const openWebsite = (websiteLink: string) => {
        Linking.openURL(websiteLink)
    }
  return (
    <View style={{backgroundColor: '#A4B0BD'}}>
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
    <View  style= {styles.bodyContainer}>
      <Text numberOfLines={2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ut harum perspiciatis voluptate aperiam, blanditiis ab nam molestias corrupti dolor, placeat sint magnam?
      </Text>
      </View>
    <View  style= {styles.footerContainer}>
      <TouchableOpacity onPress={()=> openWebsite('https://www.uicolorpicker.learncodeonline.in/')}>
        <Text style = {styles.socialLinks}>
          Press me
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> openWebsite('https://www.instagram.com/ranaumerzulfiqar/?hl=en')}>
        <Text style = {styles.socialLinks}>
          Press me
        </Text>
      </TouchableOpacity>
    </View>
      </View>
    </View>
  )
}

export default ActionCard

const styles = StyleSheet.create({
 
  headingText: {

    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8
  },
  imageStyle:{

      height:190,
  },
  card:{
    width: 350,
    height: 360,
    borderRadius:6,
    marginVertical:12,
    marginHorizontal: 5,
  },
  elevatedCard: {
    backgroundColor: '#00CCCD',
    elevation:6,
  },
  headingContainer: {
    height:40,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  headerText:{
    color: '#000',
    fontSize: 16,
    fontWeight: '800',

  },
  bodyContainer: {
    padding:10,
  },
  footerContainer: {
    padding:8,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-evenly'
  },
  socialLinks:{
    fontSize:16,
    color: '#000',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 6,
  }
})