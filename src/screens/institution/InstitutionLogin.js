import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TextInput,
} from 'react-native';

const InstitutionLogin = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.topCircle} />
      <View style={styles.rightCircle} />
      <View style={styles.bottomCircle} />
      <View style={styles.viewContainer}>
        <Text style={styles.appName}>Bongdari</Text>
        <Text style={styles.comment}>로그인</Text>
        <View style={styles.divisionLine} />
        <TextInput
          style={styles.loginInput}
          placeholder="아이디"
          placeholderTextColor="#ededed"
        />
        <TextInput
          style={styles.loginInput}
          placeholder="비밀번호"
          placeholderTextColor="#ededed"
        />
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>로그인</Text>
        </TouchableOpacity>
        <Text style={styles.find}>아이디 찾기 &#47; 비밀번호 찾기</Text>
        <Text>
          계정이 없으신가요? <Text style={styles.register}>기관등록</Text>
        </Text>
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
    top: '-1%',
    left: '20%',
    width: 54,
    height: 54,
    backgroundColor: '#d9e1e2',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 8,
    elevation: 6,
  },
  rightCircle: {
    position: 'absolute',
    top: '14%',
    right: '-5%',
    width: 63,
    height: 63,
    backgroundColor: '#2de2ac',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 4,
      height: 20,
    },
    shadowRadius: 8,
    elevation: 4,
  },
  bottomCircle: {
    position: 'absolute',
    bottom: '13%',
    left: '15%',
    width: 84,
    height: 84,
    backgroundColor: '#ffb623',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 8,
    elevation: 6,
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
    color: '#000000',
    fontSize: 20,
    marginTop: 34,
  },
  divisionLine: {
    width: '100%',
    height: 1,
    marginTop: 10,
    backgroundColor: '#ededed',
  },
  loginInput: {
    marginTop: 10,
    width: '100%',
    height: 40,
    borderColor: '#ededed',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 16,
  },
  loginButton: {
    marginVertical: 10,
    width: '100%',
    height: 40,
    backgroundColor: '#ededed',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: '#ffffff',
    fontSize: 16,
  },
  find: {
    fontSize: 14,
    color: '#008489',
  },
  register: {
    fontSize: 14,
    color: '#008489',
    textDecorationLine: 'underline',
  },
});

export default InstitutionLogin;
