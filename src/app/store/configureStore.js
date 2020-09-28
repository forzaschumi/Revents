import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducers from './rootReducer';

export function configureStore() {
  return createStore(rootReducers, devToolsEnhancer());
}
