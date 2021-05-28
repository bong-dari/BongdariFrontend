import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import koLocale from 'date-fns/locale/ko';
import {
  addDays,
  format,
  getDate,
  startOfWeek,
  getMonth,
  formatDistanceToNowStrict,
  getDaysInMonth,
  getYear,
} from 'date-fns';
import { weekdaysShort } from 'moment';
import { eachDayOfInterval } from 'date-fns/esm';
const Container = styled.View`
  flex: 1;
  background-color: #aaa;
  padding: 20px 0;
`;
const DateContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #222;
`;
const DateText = styled.Text`
  background-color: #0099cc;
  color: #fff;
  padding: 10px;
`;

const Test = () => {
  const [month, setMonth] = useState([]);
  const [day, setDay] = useState([]);
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  // 랜더링 됐을 시 현재 날짜를 기준으로 달력을 그려주기 위해 useEffect에 작성, 나중에 함수로 분리할 예정
  useEffect(() => {
    const monthArr = [];
    const dayArr = [];
    // getYaer로 현재 연도 획득
    const year = getYear(new Date());
    console.log('year');

    // date에는 현재날짜를 기준으로 몇월인지를 받아오는데 +1을 하는 이유는 월의 인덱스가 받아와지기때문에 4가 5월
    const date = getMonth(new Date()) + 1;
    // getDaysInMonth메서는 주어진 날짜에서 한 달의 일 수를 얻음
    // year = 2021년, 현재 월의 인덱스를 주기 위해서 date - 1
    const isDate = getDaysInMonth(new Date(year, date - 1));
    // for문을 4번 돌아서 현재 월 + 4개월의 월을 구해서 monthArr에 push
    for (let i = 0; i < 4; i++) {
      monthArr.push({
        month: date + i,
      });
      // eachDayOfInterval를 통해서 첫번째 달의 해당하는 일수만큼 날짜를 생성 후 랜더링
      // Start와 end사이의 모든 날짜를 반환하는데 start가 5월 1일 end가 5월 31일로 찍히는데
      // 그 eachDayOfInterval로 반환된 날짜는 4월 30일 ~ 5월 30일이 반환되는게 현재 문제점입니다.
      dayArr.push({
        day: eachDayOfInterval({
          start: new Date(year, date + i, 1),
          end: new Date(year, date + i, isDate),
        }),
      });
      // console.log(year, date + i, 1);
      // console.log(year, date + i, isDate);
    }
    setDay(dayArr);
    setMonth(monthArr);
  }, []);

  // console.log('day1', format(day[0].day[0], 'd', { locale: koLocale }));

  day.map(v => {
    for (let i = 0; i < v.day.length; i++) {
      console.log('cur', format(v.day[i], 'd', { locale: koLocale }));
    }
  });

  return (
    <Container>
      <DateContainer>
        {week.map(date => {
          return (
            <View key={date}>
              <DateText>{date}</DateText>
            </View>
          );
        })}
      </DateContainer>
      <View>
        {month.map(cur => {
          return <Text key={cur.month}>{cur.month + '월'}</Text>;
        })}
        {/* {day.map(cur => {
          return <Text key={cur.day}>{cur.day}</Text>;
        })} */}
      </View>
    </Container>
  );
};

export default Test;
