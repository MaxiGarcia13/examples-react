import { useEffect, useState } from 'react';
import Item from './item';
import List from './list';
import SearchBox from './search-box';
import Section from './section';
import ITEMS from '../data/technologies.json';
import { filterDataByText, SEARCH_DELAY } from '../utils/search';

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
    <Section
      title='Handle effects'
      description='The useEffect hook allows you to manage effects on the component, such as when the component was mounted, when some state was updated, or when the component was unmounted.'
      dataToShow={{ searchText, items: itemsFiltered }}
    >
      <SearchBox placeholder='Type to search' onChange={onChange} />

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
