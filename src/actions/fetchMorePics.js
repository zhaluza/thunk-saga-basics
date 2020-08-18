import * as types from '../constants/actionTypes';

const fetchMorePics = () => (dispatch) => {
  dispatch({ type: types.FETCH_MORE_PICS });
};

export default fetchMorePics;
