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
      <main className='app'>
        <h1>React JS Examples</h1>
        <p>
          This is a simple project that shows some examples of how we can change states, handle effects and how to use
          Redux and how to use the saga a little bit.
        </p>
        <HandleStateFC />
        <HandleStateClass />
        <HandleEffectsFC />
        <HandleEffectsClass />
        <Provider store={store}>
          <HandleStatesWithReduxFC />
          <HandleStatesWithReduxAndSagaFC />
        </Provider>
      </main>
      <footer>
        <a href='#'>🧑🏼‍💻 Repository</a>
      </footer>
    </>
  );
};

export default App;
