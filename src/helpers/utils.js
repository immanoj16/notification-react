export const formatUserInfo = (name, avatar, uid) => {
  return {
    name,
    avatar,
    uid
  }
}

export const formatNotification = (text, uid, type) => {
  if (uid) {
    return {
      text,
      uid,
      type,
      timestamp: Date.now()
    }
  } else {
    return {}
  }
}

export const dateHelper = () => {

  const dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  const currentDate = new Date();
  const day = currentDate.getDay();
  const date = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  return `${dayArray[day]} ${months[month]}, ${date} ${year}`
}

const countHelper = (array, regex) => {
  return array.reduce((count, ele) => {
    if (ele.type === regex)
      return count + 1;
    else
      return count;
  }, 0)
}

export const notificationCountHelper = (notifications) => {
  const notificationArray = objectToArray(notifications);  
  return {
    notificationCount: countHelper(notificationArray, 'notification'),
    taskCount: countHelper(notificationArray, 'task'),
    reminderCount: countHelper(notificationArray, 'reminder')
  }
}

export const objectToArray = (object) => {
  return Object.keys(object)
    .reduce((array, key) => {
      array.push(object[key]);
      return array;
    }, []);
}