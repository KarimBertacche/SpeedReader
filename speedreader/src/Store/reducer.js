import * as types from './actions';

const initialState = {
  words: [],
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    // case types.SHOW_CONTACT:
    //   return Object.assign({}, state, {contact: true});
      
    // case types.HIDE_CONTACT:
    //   return {...state, contact: false};  
      default: return state;
  }
};

export default reducer;