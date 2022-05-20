import { filterDataByText } from '../../utils/search';
import { CHANGE_SEARCH_TEXT } from '../actions/search';
import ITEMS from '../../data/technologies.json';
const initialState = {
  searchText: '',
  items: ITEMS,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload.searchText,
        items: filterDataByText(action.payload.searchText, ITEMS),
      };

    default:
      return state;
  }
};
