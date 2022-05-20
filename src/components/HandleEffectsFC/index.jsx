import { useEffect, useState } from 'react';
import Item from '../Item';
import List from '../List';
import SearchBox from '../SearchBox';
import Section from '../Section';
import ITEMS from '../../data/technologies.json';
import { filterDataByText } from '../../utils/search';

const HandleEffectsFC = () => {
  const [searchText, setSearchText] = useState('');
  const [itemsFiltered, setItemsFiltered] = useState(ITEMS);

  let timer = null;

  const onChange = (value) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      setSearchText(value);
    }, SEARCH_DELAY);
  };

  useEffect(() => {
    setItemsFiltered(filterDataByText(searchText, ITEMS));
  }, [searchText]);

  return (
    <Section title='Handle effects with react' description='Functional Component' dataToShow={{ searchText }}>
      <SearchBox placeholder='Typing searchbox' onChange={onChange} />

      <List
        items={itemsFiltered}
        ItemComponent={(item) => {
          return <Item highlight={searchText} {...item}></Item>;
        }}
      />
    </Section>
  );
};

export default HandleEffectsFC;
