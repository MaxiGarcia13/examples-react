import './section.css';

const Section = (props) => {
  const dataToShow = JSON.stringify(props.dataToShow, null, 2);

  return (
    <section className='section'>
      <div className='section__columns'>
        <h2 className='section__title'>{props.title}</h2>
        <p className='section__subtitle'>{props.description}</p>
        <div className='section__content'>{props.children}</div>
      </div>
      {dataToShow != null && <pre className='section__code section__columns'>{dataToShow}</pre>}
    </section>
  );
};

export default Section;
