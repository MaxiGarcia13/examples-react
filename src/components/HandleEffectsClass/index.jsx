import React from 'react';
import Item from '../Item';
import List from '../List';
import SearchBox from '../SearchBox';
import Section from '../Section';
import ITEMS from '../../data/technologies.json';
import { filterDataByText, SEARCH_DELAY } from '../../utils/search';

class HandleEffectsClass extends React.Component {
  timer = null;

  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      itemsFiltered: [],
    };

    this.onChange = this.onChange.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  onChange(value) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.setState({ searchText: value });
    }, SEARCH_DELAY);
  }

  renderItem(item) {
    return <Item highlight={this.state.searchText} {...item}></Item>;
  }

  componentDidMount() {
    this.setState({ itemsFiltered: ITEMS });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.searchText !== this.state.searchText) {
      this.setState({ itemsFiltered: filterDataByText(this.state.searchText, ITEMS) });
    }
  }

  render() {
    return (
      <Section
        title='Handle effects with react'
        description='Class components'
        dataToShow={{ searchText: this.state.searchText }}
      >
        <SearchBox placeholder='Typing searchbox' onChange={this.onChange} />

        <List items={this.state.itemsFiltered} ItemComponent={this.renderItem} />
      </Section>
    );
  }
}

export default HandleEffectsClass;
