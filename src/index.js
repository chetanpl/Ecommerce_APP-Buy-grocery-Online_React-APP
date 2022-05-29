import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Main from './Main';
// import handlecart from './reducers/Shopping.reducer'
import store from '../src/store';
// const store = createStore(handlecart, applyMiddleware(thunk));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
    <Main />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
