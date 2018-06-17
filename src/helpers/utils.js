export const formatUserInfo = (name, avatar, uid) => {
  return {
    name,
    avatar,
    uid
  }
}

export const formatNotification = (text) => {
  return {
    text,
    timestamp: Date.now()
  }
}