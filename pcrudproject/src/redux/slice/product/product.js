import { createSlice } from "@reduxjs/toolkit";

const product = createSlice({
    name: 'product',
    initialState: {
        ProductID: 0,
        ProductName: '',
        Description: '',
        Price: '',
        Photo: '',
        Status: ''

    },
    reducers: {
        setProductSlice: (state, action) => {
            state = action.payload
            return state
        }
    }
})
export const { setProductSlice } = product.actions
export default product.reducer