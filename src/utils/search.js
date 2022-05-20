export const SEARCH_DELAY = 500;

export const filterDataByText = (text, items) => {
  return items.filter(({ title }) => title.toLowerCase().includes(text.toLowerCase()));
};
