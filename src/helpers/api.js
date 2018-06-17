import { ref } from '../config/constants';

// Notifications

const senderNotification = (senderId, notification, notificationId) => {
  return ref.child(`notification/${senderId}/sent/${notificationId}`).set({...notification, notificationId});
}

const receiveNotification = (recieverId, notification, notificationId) => {
  return ref.child(`notification/${recieverId}/received/${notificationId}`).set({...notification, notificationId});
}

export const sendNotification = (notification, senderId, recieverId) => {
  const notificationId = ref.child(`notification/${senderId}/sent`).push().key;

  return Promise.all([
    senderNotification(senderId, notification, notificationId),
    receiveNotification(recieverId, notification, notificationId)
  ]).then(() => ({...notification, notificationId}))
}

export const fetchNotification = (uid) => {
  return new Promise((resolve, reject) => {
    ref.child(`notification/${uid}`).on('value', snapshot => {
      const notification = snapshot.val();
      resolve(notification);
    })
  })
}

export const removeNotification = (uid, notificationId) => {
  ref.child(`notification/${uid}/received/${notificationId}`).remove();
}

// users

export const fetchUsers = () => {
  return new Promise((resolve, reject) => {
    ref.child('users').on('value', snapshot => {
      resolve(snapshot.val());
    })
  })
}