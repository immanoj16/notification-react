import React from 'react';
import styled from 'styled-components';

const NotificationHeaderElement = ({ count, name }) => {
  return (
    <Div>
      <Count>{count}</Count>
      <Name>{name}</Name>
    </Div>
  )
};

const Div = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-around;
`;

const Count = styled.span`
  display: inline-block;
  font-size: 30px;
  color: blue;
`;

const Name = styled.span`
  display: inline-block;
  padding-left: 10px;
`;

export default NotificationHeaderElement;
