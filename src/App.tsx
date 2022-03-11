import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

// Custom ui imports
import {color} from './ui/colors';

// Custom Component imports
import {InfoBox} from './components/InfoBox';

const App = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle="light-content" />
      <View>
        <InfoBox />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: color.primary,
    height: '100%',
  },
});

export default App;