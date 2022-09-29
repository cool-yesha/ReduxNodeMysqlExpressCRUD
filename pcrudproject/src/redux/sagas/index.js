import { all } from "redux-saga/effects";

import { watchProductsAsync } from "./product";


export function* rootSaga() {
    yield all([
        watchProductsAsync()
    ])
}