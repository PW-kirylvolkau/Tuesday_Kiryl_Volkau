import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers/root';

const getStore = () => {
    return createStore(rootReducer, composeWithDevTools());
};

export default getStore;
