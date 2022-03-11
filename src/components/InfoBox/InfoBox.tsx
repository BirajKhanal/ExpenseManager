import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Custom ui imports
import {color} from '../../ui';

export const InfoBox = () => {
  return (
    <View style={styles.container}>
      <Text>Design</Text>
      <Text>5 Task</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: color.pink,
  },
});
