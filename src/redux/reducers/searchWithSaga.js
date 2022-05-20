import { ON_SEARCH_FETCHING, ON_SEARCH_SUCCESS, ON_SEARCH_FAILURE } from '../actions/searchWithSaga';
import ITEMS from '../../data/technologies.json';

const initialState = {
  searchText: '',
  fetching: false,
  items: ITEMS,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ON_SEARCH_FETCHING:
      return {
        ...state,
        searchText: action.payload.searchText,
        fetching: true,
      };
    case ON_SEARCH_SUCCESS:
      return {
        ...state,
        items: action.payload.items,
        fetching: false,
      };
    case ON_SEARCH_FAILURE:
      return {
        ...state,
        fetching: false,
      };

    default:
      return state;
  }
};
