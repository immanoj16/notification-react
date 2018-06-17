import React from 'react';

import Notification from './Notification';
import { objectToArray } from '../helpers/utils';
import styled from 'styled-components';

const NotificationList = ({notifications, handleRemoveNotification}) => {

  const notificationArray = objectToArray(notifications);

  return (
    <div>
      {notificationArray.map((notification) => {
        return (
          <Notification
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