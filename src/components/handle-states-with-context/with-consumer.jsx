import React from 'react';
import Section from '../section';
import { MyContext } from './context';
import './handle-states-with-context.css';
import SelectTheme from './select-theme';

class HandleContextWithConsumer extends React.Component {
  constructor(props) {
    super(props);
  }
  renderChildren(context) {
    const handleOnChange = (ev) => {
      context.setTheme(ev.target.value);
    };

    return (
      <Section
        title='Handle context with Consumer'
        description='Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree. You can consume the context with your consumer.'
        dataToShow={context}
      >
        <SelectTheme value={context.currentTheme} onChange={handleOnChange} />
      </Section>
    );
  }
  render() {
    return <MyContext.Consumer>{this.renderChildren}</MyContext.Consumer>;
  }
}

export default HandleContextWithConsumer;
