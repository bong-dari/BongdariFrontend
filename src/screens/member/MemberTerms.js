import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { CommonButton } from '../../assets/globalStyles';

const MemberTerms = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.topCircle} />
      <View style={styles.bottomCircle} />
      <Text style={styles.appName}>Bongdari</Text>
      <View style={styles.viewContainer}>
        <Text style={styles.comment}>추가 동의가 필요합니다.</Text>
        <Text style={styles.description}>
          &#183; 전체동의는 필수 및 선택정보에 대한 동의도 포함되어 있으며,
          개별적으로도 동의를 선택할 수 있습니다.
        </Text>
        <Text style={styles.description}>
          &#183; 선택항목에 대한 동의를 거부하는 경우에도 서비스 이용이
          가능합니다.
        </Text>
        <CommonButton onPress={() => true} title="약관에 모두 동의" />
        <View style={styles.checkListBox}>
          <Text style={styles.checkListItem}>
            &#40;필수&#41; 서비스 이용 약관
          </Text>
          <CheckBox style={styles.checkbox} />
        </View>
        <View style={styles.checkListBox}>
          <Text style={styles.checkListItem}>
            &#40;필수&#41; 위치 정보 이용 동의
          </Text>
          <CheckBox style={styles.checkbox} />
        </View>
        <View style={styles.checkListBox}>
          <Text style={styles.checkListItem}>
            &#40;필수&#41; 만 14세 이상입니다
          </Text>
          <CheckBox style={styles.checkbox} />
        </View>
        <View style={styles.checkListBox}>
          <Text style={styles.checkListItem}>
            &#40;선택&#41; 마케팅 정보 메일, SMS 수신동의
          </Text>
          <CheckBox style={styles.checkbox} />
        </View>
        <CommonButton onPress={() => true} title="완료" />
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
    top: '15%',
    right: '20%',
    width: 30,
    height: 30,
    backgroundColor: '#d9e1e2',
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
    bottom: '7%',
    left: '-3%',
    width: 63,
    height: 63,
    backgroundColor: '#2de2ac',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 8,
    elevation: 4,
  },
  appName: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 7,
    alignSelf: 'flex-start',
  },
  viewContainer: {
    width: '100%',
    paddingVertical: 40,
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
  comment: {
    width: 220,
    paddingBottom: 12,
    color: '#6c6c6c',
    fontSize: 20,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#ffffff',
    borderBottomColor: '#c0c0c0',
  },
  description: {
    marginTop: 10,
    color: '#696969',
    fontSize: 12,
  },
  checkListBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkListItem: {
    marginTop: 10,
    color: '#898989',
    textDecorationLine: 'underline',
  },
  checkbox: {
    alignSelf: 'center',
    marginTop: 10,
  },
});

export default MemberTerms;
