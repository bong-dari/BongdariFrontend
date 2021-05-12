import { useNavigation } from '@react-navigation/core';
import React from 'react';
import styled from 'styled-components';

const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  padding: 25px;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 24px;
  font-weight: 600;
`;

const TypeButton = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  margin-top: 20px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  background-color: #ffb623;
`;

const UserTypeScreen = () => {
  const { navigate } = useNavigation();
  const onPress = ({ type }) => {
    navigate(type);
  };

  return (
    <Container>
      <Text>먼저 로그인이 필요해요</Text>
      <TypeButton onPress={() => onPress({ type: 'Login' })}>
        <Text>봉사자 로그인하러 가기</Text>
      </TypeButton>
      <TypeButton onPress={() => onPress({ type: 'AddInfo' })}>
        <Text>봉사 기관 로그인하러 가기</Text>
      </TypeButton>
    </Container>
  );
};

export default UserTypeScreen;
