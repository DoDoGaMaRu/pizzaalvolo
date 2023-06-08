import { configureStore, createSlice } from "@reduxjs/toolkit"

let basket_items = createSlice({
    name: "basket_items",
    initialState: [

    ],
    reducers: {
        onAdd(state, action) {

        },
    }
})

export default configureStore({
    reducer: {
        basket_items: {
            basket_items: basket_items.reducer
        }
    }
})
export let {onAdd} = basket_items.actions