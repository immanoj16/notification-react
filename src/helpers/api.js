import { ref } from '../config/constants';

// Notifications

const sendNotification = (senderId, notification, notificationId) => {
  return ref.child(`notification/${senderId}/sent/${notificationId}`).set({...notification, notificationId});
}

const receiveNotification = (recieverId, notification, notificationId) => {
  return ref.child(`notification/${recieverId}/received/${notificationId}`).set({...notification, notificationId});
}

export const sendNotification = (notification, senderId, recieverId) => {
  const notificationId = ref.child(`notification/${senderId}/sent`).push().key;

  return Promise.all([
    sendNotification(senderId, notification, notificationId),
    receiveNotification(recieverId, notification, notificationId)
  ]).then(() => ({...notification, notificationId}))
}

// Tasks

const senderTask = (senderId, task, taskId) => {
  return ref.child(`task/${senderId}/sent/${taskId}`).set({...task, taskId});
}

const receiveTask = (recieverId, task, taskId) => {
  return ref.child(`task/${recieverId}/received/${taskId}`).set({...task, taskId});
}

export const sendTask = (task, senderId, recieverId) => {
  const taskId = ref.child(`task/${senderId}/sent`).push().key;

  return Promise.all([
    senderTask(senderId, task, taskId),
    receiveTask(recieverId, task, taskId)
  ]).then(() => ({...task, taskId}))
}

// Reminders

const senderReminder = (senderId, reminder, reminderId) => {
  return ref.child(`reminder/${senderId}/sent/${reminderId}`).set({...reminder, reminderId});
}

const receiveReminder = (recieverId, reminder, reminderId) => {
  return ref.child(`reminder/${recieverId}/received/${reminderId}`).set({...reminder, reminderId});
}

export const sendReminder = (reminder, senderId, recieverId) => {
  const reminderId = ref.child(`reminder/${senderId}/sent`).push().key;

  return Promise.all([
    senderReminder(senderId, reminder, reminderId),
    receiveReminder(recieverId, reminder, reminderId)
  ]).then(() => ({...reminder, reminderId}))
}