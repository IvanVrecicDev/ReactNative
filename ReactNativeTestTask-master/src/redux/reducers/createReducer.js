import { combineReducers } from 'redux';
import reducerAuth from './reducerAuth';
import reducerCards from './reducerCards';

const reducers = {
  reducerAuth,
  reducerCards,
};

const appReducer = combineReducers(reducers);

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
