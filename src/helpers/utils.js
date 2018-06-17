export const formatUserInfo = (name, avatar, uid) => {
  return {
    name,
    avatar,
    uid
  }
}

export const formatNotification = (text, uid) => {
  if (uid) {
    return {
      text,
      uid,
      timestamp: Date.now()
    }
  } else {
    return {}
  }
}