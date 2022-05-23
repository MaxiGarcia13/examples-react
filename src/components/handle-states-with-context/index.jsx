import { useReducer } from 'react';
import Item from '../item';
import List from '../list';
import SearchBox from '../search-box';
import Section from '../section';
import ITEMS from '../../data/technologies.json';
import { filterDataByText } from '../../utils/search';
import 'handle-states-with-context.css';

const initialState = { searchText: '', items: ITEMS };

function reducer(state, action) {
  switch (action.type) {
    case 'onChange':
      return { ...state, searchText: action.searchText, items: filterDataByText(action.searchText, ITEMS) };
    default:
      throw new Error();
  }
}

const HandleStatesWithContext = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const onChange = (value) => {
    dispatch({ type: 'onChange', searchText: value });
  };

  return (
    <Section
      title='Handle states with Context'
      description='Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.'
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

export default HandleStatesWithContext;
