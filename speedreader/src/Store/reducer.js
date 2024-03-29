import * as types from './actions';

const initialState = {
  text: [],
  addText: true,
  settings: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TEXT:
      return { ...state, text: action.payload, addText: false };

    case types.OPEN_SETTINGS:
      return { ...state, settings: true };

    case types.CLOSE_SETTINGS:
      return { ...state, settings: false };

    default: return state;
  }
};

export default reducer;