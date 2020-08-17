import * as types from '../constants/actionTypes';

const fetchPicsError = () => {
  return { type: types.FETCH_ERROR };
};

const fetchPicsStarted = () => {
  return { type: types.FETCH_START };
};

const fetchPicsSuccess = (pic) => {
  return { type: types.FETCH_SUCCESS, payload: pic };
};

const fetchPics = () => async (dispatch) => {
  console.log('fuuuu');
  dispatch(fetchPicsStarted());
  try {
    const response = await fetch('https://api.thecatapi.com/v1/images/search', {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.REACT_APP_API_KEY,
      },
    });
    const pic = await response.json();
    dispatch(fetchPicsSuccess(pic));
    console.log('success');
  } catch (error) {
    console.log('aah');
    dispatch(fetchPicsError());
  }
};

export default fetchPics;
