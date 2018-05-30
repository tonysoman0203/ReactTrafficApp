// src/js/store/index.js
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from '../reducers/index'
import thunk from 'redux-thunk'
import Immutable from 'immutable'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger';

const sagaMiddleware = createSagaMiddleware()
const logger = createLogger();
const initialState = {}

export default createStore(reducers,
    initialState,
    compose(applyMiddleware(thunk, sagaMiddleware, logger))

)