import {createStore} from 'redux';
// import rootreducer from './reducers/RootReducer';
import handlecart from './reducers/Shopping.reducer'
const store=createStore(handlecart,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )
export default store;