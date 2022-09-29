import { createSlice } from "@reduxjs/toolkit";

const products = createSlice({
    name: 'products',
    initialState: [{
        ProductID: 0,
        ProductName: '',
        Description: '',
        Price: '',
        Photo: '',
        Status: ''
    }],
    reducers: {
        getProductsSlice: (state, action) => {
            state = action.payload
            return state
        },
        addProductSlice: (state, action) => {
            state.push(action.payload)
            return state
        },
        editProductSlice: (state, action) => {
            state = state.map(i => i.id === action.payload.id ? action.payload : i)
            return state
        },
        deleteProductSlice: (state, action) => {
            state = state.filter(i => i.id !== action.payload)
            return state
        }
    }
})
export const { getProductsSlice, addProductSlice, editProductSlice, deleteProductSlice } = products.actions
export default products.reducer