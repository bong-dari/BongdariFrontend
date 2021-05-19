import React from 'react';
import styled from 'styled-components/native';
import BoardSearchBar from './BoardSearchBar';

const Container = styled.SafeAreaView`
  margin-top: 16px;
  padding: 0 20px;
`;

const TabWrapper = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  margin-top: 16px;
  border: 1px solid #ededed;
`;

const TabButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 33.3%;
  height: 40px;
  padding: 0 10px;
  border: 1px solid #ededed;
  background-color: ${props => (props.isFocused ? '#ededed' : 'transparent')};
`;

const TabText = styled.Text`
  font-weight: 800;
  font-size: 12px;
  color: ${props => (props.isFocused ? '#c4c4c4' : '#000000')};
`;

// 게시판 상단 Tab 영역
const BoardTabBar = ({ state, descriptors, navigation }) => {
  return (
    <Container>
      {/* 기관일 경우 SearchBar의 어트리뷰트로 institution 전달 */}
      <BoardSearchBar />
      <TabWrapper>
        {state.routes.map((route, index) => {
          const label = route.name;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
          return (
            <TabButton
              isFocused={isFocused}
              onPress={onPress}
              key={`tab_${index}`}>
              <TabText isFocused={isFocused}>{label}</TabText>
            </TabButton>
          );
        })}
      </TabWrapper>
    </Container>
  );
};

export default BoardTabBar;
