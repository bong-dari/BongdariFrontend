import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { CommonButton } from '../../assets/globalStyles';

const AddInfo = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.topCircle} />
      <View style={styles.bottomCircle} />
      <View style={styles.viewContainer}>
        <Text style={styles.appName}>Bongdari</Text>
        <Text style={styles.comment}>닉네임을 입력해 주세요!</Text>
        <View style={styles.divisionLine} />
        <TextInput placeholder="닉네임" style={styles.nickname} />
        <CommonButton onPress={() => true} title="다음" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87a9b8',
  },
  topCircle: {
    position: 'absolute',
    top: '18%',
    left: '20%',
    width: 36,
    height: 36,
    backgroundColor: '#ff585d',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 8,
    elevation: 10,
  },
  bottomCircle: {
    position: 'absolute',
    bottom: '5%',
    right: '-5%',
    width: 76,
    height: 76,
    backgroundColor: '#006492',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 8,
    elevation: 5,
  },
  viewContainer: {
    width: '100%',
    height: '60%',
    paddingHorizontal: 22,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  appName: {
    color: '#3eb1c8',
    fontSize: 20,
    fontWeight: 'bold',
  },
  comment: {
    marginTop: 40,
    color: '#999999',
    fontSize: 18,
  },
  divisionLine: {
    width: '100%',
    height: 1,
    marginTop: 11,
    backgroundColor: '#c0c0c0',
  },
  nickname: {
    width: '100%',
    height: 50,
    marginTop: 20,
    textAlign: 'center',
    color: '#848484',
    borderColor: '#b8b8b8',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 18,
  },
});

export default AddInfo;
