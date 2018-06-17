import React from 'react';
import styled from 'styled-components';

import NotificationHeaderElement from './NotificationHeaderElement';

const NotificationHeader = ({ notificationCount }) => {

  const currentDate = helper();

  return (
    <div>
      <Div>{currentDate}</Div>
      <Header>
        <NotificationHeaderElement count='56' name='Assigned Tasks' />
        <NotificationHeaderElement count='4' name='Reminders' />
        <NotificationHeaderElement count={notificationCount} name='Notifications' />
      </Header>
    </div>
  )
}

const helper = () => {

  const dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  const currentDate = new Date();
  const day = currentDate.getDay();
  const date = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  return `${dayArray[day]} ${months[month]}, ${date} ${year}`
}

const Div = styled.div`
  border: 1px solid #D8D8D8;
  border-top: 6px solid #D8D8D8;
  text-align: left;
  padding: 16px 12px;
  font-size: 20px;
`;

const Header = styled.div`
  border: 1px solid #D8D8D8;
`;

export default NotificationHeader;
