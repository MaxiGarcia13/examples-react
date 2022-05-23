import Highlighted from '../_highlighted';

const Item = (props) => {
  return (
    <article>
      <span>- </span>
      <Highlighted text={props.title} highlight={props.highlight} />
    </article>
  );
};

export default Item;
