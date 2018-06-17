import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Notification = ({name, notification, handleRemoveNotification}) => {
  const { notificationId, timestamp, type } = notification;

  console.log(name);

  let view = 'View ';
  let input;
  if (type === 'notification') {
    view += 'Notification >';
    input = `${name} sent a notification`;
  }

  if (type === 'reminder') {
    view += 'Reminder >';
    input = `${name} added a reminder`;
  }

  if (type === 'task') {
    view += 'Task >';
    input = `${name} has assigned you to a task`;
  }

  return (
    <Div>
      <Span onClick={() => handleRemoveNotification(notificationId)}>&times;</Span>
      <Content>
        <Time>{moment(timestamp).fromNow()}</Time>
        <div style={{lineHeight: '1em'}}>{input}</div>
        <View>{view}</View>
      </Content>
    </Div>
  )
};

const Div = styled.div`
  border: 1px solid #D8D8D8;
  border-top: none;
  height: 120px;
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

const Time = styled.div`
  color: #000000;
  font-weight: bold;
`;

const View = styled.div`
  font-size: 13px;
  color: blue;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default Notification;
