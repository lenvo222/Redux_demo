import { createStore } from "redux";
// ...
import { rootReducer, initialState } from "./reducers";
export const configureStore = () => {
  const store = createStore(rootReducer, initialState);
  console.log(rootReducer);
  console.log("+++++++++++++++++++++++=");

  console.log(initialState);

  return store;
};
// ...
export default configureStore;
