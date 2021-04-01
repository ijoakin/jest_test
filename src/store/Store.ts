import { createStore } from 'redux';
import { initialState, ProductReducer } from './Reducers/ProductReducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({});

export const store = createStore(ProductReducer, initialState, composeEnhancers());