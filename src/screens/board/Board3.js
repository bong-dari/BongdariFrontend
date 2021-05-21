import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const Item = ({ item }) => {
  return (
    <View style={styles.listWrapper}>
      <View style={styles.contentsBox}>
        <Text style={styles.contents}>{item.nickname}</Text>
      </View>
      <Text style={styles.title}>{item.title}</Text>
      {/* numberOfLines 어트리뷰는 텍스트의 줄 수를 제한하고 넘어갈 시 elipsis(...) 처리한다 */}
      <Text style={styles.info} numberOfLines={3}>
        {item.details}
      </Text>
      <View style={styles.contentsBox}>
        <Text style={styles.contents}>연락처</Text>
        <Text style={styles.detail}>{item.contact}</Text>
      </View>
      <View style={styles.contentsBox}>
        <Text style={styles.contents}>희망 봉사 기간</Text>
        <Text style={styles.detail}>
          {item.startDate} ~ {item.endDate}
        </Text>
        <Text style={styles.date}>1시간 전</Text>
      </View>
      <View style={styles.divisionLine} />
    </View>
  );
};

const Board3 = () => {
  // 보여줄 리스트 데이터
  const DATA = [
    {
      id: '1',
      nickname: 'youngseo',
      title: '(통/번역 봉사) 일본어/영어 봉사활동 희망합니다.',
      details:
        '안녕하세요, 저는 외고 일본어과를 졸업하고 현재 일본의 한 대학에서 국제학을 전공하고 있는 김봉사라고 합니다. (온라인 강의) 저는 JLPT N1, EJU 345/371점 및 TOEIC 830점, TOEIC S&W 각각 lv6, lv7을 보유하고 있습니다. 비대면 통번역 모두 가능하며, 대면의 경우 울산 근교 지역 가능합니다. 1234@naver.com으로 컨택 부탁드립니다. 연락 기다리고 있겠습니다. 감사합니다.',
      contact: '010 - 1234 - 5678',
      startDate: '06.01',
      endDate: '06.03',
    },
  ];

  const renderItem = ({ item }) => {
    return <Item item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.description}>
        자신의 재능을 원하는 날짜 원하는 시간에 나눠주세요!
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
  info: {
    color: '#000000',
    fontSize: 14,
    marginTop: 10,
    marginBottom: 15,
  },
  date: {
    position: 'absolute',
    right: 10,
    color: '#c4c4c4',
    fontSize: 12,
  },
});

export default Board3;
