import { OPEN_MODAL, CLOSE_MODAL, UPDATE_TEXT } from '../constants';

export const openModal = () => {
  return {
    type: OPEN_MODAL
  }
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  }
};

export const updateText = (newText) => {
  return {
    type: UPDATE_TEXT,
    newText
  }
};
