import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// Reducers
import reducers from './reducers';
// Components
import App from './components/App';
// CSS
import '../src/style/css/main.css';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

render((
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={App} />
            </Route>
        </Router>
    </Provider>
), document.getElementById('root'))
