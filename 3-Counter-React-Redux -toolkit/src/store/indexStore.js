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
    if (action.type === 'input') {
      console.log(action.payload);
      let input = Number(action.payload)
      let newCount = input + store.count;
    return { ...store, count: newCount };
  }
  return store;
};

const counterStore = createStore(counterReducer);
export default counterStore;
