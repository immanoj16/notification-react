import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Link } from 'react-router-dom';
import slug from 'slug';

const SingleNotification = ({notification, name}) => {

  console.log(name);

  let title, send;
  if (notification) {
    if (notification.type === 'notification') {
      title = 'Notification';
      send = 'sent this notification to you';
    }
  
    if (notification.type === 'task') {
      title = 'Task';
      send = 'has assigned you to this task';
    }
  
    if (notification.type === 'reminder') {
      title = 'Reminder';
      send = 'sent this reminder to you';
    }
  }

  return (
    <Container>
      <Title>{title}</Title>
      <InnerContainer>
        <Para><Bold><LinkStyle to={`/dashboard/${slug(name)}`}>{name}</LinkStyle></Bold> <Span>{send}</Span></Para>
        <Time>{moment(notification.timestamp).fromNow()}</Time>
        <p>{notification.text}</p>
      </InnerContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 400px;
  height: 300px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s
  margin: 0 auto;
  margin-top: 100px;
  border-radius: 5px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  @media (max-width: 769px) {
    margin-top: 250px;
  }
`;

const LinkStyle = styled(Link)`
  color: #34495e;
  text-decoration: none;
  &:hover {
    color: #718daa
  }
`;

const Title = styled.h2`
  color: #34495e;
  font-size: 25px;
  border-bottom: 1px solid #D8D8D8;
  padding: 10px 18px;
`;

const InnerContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const Bold = styled.span`
  color: #4a90e2;
  font-weight: bold;
`;

const Para = styled.p`
  margin-bottom: 0;
`;

const Time = styled.span`
  color: #4a90e2;
  font-size: 12px;
  font-weight: initial;
`;

const Span = styled.span`
  font-size: 14px;
  font-weight: initial;
`;

export default SingleNotification;
