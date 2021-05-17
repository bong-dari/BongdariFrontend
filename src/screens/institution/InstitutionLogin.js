import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const InstitutionLogin = () => {
  const { navigate } = useNavigation();
  const onPress = ({ type }) => {
    navigate(type);
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.topCircle} />
      <KeyboardAvoidingView
        style={styles.viewContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.rightCircle} />
        <View style={styles.bottomCircle} />
        <Text style={styles.appName}>Bongdari</Text>
        <View style={styles.divisionContainer}>
          <View style={styles.divisionLine} />
          <Text style={styles.divisionText}>로그인</Text>
        </View>
        <TextInput
          style={styles.loginInput}
          placeholder="아이디"
          placeholderTextColor="#c4c4c4"
        />
        <TextInput
          style={styles.loginInput}
          placeholder="비밀번호"
          placeholderTextColor="#c4c4c4"
        />
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>로그인</Text>
        </TouchableOpacity>
        <Text style={styles.findLink}>아이디 찾기 &#47; 비밀번호 찾기</Text>
        <Text style={{ color: '#000' }}>
          계정이 없으신가요?{' '}
          <Text
            style={styles.registerLink}
            onPress={() => onPress({ type: 'InstitutionIdForm' })}>
            기관등록
          </Text>
        </Text>
      </KeyboardAvoidingView>
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
  rightCircle: {
    position: 'absolute',
    bottom: '95%',
    right: '-12%',
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
    bottom: '-10%',
    left: '15%',
    width: 58,
    height: 58,
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
  appName: {
    color: '#3eb1c8',
    fontSize: 20,
    fontWeight: 'bold',
  },
  divisionContainer: {
    width: '100%',
    height: 20,
    position: 'relative',
    marginTop: 60,
    marginBottom: 10,
    justifyContent: 'center',
  },
  divisionLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#929292',
  },
  divisionText: {
    color: '#8c8c8c',
    backgroundColor: '#fff',
    textAlign: 'center',
    position: 'absolute',
    width: 80,
    left: '50%',
    top: '50%',
    marginLeft: -40,
    marginTop: -10,
    fontSize: 15,
  },
  loginInput: {
    marginTop: 10,
    paddingLeft: 7,
    width: '100%',
    height: 40,
    borderColor: '#c4c4c4',
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
  findLink: {
    fontSize: 14,
    color: '#008489',
  },
  registerLink: {
    fontSize: 14,
    color: '#008489',
    textDecorationLine: 'underline',
  },
});

export default InstitutionLogin;
