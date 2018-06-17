import React from 'react';
import styled from 'styled-components';

const Notification = ({notification, handleRemoveNotification}) => {
  const { name, created, type } = notification;

  let view = 'View ';
  if (type === 'notification') {
    view += 'Notification >';
  }

  if (type === 'reminder') {
    view += 'Reminder >';
  }

  if (type === 'task') {
    view += 'Task >'
  }

  return (
    <Div>
      <Span onClick={() => handleRemoveNotification(notification.id)}>&times;</Span>
      <Content>
        <Time>Just now</Time>
        <p>{name}</p>
        <p>{created}</p>
        <View>{view}</View>
      </Content>
    </Div>
  )
};

const Div = styled.div`
  border: 1px solid #D8D8D8;
  border-top: none;
  height: 120px;
  line-height: .5em;
  width: 100%;
`;

const Span = styled.div`
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  padding: 10px;
  &:hover {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  };
  &;focous {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Content = styled.div`
  padding: 10px;
  padding-top: 25px;
`;

const Time = styled.span`
  color: #000000;
  font-weight: bold;
`;

const View = styled.span`
  font-size: 13px;
  color: blue;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default Notification;
