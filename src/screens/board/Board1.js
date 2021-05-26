import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const Item = ({ item }) => {
  return (
    <View style={styles.listWrapper}>
      <View style={styles.contentsBox}>
        <Text style={styles.contents}>{item.nickname}</Text>
      </View>
      {/* numberOfLines 어트리뷰는 텍스트의 줄 수를 제한하고 넘어갈 시 elipsis(...) 처리한다 */}
      <Text style={styles.title} numberOfLines={3}>
        {item.title}
      </Text>
      <View style={styles.contentsBox}>
        <Text style={styles.contents}>연락처</Text>
        <Text style={styles.detail}>{item.contact}</Text>
      </View>
      <View style={styles.contentsBox}>
        <Text style={styles.contents}>봉사 기간</Text>
        <Text style={styles.detail}>
          {item.startDate} ~ {item.endDate}
        </Text>
        <Text style={styles.contents}>모집 인원</Text>
        <Text style={styles.detail}>{item.capacity}명</Text>
        <Text style={styles.date}>1시간 전</Text>
      </View>
      <View style={styles.divisionLine} />
    </View>
  );
};

const Board1 = () => {
  // 보여줄 리스트 데이터
  const postList = [
    {
      id: '1',
      nickname: 'dongchan',
      title: 'XXX 보호소 봉사 같이 가실분 있나요?',
      contact: '010 - 7110 - 4287',
      startDate: '04.05',
      endDate: '04.12',
      capacity: 4,
    },
    {
      id: '2',
      title:
        '다음주 강서구 노인 복지 회관에서 도시락 배달 봉사가 있는데 같이 진행 하실분 구합니다',
    },
    {
      id: '3',
      nickname: 'bokbok',
      title: '관악구 유기견 보호소 봉사 같이 가실분 있나요~?',
      contact: '010 - 9876 - 5432',
      startDate: '06.21',
      endDate: '06.25',
      capacity: 5,
    },
    {
      id: '4',
      title: 'XXX 보육원 자원봉사 함께 하실분 구합니다',
    },
    {
      id: '5',
      title: '광진구 독거노인 연탄배달 같이 하실분 구합니다',
    },
    {
      id: '6',
      nickname: 'youngseo',
      title: 'XXX 노인회관 자원봉사 같이 가실 3분 구합니다!!',
      contact: '010 - 1234 - 5678',
      startDate: '05.15',
      endDate: '05.17',
      capacity: 3,
    },
  ];

  const renderItem = ({ item }) => {
    return <Item item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.description}>
        우리 어플에 등록되지 않은 타 기관의 봉사를 알리고 같이 참여할 사람을
        모집할 수 있는 게시판 입니다 자유롭게 모집하고 타 기관에게 봉다리를 알려
        더 많은 봉사자가 지원할 수 있게 해주세요!
      </Text>
      <View style={styles.divisionLine} />
      <FlatList
        data={postList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 25,
    backgroundColor: '#ffffff',
  },
  description: {
    marginTop: 15,
    marginHorizontal: 10,
    color: '#c4c4c4',
    fontSize: 12,
  },
  divisionLine: {
    width: '100%',
    height: 1,
    marginTop: 10,
    backgroundColor: '#c4c4c4',
  },
  listWrapper: {
    width: '100%',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  contentsBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 5,
  },
  contents: {
    color: '#c4c4c4',
    fontSize: 12,
  },
  detail: {
    color: '#000000',
    fontSize: 12,
    marginHorizontal: 5,
  },
  title: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 5,
  },
  date: {
    position: 'absolute',
    right: 10,
    color: '#c4c4c4',
    fontSize: 12,
  },
});

export default Board1;
