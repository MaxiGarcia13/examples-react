import Item from './item';
import List from './list';
import SearchBox from './search-box';
import Section from './section';
import { useSelector, useDispatch } from 'react-redux';
import { changeSearchText } from '../redux/actions/search';
import { searchSelector } from '../redux/selectors/search';

const HandleStatesWithReduxFC = () => {
  const { searchText, items } = useSelector(searchSelector);
  const dispatch = useDispatch();

  const onChange = (value) => {
    dispatch(changeSearchText(value));
  };

  return (
    <Section
      title='Handle states with redux'
      description='Redux is a predictable state container for JavaScript apps. It is usually preferable to use it when you have complex state logic.'
      dataToShow={{ searchText, items }}
    >
      <SearchBox placeholder='Type to search' onChange={onChange} />

      <List
        items={items}
        ItemComponent={(item) => {
          return <Item highlight={searchText} {...item}></Item>;
        }}
      />
    </Section>
  );
};

export default HandleStatesWithReduxFC;
