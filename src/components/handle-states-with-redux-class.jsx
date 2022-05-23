import Item from './item';
import List from './list';
import SearchBox from './search-box';
import Section from './section';
import { connect } from 'react-redux';
import { changeSearchText } from '../redux/actions/search';
import { searchSelector } from '../redux/selectors/search';
import { Component } from 'react';

class HandleStatesWithReduxClass extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.props.changeSearchText(value);
  }

  render() {
    return (
      <Section
        title='Handle states with redux and container'
        description='Redux is a predictable state container for JavaScript apps. It is usually preferable to use it when you have complex state logic.'
        dataToShow={{ searchText: this.props.searchText, items: this.props.items }}
      >
        <SearchBox placeholder='Type to search' onChange={this.onChange} />

        <List
          items={this.props.items}
          ItemComponent={(item) => {
            return <Item highlight={this.props.searchText} {...item}></Item>;
          }}
        />
      </Section>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...searchSelector(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeSearchText: (value) => dispatch(changeSearchText(value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HandleStatesWithReduxClass);
