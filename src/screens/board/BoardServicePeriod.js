import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CommonButton } from '../../assets/globalStyles';
import { CalendarList, LocaleConfig } from 'react-native-calendars';
import moment, { weekdays } from 'moment';
import { Button, SafeAreaView, Text, View } from 'react-native';
import { addDays, format, getDate, startOfWeek } from 'date-fns';

// LocaleConfig.locales.fr = {
//   monthNames: [
//     '1월',
//     '2월',
//     '3월',
//     '4월',
//     '5월',
//     '6월',
//     '7월',
//     '8월',
//     '9월',
//     '10월',
//     '11월',
//     '12월',
//   ],
//   monthNamesShort: [
//     'Janv.',
//     'Févr.',
//     'Mars',
//     'Avril',
//     'Mai',
//     'Juin',
//     'Juil.',
//     'Août',
//     'Sept.',
//     'Oct.',
//     'Nov.',
//     'Déc.',
//   ],
//   dayNames: ['월', '화', '수', '목', '금', '토', '일'],
//   dayNamesShort: ['월', '화', '수', '목', '금', '토', '일'],
//   today: "Aujourd'hui",
// };
// LocaleConfig.defaultLocale = 'fr';

const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  padding: 25px 20px;
  /* align-items: center; */
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
const Description = styled.Text`
  font-size: 18px;
  text-align: center;
`;

const BoardServicePeriod = () => {
  const [week, setWeek] = useState([]);
  const today = new Date();
  const { navigate } = useNavigation();
  const onPress = ({ type }) => {
    navigate(type);
  };

  // useEffect(() => {
  //   const weekDays = getWeekDays(date);
  //   setWeek(weekDays);
  // }, [date]);

  // useEffect(() => {
  //   const weekDays = getWeekDays(today);
  //   setWeek(weekDays);
  // }, [today]);
  return (
    <Container>
      <Description>봉사가 진행되는 기간을 골라 주세요&#33;</Description>
      <Border />
      {/* <CalendarList
        markingType={'period'}
        minDate={today}
        // Callback which gets executed when visible months change in scroll view. Default = undefined
        // markedDates={{
        //   // '2021-05-20': { textColor: 'green' },
        //   '2021-05-22': {
        //     startingDay: true,
        //     endingDay: true,
        //     color: '#ffb623',
        //     // color: '#0099cc',
        //     textColor: '#fff',
        //   },
        markedDates={selectDate.markedDates}
        // '2021-05-30': {
        //   // selected: true,
        //   // endingDay: true,
        //   startingDay: true,
        //   color: '#ffa623',
        //   // color: '#0088cc',
        //   textColor: '#fff',
        // },
        // '2021-05-31': {
        //   disabled: true,
        //   // startingDay: true,
        //   color: '#ffb623',
        //   // color: '#0099cc',
        //   textColor: '#fff',
        //   // endingDay: true,
        // },
        // '2021-06-01': {
        //   // disabled: true,
        //   // startingDay: true,
        //   textColor: '#fff',
        //   color: '#ffb623',
        //   // color: '#0099cc',
        //   // endingDay: true,
        // },
        // '2021-06-02': {
        //   // disabled: true,
        //   // startingDay: true,
        //   textColor: '#fff',
        //   color: '#ffa623',
        //   // color: '#0088cc',
        //   endingDay: true,
        // },
        // }}
        // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
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
          getSelectedDayEvenets(day.dateString);
        }}
      /> */}
      {/* <View>{week.formatted}</View> */}
      <CommonButton
        title="다음"
        onPress={() => onPress({ type: 'BoardContact' })}
      />
    </Container>
  );
};

export default BoardServicePeriod;
