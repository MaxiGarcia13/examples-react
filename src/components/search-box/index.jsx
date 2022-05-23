import { useState } from 'react';
import './searchBox.css';

const SearchBox = (props) => {
  const [searchText, setSearchText] = useState(props.value ?? '');

  const onChange = (ev) => {
    setSearchText(ev.target.value);

    if (typeof props.onChange === 'function') {
      props.onChange(ev.target.value);
    }
  };

  const onSubmit = (ev) => {
    ev.preventDefault();

    if (typeof props.onSubmit === 'function') {
      props.onSubmit(searchText);
    }
  };

  return (
    <form className='searchBox' onSubmit={onSubmit}>
      <input
        type='search'
        className='searchBox__input'
        placeholder={props.placeholder ?? 'Write somethings'}
        value={searchText}
        onChange={onChange}
      />
      <input type='submit' className='searchBox__button' value='🔍' />
    </form>
  );
};

export default SearchBox;
