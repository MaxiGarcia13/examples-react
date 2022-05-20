import Item from '../Item';
import List from '../List';
import SearchBox from '../SearchBox';
import Section from '../Section';
import { useSelector, useDispatch } from 'react-redux';
import { changeSearchText } from '../../redux/actions/search';
import { searchSelector } from '../../redux/selectors/search';

const HandleStatesWithReduxFC = () => {
  const { searchText, items } = useSelector(searchSelector);
  const dispatch = useDispatch();

  const onChange = (value) => {
    dispatch(changeSearchText(value));
  };

  return (
    <Section title='Handle states with redux' description='Functional Component' dataToShow={{ searchText }}>
      <SearchBox placeholder='Typing searchbox' onChange={onChange} />

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
