import { Provider } from 'react-redux';
import HandleStateFC from '../handle-state-fc';
import HandleEffectsFC from '../handle-effects-fc';
import HandleStateClass from '../handle-state-class';
import HandleEffectsClass from '../handle-effects-class';
import HandleStatesWithReduxFC from '../handle-states-with-redux-fc';
import HandleStatesWithReduxAndSagaFC from '../handle-states-with-redux-and-saga-fc';
import store from '../../redux';
import './app.css';

const App = () => {
  return (
    <>
      <header className='header'>
        <h1>React JS Examples</h1>
        <p>
          This is a simple project that shows some examples of how we can change states, handle effects and how to use
          Redux and how to use the saga a little bit.
        </p>
      </header>
      <main className='main'>
        <h2 className='title'>Functional component</h2>
        <HandleStateFC />
        <HandleEffectsFC />
        <h2 className='title'>Redux and Sagas</h2>
        <Provider store={store}>
          <HandleStatesWithReduxFC />
          <HandleStatesWithReduxAndSagaFC />
        </Provider>
        <h2 className='title'>Class component (avoid to use)</h2>
        <HandleStateClass />
        <HandleEffectsClass />
      </main>
      <footer className='footer'>
        <a href='https://github.com/MaxiGarcia13/examples-react' target='_blank'>
          🏠 Repository
        </a>
        <a href='https://www.linkedin.com/in/maximilianogarcia13/' target='_blank'>
          🧑🏼‍💻🧉 Maximiliano Garcia.
        </a>
      </footer>
    </>
  );
};

export default App;
