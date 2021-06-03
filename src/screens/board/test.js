import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import { getMonth, getDaysInMonth, getYear, getDay } from 'date-fns';
import { eachDayOfInterval } from 'date-fns/esm';

const Container = styled.ScrollView`
  flex: 1;
  /* background-color: #aaa; */
  padding: 20px 0;
  display: flex;
  position: relative;
`;
const DateContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #ededed;
`;
const CalendarContainer = styled.View`
  width: 375px;
`;
const DateText = styled.Text`
  /* background-color: #0099cc; */
  color: #222;
  padding: 10px;
`;
const DateButtonWrap = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const DateButton = styled.TouchableOpacity`
  width: 13%;
  height: 30px;
`;
const ButtonText = styled.Text`
  background-color: #0099cc;
  color: #c4c4c4;
  text-align: center;
`;
const MonthCalendarContainer = styled.View`
  padding-bottom: 10px;
`;
const MonthText = styled.Text`
  font-size: 24px;
  margin-left: 15px;
  padding: 15px 0;
  /* background-color: #0099cc; */
`;
const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  margin-top: 20px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor || '#ffb623'};
  position: absolute;
  top: 600px;
`;

const NextButtonText = styled.Text`
  font-size: 18px;
  color: ${props => props.color || '#ffffff'};
`;

const Test = () => {
  const [calendarLists, setCalendarLists] = useState([]);
  const week = ['일', '월', '화', '수', '목', '금', '토'];

  const getCalendarLists = () => {
    const arr = [];
    let innerArr = [];
    const monthArr = [];
    const year = getYear(new Date());
    const date = getMonth(new Date()) + 1;
    // 현재 월을 기준으로 + 3개월
    // 총 4개월에 월별로 해당하는 일수를 Day에 push
    for (let j = 0; j < 4; j++) {
      const isDate = getDaysInMonth(new Date(year, date + j - 1));
      monthArr.push({
        // eachDayOfInterval은 start, end에 들어간 날짜 사이의 날짜를 반환
        // start: 1일 , end: 해당월의 제일 마지막 날짜
        day: eachDayOfInterval({
          start: new Date(year, date + j - 1, 1),
          end: new Date(year, date + j - 1, isDate + 1),
        }),
      });
      // 월의 첫번째 날짜를 해당하는 요일에 넣기 위해서 수요일이면 일,월,화자리에 빈문자열을 넣어주는데
      // 그 빈문자열을 넣어준 수 만큼 36에서 빼줌으로써 35만 랜더링 되도록 구현
      // 35만큼 도는 이유는 요일에 맞게 날짜를 넣어주기 위해서
      let count = 36 - getDay(monthArr[j].day[0]);
      for (let i = 1; i < count; i++) {
        // 첫번째 날짜에 해당하는 요일에 들어갈 수 있도록 해당 요일까지 빈문자열을 넣어줌
        if (i === 1) {
          for (let cur = 0; cur < getDay(monthArr[j].day[0]); cur++) {
            innerArr.push({
              date: '',
              name: '',
            });
          }
          // 만약 monthArr가 undefined가 아니라면 즉 날짜가 적혀있다면 innerArr에 날짜를 넣어줌
          // MonthArr가 undefined라면 빈 문자열을 넣어줌
          // format할때 utc시간 과의 오차가 있어서 랜더링되어지는 날짜가 실제 들어있는 값과 다르게 랜더링되서
          // name에는 랜더링 시켜줄 날짜를 인덱스 번호로 넣어줌
          // format을 할때는 한국시간으로 바뀌고 , 값으로 들어있는 date객체는 UTC기준 시간으로 들어감
          monthArr[j].day[i] !== undefined
            ? innerArr.push({
                date: monthArr[j].day[i],
                name: i,
              })
            : innerArr.push({
                date: '',
                name: '',
              });
        } else if (monthArr[j].day[i] !== undefined) {
          // 아래에 else if문은 위의 로직과 동일, 두번째 날짜부터 마지막 날짜까지
          innerArr.push({
            date: monthArr[j].day[i],
            name: i,
          });
        } else if (monthArr[j].day[i] === undefined) {
          innerArr.push({
            date: '',
            name: '',
          });
        }
      }
      // arr에 innerArr을 Push해 준후 초기화
      // 초기화를 시켜주는 이유는 달별로 구분해서 넣어주기 위해서
      arr.push(innerArr);
      innerArr = [];
    }
    setCalendarLists(arr);
  };

  useEffect(() => {
    getCalendarLists();
  }, []);
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
      <CalendarContainer>
        {calendarLists.map(v => {
          console.log('v', v);
          return (
            <MonthCalendarContainer>
              <MonthText key={getMonth(v[8].date) + 1}>
                {getMonth(v[8].date) + 1 + '월'}
              </MonthText>
              <DateButtonWrap>
                {v.map((value, i) => {
                  return (
                    <DateButton key={i} onPress={() => console.log(value)}>
                      <ButtonText>{value.name}</ButtonText>
                    </DateButton>
                  );
                })}
              </DateButtonWrap>
            </MonthCalendarContainer>
          );
        })}
      </CalendarContainer>
      {/* <ButtonContainer>
        <NextButtonText>선택 완료</NextButtonText>
      </ButtonContainer> */}
    </Container>
  );
};

export default Test;
