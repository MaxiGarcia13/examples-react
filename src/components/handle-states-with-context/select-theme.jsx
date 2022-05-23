import { themes } from './context';
import './handle-states-with-context.css';

const SelectTheme = (props) => {
  return (
    <>
      <label htmlFor='select-theme-fc'>Change theme: </label>
      <select id='select-theme-fc' onChange={props.onChange} value={props.value}>
        {Object.values(themes).map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectTheme;
