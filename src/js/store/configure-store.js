import "regenerator-runtime/runtime"
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers/root-reducer';


export const history = createBrowserHistory();

const configureStoreProd = () => {
  const reactRouterMiddleware = routerMiddleware(history)
  const middlewares = [
    reactRouterMiddleware,
    thunk,
  ];
  const store = createStore(rootReducer
  ,compose(applyMiddleware(...middlewares)));
  return store;
}

const configureStoreDev = () => {
  const reactRouterMiddleware = routerMiddleware(history)
  const middlewares = [
    reduxImmutableStateInvariant(),
    reactRouterMiddleware,
    thunk,
  ];
 
const composeEnhancers = (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer
  ,composeEnhancers((applyMiddleware(...middlewares))));
  if (module.hot) {
    module.hot.accept('../reducers/root-reducer', () => {
      const nextReducer = require('../reducers/root-reducer').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;