import firebase from 'firebase';
import { ref, firebaseAuth } from '../config/constants';

export default () => {
  return firebaseAuth().signInWithPopup(new firebase.auth.FacebookAuthProvider())
};

export const logout = () => {
  return firebaseAuth().signOut();
};

export const saveUser = (user) => {
  return ref.child(`users/${user.uid}`)
    .set(user)
    .then(() => user)
}