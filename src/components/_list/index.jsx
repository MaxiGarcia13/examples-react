import './list.css';

const List = (props) => {
  const { ItemComponent } = props;

  return (
    <ul className='list'>
      {props.items.map((item, index) => (
        <li className='list__item' key={item.id ?? index}>
          <ItemComponent {...item} />
        </li>
      ))}
      {props.items.length === 0 && <li className='list__item'>🙃 Empty...</li>}
    </ul>
  );
};

export default List;
