import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

const Board3 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Board3</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Board3;
