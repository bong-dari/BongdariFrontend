import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Search</Text>
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

export default SearchScreen;
