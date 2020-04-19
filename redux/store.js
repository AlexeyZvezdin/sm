import { createStore } from 'redux';
import fetch from 'isomorphic-unfetch';
import rootReducer from './reducers/rootReducer';
/**
 * @param {object} initialState The store's initial state (on the client side, the state of the server-side store is passed here)
 * @param {boolean} options.isServer Indicates whether makeStore is executed on the server or the client side
 * @param {Request} options.req Node.js `Request` object (only set before `getInitialProps` on the server side)
 * @param {Response} options.res Node.js `Response` object (only set before `getInitialProps` on the server side)
 * @param {boolean} options.debug User-defined debug flag
 * @param {string} options.storeKey The key that will be used to persist the store in the browser's `window` object for safe HMR
 */
let initialData = {
  city: 'volgograd',
  categories: {},
  products: {},
};

const makeStore = (initialState = initialData, options) => {
  return createStore(rootReducer, initialState);
};

export default makeStore;
