import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'
import search_reducer from './search_reducer';


const rootReducer = combineReducers({formReducer, search_reducer, routing: routerReducer});

export default rootReducer;