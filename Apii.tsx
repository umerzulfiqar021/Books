import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  
  View,
} from 'react-native';
import FlatCards from './src/components/FlatCards';
import ElevatedCards from './src/components/ElevatedCards';
import FancyCard from './src/components/FancyCard';
import ActionCard from './src/components/ActionCard';
const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>

     <FlatCards/>
    <ElevatedCards/>
    <FancyCard/>
    <ActionCard/>
    {/* <FancyCard/>
    <FancyCard/> */}

    </ScrollView>
    </SafeAreaView>
  )
}
export default App;
