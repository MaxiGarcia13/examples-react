import { useContext } from 'react';
import Section from '../section';
import { MyContext } from './context';
import './handle-states-with-context.css';
import SelectTheme from './select-theme';

const HandleContextWithUseContext = () => {
  const context = useContext(MyContext);

  const handleOnChange = (ev) => {
    context.setTheme(ev.target.value);
  };

  return (
    <Section
      title='Handle context with useContext'
      description='Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree. You can consume the context with useContex.'
      dataToShow={context}
    >
      <SelectTheme value={context.currentTheme} onChange={handleOnChange} />
    </Section>
  );
};

export default HandleContextWithUseContext;
