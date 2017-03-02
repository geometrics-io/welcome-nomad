import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import search_reducer from './search_reducer';


const rootReducer = combineReducers({search_reducer});

export default rootReducer;