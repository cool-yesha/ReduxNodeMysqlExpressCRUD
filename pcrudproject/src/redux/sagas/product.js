import { getProductAPI ,createProductAPI,updateProductAPI,deleteProductAPI } from '../../apis/index'
import { setProductSlice } from '../slice/product/product'
import { addProductSlice, deleteProductSlice, editProductSlice, getProductsSlice } from '../slice/product/products'
import { CREATE_PRODUCT, DELETE_PRODUCT_BY_ID, GET_PRODUCTS, UPDATE_PRODUCT_BY_ID } from '../types'
import { put, takeEvery } from 'redux-saga/effects'

export function* getProductsSaga() {
    const products = yield getProductAPI()
    yield put(getProductsSlice(products.data))
    console.log("productsapi "+products)
}

export function* createProductSaga(action) {
    yield createProductAPI(action.product)
    yield put(addProductSlice(action.product))
}

export function* updateProductSaga(action) {
    yield updateProductAPI(action.product)
    yield put(editProductSlice(action.product))
}

export function* deleteProductByIdSaga(action) {
    yield deleteProductAPI(action.id)
    yield put(deleteProductSlice(action.id))
}

export function* watchProductsAsync() {
    yield takeEvery(GET_PRODUCTS, getProductsSaga)
    yield takeEvery(CREATE_PRODUCT, createProductSaga)
    yield takeEvery(UPDATE_PRODUCT_BY_ID, updateProductSaga)
    yield takeEvery(DELETE_PRODUCT_BY_ID, deleteProductByIdSaga)
}