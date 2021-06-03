import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import styled, { css } from 'styled-components/native';

const CityWrapper = styled.TouchableOpacity`
  padding: 10px 30px;
  margin-bottom: 2;
  background-color: #f6f6f6;
  ${props =>
    props.isFocused &&
    css`
      background-color: #0099cc;
      border-radius: 50;
    `}
`;

const CityName = styled.Text`
  color: #bfbfbf;
  ${props =>
    props.isFocused &&
    css`
      color: #fff;
    `}
`;

// 도시 리스트 뷰 컴포넌트
const CityItem = ({ item, isFocused, changeCity }) => {
  // 도시 id
  const { id } = item;
  return (
    <CityWrapper
      id={id}
      isFocused={id === isFocused ? isFocused : ''}
      onPress={() => changeCity(id)}>
      <CityName isFocused={item.id === isFocused ? isFocused : ''}>
        {item.city}
      </CityName>
    </CityWrapper>
  );
};

//  구 리스트 뷰 컴포넌트
const GuItem = ({ item, isFocused }) => {
  // 구 id
  const { id } = item;
  return (
    <>
      {isFocused === id &&
        item.gu.map(test => {
          return (
            <View style={styles.guWrapper}>
              <Text style={styles.gu}>{test}</Text>
              <Icon style={styles.arrow} name="chevron-right" size={20} />
            </View>
          );
        })}
    </>
  );
};

const AreaScreen = () => {
  // 도시 리스트
  const cityList = [
    { id: 1, city: '서울' },
    { id: 2, city: '인천' },
    { id: 3, city: '대전' },
    { id: 4, city: '세종' },
    { id: 5, city: '대구' },
    { id: 6, city: '울산' },
    { id: 7, city: '부산' },
    { id: 8, city: '광주' },
    { id: 9, city: '경기' },
    { id: 10, city: '강원' },
    { id: 11, city: '충북' },
    { id: 12, city: '충남' },
    { id: 13, city: '경북' },
    { id: 14, city: '경남' },
    { id: 15, city: '전북' },
    { id: 16, city: '전남' },
    { id: 17, city: '제주' },
  ];

  // 구 리스트
  const guList = [
    {
      id: 1,
      gu: [
        '전체',
        '강남구',
        '강동구',
        '강북구',
        '강서구',
        '관악구',
        '광진구',
        '구로구',
        '금천구',
        '노원구',
        '도봉구',
        '동대문구',
        '동작구',
        '마포구',
        '서대문구',
        '서초구',
        '성동구',
        '성북구',
        '송파구',
        '양천구',
        '영등포구',
        '용산구',
        '은평구',
        '종로구',
        '중구',
        '중랑구',
      ],
    },
    {
      id: 2,
      gu: [
        '전체',
        '계양구',
        '남동구',
        '동구',
        '미추홀구',
        '부평구',
        '서구',
        '연수구',
        '중구',
      ],
    },
    {
      id: 3,
      gu: ['전체', '대덕구', '동구', '서구', '유성구', '중구'],
    },
    {
      id: 4,
      gu: ['전체', '세종시'],
    },
    {
      id: 5,
      gu: ['전체', '남구', '달서구', '동구', '북구', '서구', '수성구', '중구'],
    },
    {
      id: 6,
      gu: ['전체', '남구', '동구', '북구', '중구'],
    },
    {
      id: 7,
      gu: [
        '전체',
        '강서구',
        '금정구',
        '남구',
        '동구',
        '동래구',
        '부산진구',
        '북구',
        '사상구',
        '사하구',
        '서구',
        '수영구',
        '연제구',
        '영도구',
        '중구',
        '해운대구',
      ],
    },
    {
      id: 8,
      gu: ['전체', '광신구', '남구', '동구', '북구', '서구'],
    },
    {
      id: 9,
      gu: [
        '전체',
        '고양시',
        '과천시',
        '광명시',
        '광주시',
        '구리시',
        '군포시',
        '김포시',
        '남양주시',
        '동두천시',
        '부천시',
        '성남시',
        '수원시',
        '시흥시',
        '안산시',
        '안성시',
        '안양시',
        '양주시',
        '여주시',
        '오산시',
        '용인시',
        '의왕시',
        '의정부시',
        '이천시',
        '파주시',
        '평택시',
        '포천시',
        '하남시',
        '화성시',
      ],
    },
    {
      id: 10,
      gu: [
        '전체',
        '강릉시',
        '동해시',
        '삼척시',
        '속초시',
        '원주시',
        '춘천시',
        '태백시',
      ],
    },
    {
      id: 11,
      gu: ['전체', '제천시', '청주시', '충주시'],
    },
    {
      id: 12,
      gu: [
        '전체',
        '계룡시',
        '공주시',
        '논산시',
        '당진시',
        '보령시',
        '서산시',
        '아산시',
        '천안시',
      ],
    },
    {
      id: 13,
      gu: [
        '전체',
        '경산시',
        '경주시',
        '구미시',
        '김천시',
        '문경시',
        '상주시',
        '안동시',
        '영주시',
        '영천시',
        '포항시',
      ],
    },
    {
      id: 14,
      gu: [
        '전체',
        '거제시',
        '김해시',
        '밀양시',
        '사천시',
        '양산시',
        '진주시',
        '창원시',
        '통영시',
      ],
    },
    {
      id: 15,
      gu: ['전체', '군산시', '김제시', '남원시', '익산시', '전주시', '정읍시'],
    },
    {
      id: 16,
      gu: ['전체', '광양시', '나주시', '목포시', '순천시', '여수시'],
    },
    {
      id: 17,
      gu: ['전체', '서귀포시', '제주시'],
    },
  ];

  // 선택된 도시 상태 => id로 구분
  const [isFocused, setIsFocused] = useState(1);

  // 도시 변경
  const changeCity = id => {
    // console.log(id);
    setIsFocused(id);
  };

  // 도시 렌더링
  const renderCity = ({ item }) => {
    return (
      <CityItem item={item} isFocused={isFocused} changeCity={changeCity} />
    );
  };

  // 구 렌더링
  const renderGu = ({ item }) => {
    return <GuItem item={item} isFocused={isFocused} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>지역</Text>
      <View style={styles.listWrapper}>
        <View style={styles.cityWrapper}>
          <FlatList
            data={cityList}
            renderItem={renderCity}
            keyExtractor={item => item.id}
          />
        </View>
        <FlatList
          data={guList}
          renderItem={renderGu}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 10,
    paddingBottom: 60,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 16,
    marginBottom: 25,
    alignSelf: 'center',
  },
  listWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderTopWidth: 1,
    borderColor: '#c4c4c4',
  },
  cityWrapper: {
    alignItems: 'flex-start',
  },
  guWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#c4c4c4',
    marginLeft: 20,
  },
  gu: {
    flex: 1,
    textAlign: 'center',
    marginLeft: 20,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  arrow: {
    paddingVertical: 10,
  },
});

export default AreaScreen;
