import * as types from './actions';

const initialState = {
  words: [],
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case types.ADD_TEXT:
    const addText = state.words.push(action.payload);

    return Object.assign({}, state, {words: addText});
      
      default: return state;
  }
};

export default reducer;