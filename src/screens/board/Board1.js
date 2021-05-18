import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const Board1 = () => {
  const { navigate } = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={() => navigate('Board2')}>Board1</Text>
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

export default Board1;
