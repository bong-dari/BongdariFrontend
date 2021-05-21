import React from 'react';
import styled, { css } from 'styled-components/native';
import BoardSearchBar from './BoardSearchBar';

const Container = styled.SafeAreaView`
  margin-top: 20px;
  padding: 0 20px;
  background-color: #fff;
`;

const TabWrapper = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  margin-top: 15px;
`;

const TabButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 33.3%;
  height: 40px;
  padding: 0 10px;
  background-color: ${props => (props.isFocused ? '#ffb623' : 'transparent')};
  border-color: #c4c4c4;
  border-top-width: 1px;
  border-bottom-width: 1px;
  ${props =>
    props.isFocused &&
    css`
      border-color: #ffb623;
    `}
  /* 인덱스가 1인 버튼 요소에 좌우 보더 설정 */
  ${props =>
    props.child === 1 &&
    css`
      border-left-width: 1px;
      border-right-width: 1px;
    `}
`;

const TabText = styled.Text`
  font-weight: 800;
  font-size: 12px;
  color: ${props => (props.isFocused ? '#ffffff' : '#c4c4c4')};
`;

// 게시판 상단 Tab 영역
const BoardTabBar = ({ state, descriptors, navigation }) => {
  return (
    <Container>
      {/* 기관일 경우 BoardSearchBar의 어트리뷰트로 institution 전달하면 글쓰기 버튼 사라짐 */}
      <BoardSearchBar />
      <TabWrapper>
        {state.routes.map((route, index) => {
          // Tab Screen name을 label 변수에 할당하여 Text로 보여지게 처리
          const label = route.name;

          // state 객체의 index와 현재 탭의 index를 비교하여 focus 처리
          const isFocused = state.index === index;

          // 탭 이동 이벤트
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            console.log(event);

            // 현재 선택되지 않은 탭이면서 해당 탭이 이벤트가 발생중이 아니라면 해당 탭으로 이동
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
          return (
            // child 어트리뷰트는 두번째 버튼 좌우 보더를 넣기 위함
            <TabButton
              isFocused={isFocused}
              onPress={onPress}
              key={`tab_${index}`}
              child={index}>
              <TabText isFocused={isFocused}>{label}</TabText>
            </TabButton>
          );
        })}
      </TabWrapper>
    </Container>
  );
};

export default BoardTabBar;
