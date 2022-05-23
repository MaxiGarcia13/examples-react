import React from 'react';
import Item from './item';
import List from './list';
import SearchBox from './search-box';
import Section from './section';
import ITEMS from '../data/technologies.json';
import { filterDataByText } from '../utils/search';

class HandleStateClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      itemsFiltered: ITEMS,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  onChange(value) {
    this.setState({ searchText: value, itemsFiltered: filterDataByText(value, ITEMS) });
  }

  onSubmit(value) {
    this.setState({ searchText: value, itemsFiltered: filterDataByText(value, ITEMS) });
  }

  renderItem(item) {
    return <Item highlight={this.state.searchText} {...item}></Item>;
  }

  render() {
    return (
      <Section
        title='Handle states'
        description='You can define the state in the contructor of the class and then you can modify yours state with setState.'
        dataToShow={{ searchText: this.state.searchText, items: this.state.itemsFiltered }}
      >
        <SearchBox placeholder='Type to search' onChange={this.onChange} />
        <SearchBox placeholder='Press enter o click button to search' onSubmit={this.onSubmit} />

        <List items={this.state.itemsFiltered} ItemComponent={this.renderItem} />
      </Section>
    );
  }
}

export default HandleStateClass;
