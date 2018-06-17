import React from 'react';

import Notification from './Notification';
import { objectToArray } from '../helpers/utils';
import styled from 'styled-components';

const NotificationList = ({users, notifications, handleRemoveNotification}) => {

  const notificationArrayUnsorted = objectToArray(notifications);

  const notificationArray = notificationArrayUnsorted.sort((a, b) => {
    return a.timestamp < b.timestamp;
  })

  return (
    <div>
      {notificationArray.map((notification) => {

        // let name = 'No name';
        const { name } = users.find(({ uid }) => uid === notification.uid);

        return (
          <Notification
            name={name}
            handleRemoveNotification={handleRemoveNotification}
            key={notification.notificationId}
            notification={notification}
          />
        )
      })}
      {notificationArray.length === 0 &&
        <Note>No Notification available</Note>  
      }
    </div>
  )
};

const Note = styled.div`
  padding: 20px 0;
  text-align: center;
  font-size: 20px;
  color: red;
`;

export default NotificationList;