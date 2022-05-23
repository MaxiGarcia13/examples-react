import './highlighted.css';

const Highlighted = ({ text = '', highlight = '' }) => {
  if (!highlight.trim()) {
    return <span>{text}</span>;
  }
  const regex = new RegExp(`(${highlight})`, 'gi');
  const parts = text.split(regex);

  return (
    <span>
      {parts.filter(String).map((part, i) => {
        return regex.test(part) ? (
          <span key={i} className='mark'>
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        );
      })}
    </span>
  );
};

export default Highlighted;
