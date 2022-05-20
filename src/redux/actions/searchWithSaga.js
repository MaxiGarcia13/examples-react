export const ON_SEARCH_FETCHING = 'ON_SEARCH_FETCHING';
export const ON_SEARCH_SUCCESS = 'ON_SEARCH_SUCCESS';
export const ON_SEARCH_FAILURE = 'ON_SEARCH_FAILURE';

export const onSearch = (searchText) => ({
  type: ON_SEARCH_FETCHING,
  payload: {
    searchText,
  },
});

export const onSearchSucces = (items) => ({
  type: ON_SEARCH_SUCCESS,
  payload: {
    items,
  },
});

export const onSearchFailure = () => ({
  type: ON_SEARCH_FAILURE,
});
