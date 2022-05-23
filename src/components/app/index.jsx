import { Provider } from 'react-redux';
import HandleStateFC from '../handle-state-fc';
import HandleEffectsFC from '../handle-effects-fc';
import HandleStateClass from '../handle-state-class';
import HandleEffectsClass from '../handle-effects-class';
import HandleStatesWithReduxFC from '../handle-states-with-redux-fc';
import HandleStatesWithReduxAndSagaFC from '../handle-states-with-redux-and-saga-fc';
import HandleStatesWithUseReducerFC from '../handle-states-with-use-reducer';
import store from '../../redux';
import './app.css';

const App = () => {
  return (
    <>
      <header className='header'>
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
        <h2 className='subtitle'>Redux and Sagas</h2>
        <Provider store={store}>
          <HandleStatesWithReduxFC />
          <HandleStatesWithReduxAndSagaFC />
        </Provider>
        <h2 className='subtitle'>Class component (avoid to use)</h2>
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
