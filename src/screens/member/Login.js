import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';

const Login = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.topCircle} />
      <View style={styles.rightCircle} />
      <View style={styles.bottomCircle} />
      <View style={styles.viewContainer}>
        <Text style={styles.appName}>Bongdari</Text>
        <Text style={styles.comment}>먼저 로그인이 필요해요 : &#41;</Text>
        <View style={styles.divisionContainer}>
          <View style={styles.divisionLine} />
          <Text style={styles.divisionText}>간편 로그인</Text>
        </View>
        <TouchableOpacity style={styles.socialContainer}>
          <Image
            source={require('../../assets/images/naverIcon.png')}
            resizeMode="contain"
            style={styles.socialIcon}
          />
          <Text style={styles.socialText}>네이버로 시작하기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialContainer}>
          <Image
            source={require('../../assets/images/kakaoIcon.png')}
            resizeMode="contain"
            style={styles.socialIcon}
          />
          <Text style={styles.socialText}>카카오로 시작하기</Text>
        </TouchableOpacity>
        <Text style={styles.questionComment}>
          봉사 기관이신가요?&nbsp;
          <Text style={styles.loginLink}>로그인</Text>
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
    color: '#b5b5b5',
    fontSize: 16,
    marginTop: 34,
  },
  divisionContainer: {
    width: '100%',
    height: 20,
    position: 'relative',
    marginTop: 10,
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
  },
  socialContainer: {
    width: '100%',
    height: 40,
    marginTop: 15,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#b4b4b4',
  },
  socialIcon: {
    width: 25,
    height: 25,
    position: 'absolute',
    left: '5%',
  },
  socialText: {
    fontSize: 16,
    color: '#878787',
  },
  questionComment: {
    marginTop: 18,
    color: '#818181',
  },
  loginLink: {
    textDecorationLine: 'underline',
  },
});

export default Login;
