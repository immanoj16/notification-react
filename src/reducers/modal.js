import { OPEN_MODAL, CLOSE_MODAL, UPDATE_TEXT } from '../constants';

const initialState = {
  text: '',
  isOpen: false
}

const modal = (state=initialState, action) => {
  switch(action.type) {
    case OPEN_MODAL:
      return {
        isOpen: true
      };
    case CLOSE_MODAL:
      return {
        text: '',
        isOpen: false
      };
    case UPDATE_TEXT:
      return {
        ...state,
        text: action.newText
      }
    default:
      return state;
  }
};

export default modal;
