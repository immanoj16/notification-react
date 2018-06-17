import React from 'react';

import Notification from './Notification';
import { objectToArray } from '../helpers/utils';

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
    </div>
  )
};

export default NotificationList;