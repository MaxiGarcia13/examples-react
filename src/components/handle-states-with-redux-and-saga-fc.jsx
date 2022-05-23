import Item from './_item';
import List from './_list';
import SearchBox from './_search-box';
import Section from './_section';
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
      title='Handle asynchronous task with saga'
      description='Saga is a middleware for redux and It allows you to manage asynchronous approaches,  parallel execution, task concurrency, task racing, task cancellation, and more.'
      dataToShow={{ searchText, fetching, items }}
    >
      <SearchBox placeholder='Type to search' onChange={onChange} />
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
