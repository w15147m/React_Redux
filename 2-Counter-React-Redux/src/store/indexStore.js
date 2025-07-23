import { createStore } from "redux";

const initialState = {
  count: 0,
}


const counterReducer = (store = initialState, action) => {
if (action.type === 'increment') {
    return { ...store, count: store.count + 1 };
  }
  if (action.type === 'decrement') {
    return { ...store, count: store.count - 1 };
  }
  return store;
};

const counterStore = createStore(counterReducer);
export default counterStore;
