// import React, { useEffect, useState } from 'react';
// import { Text, View } from 'react-native';
// import styled from 'styled-components';
// import 'dayjs/locale/ko';
// import dayjs from 'dayjs';

// const Container = styled.View`
//   flex: 1;
//   background-color: #aaa;
//   padding: 20px 0;
// `;
// const DateContainer = styled.View`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
//   align-items: center;
//   background-color: #222;
// `;
// const DateText = styled.Text`
//   background-color: #0099cc;
//   color: #fff;
//   padding: 10px;
// `;

// const Test2 = () => {
//   // const [week, setWeek] = useState([]);
//   console.log(dayjs().utc().local().format());
//   console.log(dayjs().locale('ko').format());
//   const [month, setMonth] = useState([]);
//   const [day, setDay] = useState([]);
//   const week = ['일', '월', '화', '수', '목', '금', '토'];

//   return (
//     <Container>
//       <DateContainer>
//         {week.map(date => {
//           return (
//             <View key={date}>
//               <DateText>{date}</DateText>
//             </View>
//           );
//         })}
//       </DateContainer>
//       <View>
//         {/* {month.map(cur => {
//           return <Text key={cur.month}>{cur.month + '월'}</Text>;
//         })} */}
//         {/* {day.map(cur => {
//           return <Text key={cur.day}>{cur.day}</Text>;
//         })} */}
//       </View>
//     </Container>
//   );
// };

// export default Test2;
