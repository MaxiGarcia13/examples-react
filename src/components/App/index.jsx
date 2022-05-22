import HandleStateFC from '../HandleStateFC';
import HandleEffectsFC from '../HandleEffectsFC';
import HandleStateClass from '../HandleStateClass';
import HandleEffectsClass from '../HandleEffectsClass';
import HandleStatesWithReduxFC from '../HandleStatesWithReduxFC';
import HandleStatesWithReduxAndSagaFC from '../HandleStatesWithReduxAndSagaFC';
import { Provider } from 'react-redux';
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
        <HandleStateFC />
        <HandleStateClass />
        <HandleEffectsFC />
        <HandleEffectsClass />
        <Provider store={store}>
          <HandleStatesWithReduxFC />
          <HandleStatesWithReduxAndSagaFC />
        </Provider>
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
