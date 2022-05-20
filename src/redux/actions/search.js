export const CHANGE_SEARCH_TEXT = 'CHANGE_SEARCH_TEXT';

export const changeSearchText = (searchText) => ({
  type: CHANGE_SEARCH_TEXT,
  payload: {
    searchText,
  },
});
