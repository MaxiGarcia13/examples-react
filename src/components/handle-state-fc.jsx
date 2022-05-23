import { useState } from 'react';
import Item from './item';
import List from './list';
import SearchBox from './search-box';
import Section from './section';
import ITEMS from '../data/technologies.json';
import { filterDataByText } from '../utils/search';

const HandleStateFC = () => {
  const [searchText, setSearchText] = useState('');
  const [itemsFiltered, setItemsFiltered] = useState(ITEMS);

  const onChange = (value) => {
    setSearchText(value);
    setItemsFiltered(filterDataByText(value, ITEMS));
  };

  const onSubmit = (value) => {
    setSearchText(value);
    setItemsFiltered(filterDataByText(value, ITEMS));
  };

  return (
    <Section title='Handle states' description='It use useState' dataToShow={{ searchText }}>
      <SearchBox placeholder='Typing searchbox' onChange={onChange} />
      <SearchBox placeholder='Submit searchbox' onSubmit={onSubmit} />

      <List
        items={itemsFiltered}
        ItemComponent={(item) => {
          return <Item highlight={searchText} {...item}></Item>;
        }}
      />
    </Section>
  );
};

export default HandleStateFC;
