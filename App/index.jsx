import ReactDOM from 'react-dom';
import React from 'react';
import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux';
import Currency from './Currency'
import { BrowserRouter} from 'react-router-dom';
import walletStore from './reducer';
import descriptionStore from './CurrencyDescription/reducer';
import thunk from 'redux-thunk';

const reducer =  combineReducers({
    walletStore,
    descriptionStore
});
  

const store = createStore(reducer,compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));
  
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Currency/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);

