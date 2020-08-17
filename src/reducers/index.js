import { combineReducers } from 'redux';
import fetchPicReducer from './fetchPicReducer';

export default combineReducers({ pics: fetchPicReducer });
