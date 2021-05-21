import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { CommonButton } from '../../assets/globalStyles';

const MemberAddInfo = () => {
  const { navigate } = useNavigation();
  const onPress = ({ type }) => {
    navigate(type);
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.comment}>닉네임을 입력해주세요!</Text>
      <View style={styles.divisionLine} />
      <TextInput
        placeholder="닉네임"
        placeholderTextColor="#c4c4c4"
        style={styles.nickname}
      />
      <CommonButton
        onPress={() => onPress({ type: 'MemberTerms' })}
        title="다음"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  comment: {
    marginTop: 40,
    color: '#222222',
    fontSize: 18,
  },
  divisionLine: {
    width: '100%',
    height: 1,
    marginTop: 20,
    backgroundColor: '#c4c4c4',
  },
  nickname: {
    width: '100%',
    height: 50,
    marginTop: 20,
    paddingLeft: 7,
    borderColor: '#c4c4c4',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 18,
  },
});

export default MemberAddInfo;
