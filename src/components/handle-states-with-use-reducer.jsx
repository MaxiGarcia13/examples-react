import { useReducer } from 'react';
import Item from './item';
import List from './list';
import SearchBox from './search-box';
import Section from './section';
import ITEMS from '../data/technologies.json';
import { filterDataByText } from '../utils/search';

const initialState = { searchText: '', items: ITEMS };

function reducer(state, action) {
  switch (action.type) {
    case 'onChange':
      return { ...state, searchText: action.searchText, items: filterDataByText(action.searchText, ITEMS) };
    default:
      throw new Error();
  }
}

const HandleStatesWithUseReducerFC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const onChange = (value) => {
    dispatch({ type: 'onChange', searchText: value });
  };

  return (
    <Section
      title='Handle states with useReducer'
      description='The useReducer hook allows you to manage the states. It is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.'
      dataToShow={{ searchText: state.searchText, items: state.items }}
    >
      <SearchBox placeholder='Type to search' onChange={onChange} />

      <List
        items={state.items}
        ItemComponent={(item) => {
          return <Item highlight={state.searchText} {...item}></Item>;
        }}
      />
    </Section>
  );
};

export default HandleStatesWithUseReducerFC;
