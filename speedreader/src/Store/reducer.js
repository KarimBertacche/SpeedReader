import * as types from './actions';

const initialState = {
  text: [],
  addText: true
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case types.ADD_TEXT:
      return { ...state, text:  action.payload, addText: false };
      
      default: return state;
  }
};

export default reducer;