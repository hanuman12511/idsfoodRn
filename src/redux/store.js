import * as reducer  from './index';
import {combineReducers,applyMiddleware,compose,createStore} from 'redux';
import promise from 'redux-promise';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middle = applyMiddleware(thunk,promise,logger);
const root = combineReducers(reducer);

const store = createStore(root,compose(middle));

export default store;