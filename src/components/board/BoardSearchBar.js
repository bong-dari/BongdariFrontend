import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import { block } from 'react-native-reanimated';

import styled, { css } from 'styled-components/native';

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-content: space-between;
`;

const SearchBarWrapper = styled.View`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  background-color: #fdfdfd;
  padding: 5px 0;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
`;

const SearchInput = styled.TextInput`
  padding: 0px;
  color: #c4c4c4;
`;

const SearchIcon = styled.Image`
  position: absolute;
  right: 10;
  width: 18px;
  height: 18px;
`;

const ButtonConatiner = styled.TouchableOpacity`
  justify-content: center;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  padding: 10px;
  ${props =>
    props.institution &&
    css`
      display: none;
    `}
`;

const ButtonText = styled.Text`
  color: #c4c4c4;
`;

const Button = ({ institution }) => {
  return (
    <ButtonConatiner institution={institution}>
      <ButtonText>글쓰기</ButtonText>
    </ButtonConatiner>
  );
};

// 게시판 상단 지역 검색 입력창
const BoardSearchBar = ({ institution }) => {
  const [value, setValue] = useState('');

  return (
    <Container>
      <SearchBarWrapper>
        <SearchInput
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={setValue}
          placeholder="지역을 선택해 주세요."
          returnKeyType="search"
          returnKeyLabel="search"
          value={value}
        />
        <SearchIcon source={require('../../assets/icons/SearchIcon.png')} />
      </SearchBarWrapper>
      <Button institution={institution} />
    </Container>
  );
};

export default BoardSearchBar;
