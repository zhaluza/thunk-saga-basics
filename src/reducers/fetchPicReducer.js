import * as types from '../constants/actionTypes';

const initialState = { pics: [] };

const fetchPicReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SUCCESS:
      return { ...state, pics: action.payload };
    case types.FETCH_START:
      return state;
    case types.FETCH_ERROR:
      return state;
    case types.FETCH_MORE_PICS_SAGA_SUCCESS:
      return { ...state, pics: action.payload };
    case types.FETCH_MORE_PICS_SAGA_START:
      return state;
    default:
      return state;
  }
};

export default fetchPicReducer;
