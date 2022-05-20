import { combineReducers } from 'redux';
import search from './search';
import searchWithSaga from './searchWithSaga';

export default combineReducers({ search, searchWithSaga });
