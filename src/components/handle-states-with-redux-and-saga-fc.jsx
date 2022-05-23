import Item from './item';
import List from './list';
import SearchBox from './search-box';
import Section from './section';
import { useSelector, useDispatch } from 'react-redux';
import { onSearch } from '../redux/actions/searchWithSaga';
import { searchWithSagaSelector } from '../redux/selectors/searchWithSaga';

const HandleStatesWithReduxAndSagaFC = () => {
  const { searchText, items, fetching } = useSelector(searchWithSagaSelector);
  const dispatch = useDispatch();

  const onChange = (value) => {
    dispatch(onSearch(value));
  };

  return (
    <Section
      title='Handle states with redux and saga'
      description='It use useSelector, useDispatch and debounce'
      dataToShow={{ searchText, fetching }}
    >
      <SearchBox placeholder='Typing searchbox' onChange={onChange} />
      {fetching === true ? (
        <span>Loading... </span>
      ) : (
        <List
          items={items}
          ItemComponent={(item) => {
            return <Item highlight={searchText} {...item}></Item>;
          }}
        />
      )}
    </Section>
  );
};

export default HandleStatesWithReduxAndSagaFC;
