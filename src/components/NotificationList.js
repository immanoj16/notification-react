import React from 'react';

import Notification from './Notification';

const NotificationList = ({notifications, handleRemoveNotification}) => {

  const notificationArray = Object.keys(notifications)
    .reduce((array, key) => {
      array.push(notifications[key]);
      return array;
    }, []);

  console.log(notificationArray);

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