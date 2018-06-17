import React from 'react';
import styled from 'styled-components';

import NotificationHeaderElement from './NotificationHeaderElement';
import { dateHelper, notificationCountHelper } from '../helpers/utils';

const NotificationHeader = ({ notifications }) => {

  const currentDate = dateHelper();

  const { notificationCount, taskCount, reminderCount } = notificationCountHelper(notifications);

  return (
    <div>
      <Div>{currentDate}</Div>
      <Header>
        <NotificationHeaderElement count={taskCount} name='Assigned Tasks' />
        <NotificationHeaderElement count={reminderCount} name='Reminders' />
        <NotificationHeaderElement count={notificationCount} name='Notifications' />
      </Header>
    </div>
  )
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
