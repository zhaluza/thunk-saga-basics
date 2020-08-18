import { takeLatest, put } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';

export default function* watchFetchMorePicsSaga() {
  yield takeLatest(types.FETCH_MORE_PICS, fetchMorePicsSaga);
}

// query 5 pics
function* fetchMorePicsSaga() {
  yield put({ type: types.FETCH_MORE_PICS_SAGA_START });
  const response = yield fetch('https://api.thecatapi.com/v1/images/search?limit=5', {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.REACT_APP_API_KEY,
    },
  });
  const pics = yield response.json();
  yield put({ type: types.FETCH_MORE_PICS_SAGA_SUCCESS, payload: pics });
}
