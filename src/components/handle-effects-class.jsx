import React from 'react';
import Item from './item';
import List from './list';
import SearchBox from './search-box';
import Section from './section';
import ITEMS from '../data/technologies.json';
import { filterDataByText, SEARCH_DELAY } from '../utils/search';

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
        title='Handle effects'
        description='For manage effects in class component yo can use componentDidMount, componentDidUpdate or componentWillUnmount.'
        dataToShow={{ searchText: this.state.searchText, items: this.state.itemsFiltered }}
      >
        <SearchBox placeholder='Type to search' onChange={this.onChange} />

        <List items={this.state.itemsFiltered} ItemComponent={this.renderItem} />
      </Section>
    );
  }
}

export default HandleEffectsClass;
