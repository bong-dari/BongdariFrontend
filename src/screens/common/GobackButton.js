import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Feather';

const BackButton = styled.TouchableOpacity`
  margin-left: 20px;
  width: 35px;
  height: 35px;
`;

const GobackButton = () => {
  return (
    <BackButton>
      <Icon name="chevron-left" size={35} />
    </BackButton>
  );
};

export default GobackButton;
