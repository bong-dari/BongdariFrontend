import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';
import { CommonButton } from '../../assets/globalStyles';

const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  padding: 25px 20px;
  align-items: center;
  background-color: #fff;
`;
const Border = styled.View`
  width: 100%;
  height: 1px;
  background-color: #c4c4c4;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  font-size: 16px;
`;

const BoardCapacity = () => {
  const { navigate } = useNavigation();
  const onPress = ({ type }) => {
    navigate(type);
  };
  return (
    <Container>
      <Text style={{ fontSize: 18 }}>
        원하는 봉사자의 인원을 선택해주세요&#33;
      </Text>
      <Border />
      <Input placeholder="인원수" placeholderTextColor="#c4c4c4" />
      <CommonButton
        title="다음"
        onPress={() => onPress({ type: 'BoardContact' })}
      />
    </Container>
  );
};

export default BoardCapacity;
