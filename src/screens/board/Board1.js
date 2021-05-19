import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const Board1 = () => {
  const { navigate } = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text>Board1</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
});

export default Board1;
