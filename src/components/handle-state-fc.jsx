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
    <Section
      title='Handle states'
      description='The useState hook allows you to manage the state of the component.'
      dataToShow={{ searchText, items: itemsFiltered }}
    >
      <SearchBox placeholder='Type to search' onChange={onChange} />
      <SearchBox placeholder='Press enter o click button to search' onSubmit={onSubmit} />

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
