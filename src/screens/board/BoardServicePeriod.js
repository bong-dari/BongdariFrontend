import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';
import { CommonButton } from '../../assets/globalStyles';
import { CalendarList, LocaleConfig } from 'react-native-calendars';
import Arrow from 'react-native-vector-icons/AntDesign';

LocaleConfig.locales.fr = {
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  monthNamesShort: [
    'Janv.',
    'Févr.',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juil.',
    'Août',
    'Sept.',
    'Oct.',
    'Nov.',
    'Déc.',
  ],
  dayNames: ['월', '화', '수', '목', '금', '토', '일'],
  dayNamesShort: ['월', '화', '수', '목', '금', '토', '일'],
  today: "Aujourd'hui",
};
LocaleConfig.defaultLocale = 'fr';

const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  /* padding: 25px 20px; */
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
`;
const Border = styled.View`
  width: 100%;
  height: 1px;
  background-color: #c4c4c4;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const BoardServicePeriod = () => {
  const { navigate } = useNavigation();
  const onPress = ({ type }) => {
    navigate(type);
  };

  return (
    <Container>
      <Text style={{ fontSize: 18 }}>
        봉사가 진행되는 기간을 골라 주세요&#33;
      </Text>
      <Border />
      <CalendarList
        markingType={'custom'}
        markedDates={{
          '2021-05-21': {
            customStyles: {
              container: {
                // backfaceVisibility?: 'visible' | 'hidden';
                // backgroundColor: '#0099cc',
                // borderBottomColor?: ColorValue;
                borderBottomEndRadius: 0,
                borderTopEndRadius: 0,
                borderWidth: 1,
                borderColor: '#0099cc',
                borderRightWidth: 0,
                // borderBottomLeftRadius?: number;
                // borderBottomRightRadius: 0,
                // borderBottomStartRadius: 0,
                // borderBottomWidth?: number;
                // borderColor?: ColorValue;
                // borderEndColor?: ColorValue;
                // borderLeftColor?: ColorValue;
                // borderLeftWidth?: number;
                // borderRadius?: number;
                // borderRightColor?: ColorValue;
                // borderRightWidth?: number;
                // borderStartColor?: ColorValue;
                // borderStyle?: 'solid' | 'dotted' | 'dashed';
                // borderTopColor?: ColorValue;
                // borderTopEndRadius?: number;
                // borderTopLeftRadius?: number;
                // borderTopRightRadius?: number;
                // borderTopStartRadius?: number;
                // borderTopWidth?: number;
                // borderWidth?: number;
                // opacity?: number;
                // testID?: string;,
              },
              text: {
                color: '#0099cc',
                fontWeight: 'bold',
              },
            },
          },
          '2021-05-22': {
            customStyles: {
              container: {
                borderBottomEndRadius: 0,
                borderTopEndRadius: 0,
                borderBottomStartRadius: 0,
                borderTopStartRadius: 0,
                borderWidth: 1,
                borderColor: '#0099cc',
                borderRightWidth: 0,
                borderLeftWidth: 0,
              },
              text: {
                color: '#0099cc',
                fontWeight: 'bold',
              },
            },
          },
          '2021-05-23': {
            customStyles: {
              container: {
                backgroundColor: '#0099cc',
              },
              text: {
                color: '#fff',
                fontWeight: 'bold',
              },
            },
          },
          '2021-05-24': {
            customStyles: {
              container: {
                backgroundColor: '#0099cc',
              },
              text: {
                color: '#fff',
                fontWeight: 'bold',
              },
            },
          },
          '2021-05-25': {
            customStyles: {
              container: {
                backgroundColor: '#0099cc',
              },
              text: {
                color: '#fff',
                fontWeight: 'bold',
              },
            },
          },
        }}
        // Callback which gets executed when visible months change in scroll view. Default = undefined
        onVisibleMonthsChange={months => {
          console.log('now these months are visible', months);
        }}
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={0}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={4}
        // Enable or disable scrolling of calendar list
        scrollEnabled={true}
        // Enable or disable vertical scroll indicator. Default = false
        showScrollIndicator={false}
        onDayPress={day => {
          console.log('day', day);
        }}
      />
      <CommonButton
        title="다음"
        onPress={() => onPress({ type: 'BoardContact' })}
      />
    </Container>
  );
};

export default BoardServicePeriod;
