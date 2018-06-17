import React from 'react';

import Notification from './Notification';

const NotificationList = ({notifications, handleRemoveNotification}) => {
  return (
    <div>
      {/* {notifications.map((notification, i) => {
        return (
          <Notification
            handleRemoveNotification={handleRemoveNotification}
            key={i}
            notification={notification}
          />
        )
      })} */}
      Notification
    </div>
  )
};

export default NotificationList;