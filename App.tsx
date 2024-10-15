
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  
  Text,
  
  View,
} from 'react-native';




function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}
const App = () => {
  return (
    <View>
    <Text>Hello World</Text>
    </View>
  )
}
export default App;
