import { Provider } from 'react-redux';
import HandleStateFC from '../handle-state-fc';
import HandleEffectsFC from '../handle-effects-fc';
import HandleStateClass from '../handle-state-class';
import HandleEffectsClass from '../handle-effects-class';
import HandleStatesWithReduxFC from '../handle-states-with-redux-fc';
import HandleStatesWithReduxAndSagaFC from '../handle-states-with-redux-and-saga-fc';
import HandleStatesWithUseReducerFC from '../handle-states-with-use-reducer';
import HandleContextWithUseContext from '../handle-states-with-context/with-use-context';
import HandleContextWithConsumer from '../handle-states-with-context/with-consumer';
import HandleStatesWithUseReducerClass from '../handle-states-with-redux-class';

import { ContextProvider } from '../handle-states-with-context/context';
import store from '../../redux';
import './app.css';

const App = () => {
  return (
    <>
      <header className='header'>
        <a href='https://github.com/MaxiGarcia13/examples-react' target='_blank'>
          🏠 Repository
        </a>
        <h1 className='title'>What is React JS?</h1>
        <p>
          It is a JavaScript library for building user interfaces, it allow to write in declarative way and Build
          encapsulated components that manage their own state. <a href='https://reactjs.org/'>more info</a>
        </p>
      </header>
      <main className='main'>
        <h2 className='subtitle'>Functional component</h2>
        <HandleStateFC />
        <HandleEffectsFC />
        <HandleStatesWithUseReducerFC />
        <ContextProvider>
          <HandleContextWithUseContext />
        </ContextProvider>
        <h2 className='subtitle'>Redux and Sagas</h2>
        <Provider store={store}>
          <HandleStatesWithReduxFC />
          <HandleStatesWithReduxAndSagaFC />
        </Provider>
        <h2 className='subtitle'>Class component (avoid to use)</h2>
        <HandleStateClass />
        <HandleEffectsClass />
        <ContextProvider>
          <HandleContextWithConsumer />
        </ContextProvider>
        <Provider store={store}>
          <HandleStatesWithUseReducerClass />
        </Provider>
        <h2 className='subtitle'>Glossary</h2>
        <p>If you want to know more about this you can visit the official docs.</p>

        <ul className='glossary'>
          <li>
            <a href='https://reactjs.org/' target='_blank'>
              React JS
            </a>
          </li>
          <li>
            <a href='https://redux.js.org/' target='_blank'>
              Redux JS
            </a>
          </li>
          <li>
            <a href='https://react-redux.js.org/' target='_blank'>
              React Redux JS
            </a>
          </li>
          <li>
            <a href='https://redux-saga.js.org/' target='_blank'>
              Saga JS
            </a>
          </li>
        </ul>
      </main>
      <footer className='footer'>
        by
        <a href='https://www.linkedin.com/in/maximilianogarcia13/' target='_blank'>
          Maximiliano Garcia Mortigliengo.
        </a>
      </footer>
    </>
  );
};

export default App;
