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

const Board2 = () => {
  // 보여줄 리스트 데이터
  const DATA = [
    {
      id: '1',
      nickname: 'youngseo',
      title:
        '저녁 8시에 서운 체육공원 근처에서 플로깅 하실 수 있는 3분 모집합니다~',
      contact: '010 - 7110 - 4287',
      startDate: '04.05',
      endDate: '04.12',
      capacity: 3,
    },
    {
      id: '2',
      nickname: 'dongchan',
      title:
        '6월 21일 관악산 등산 하면서 같이 쓰레기 주우실분 2분 모집합니다!!',
      contact: '010 - 9876 - 5432',
      startDate: '06.21',
      endDate: '06.21',
      capacity: 2,
    },
  ];

  const renderItem = ({ item }) => {
    return <Item item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.description}>
        조깅과 환경 정화 운동을 동시에 할 수 있는 플로깅이나 작은 규모의
        자원봉사 같이 여러가지 형태의 봉사를 자유롭게 주최하고 또 참여해보세요!
      </Text>
      <View style={styles.divisionLine} />
      <FlatList
        data={DATA}
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

export default Board2;
