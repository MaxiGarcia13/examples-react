import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import searchWithSaga from './sagas/searchWithSaga';

const sagaMiddleware = createSagaMiddleware();

export default createStore(reducers, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(searchWithSaga);
