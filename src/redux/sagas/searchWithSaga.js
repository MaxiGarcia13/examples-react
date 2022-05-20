import { ON_SEARCH_FETCHING, onSearchSucces, onSearchFailure } from '../actions/searchWithSaga';
import { put, debounce } from 'redux-saga/effects';
import ITEMS from '../../data/technologies.json';
import { filterDataByText } from '../../utils/search';

function* fetchItems(action) {
  try {
    yield put(onSearchSucces(filterDataByText(action.payload.searchText, ITEMS)));
  } catch (error) {
    console.error(error);
    yield put(onSearchFailure());
  }
}

export default function* () {
  yield debounce(5000, ON_SEARCH_FETCHING, fetchItems);
}
