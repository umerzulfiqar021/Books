import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  
  View,
} from 'react-native';
import FlatCards from './src/components/dummy/FlatCards';
import ElevatedCards from './src/components/dummy/ElevatedCards';
import FancyCard from './src/components/dummy/FancyCard';
import ActionCard from './src/components/dummy/ActionCard';
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
