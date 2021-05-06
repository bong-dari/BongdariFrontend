import React from 'react';
import styled from 'styled-components/native';

const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  margin-top: 20px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor || '#ffb623'};
`;

const ButtonText = styled.Text`
  font-size: 18px;
  color: ${props => props.color || '#ffffff'};
`;

export const CommonButton = ({ onPress, bgColor, title, color }) => {
  return (
    <ButtonContainer onPress={onPress} bgColor={bgColor}>
      <ButtonText color={color}>{title}</ButtonText>
    </ButtonContainer>
  );
};
