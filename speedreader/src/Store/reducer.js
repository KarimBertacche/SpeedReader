import * as types from './actions';

const initialState = {
  text: ['Hello'],
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case types.ADD_TEXT:
      return { ...state, text: [...state.text, action.payload] };
      
      default: return state;
  }
};

export default reducer;