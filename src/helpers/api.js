import { ref } from '../config/constants';

const senderNotification = (senderId, notification, notificationId) => {
  return ref.child(`notification/${senderId}/sent/${notificationId}`).set({...notification, notificationId});
}

const receiveNotification = (recieverId, notification, notificationId) => {

  console.log('receiveerid', recieverId);
  return ref.child(`notification/${recieverId}/received/${notificationId}`).set({...notification, notificationId});
}

export const sendNotification = (notification, senderId, recieverId) => {
  const notificationId = ref.child(`notification/${senderId}/sent`).push().key;

  return Promise.all([
    senderNotification(senderId, notification, notificationId),
    receiveNotification(recieverId, notification, notificationId)
  ]).then(() => ({...notification, notificationId}))
}