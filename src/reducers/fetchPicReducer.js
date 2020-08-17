import * as types from '../constants/actionTypes';

const initialState = { pics: [] };

const fetchPicReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SUCCESS:
      return { ...state, pics: action.payload[0].url };
    case types.FETCH_START:
      return state;
    case types.FETCH_ERROR:
      return state;
    default:
      return state;
  }
};

export default fetchPicReducer;
