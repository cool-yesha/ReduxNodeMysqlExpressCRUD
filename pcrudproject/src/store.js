import { configureStore } from "@reduxjs/toolkit";

import product from "./redux/slice/product/product";
import products from "./redux/slice/product/products";


import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./redux/sagas";
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    product,
    products,
   
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export default store;
