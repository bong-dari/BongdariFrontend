import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

const AreaScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>지역</Text>
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

export default AreaScreen;
