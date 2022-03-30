import { createStore,combineReducers } from "redux"
import {productsReducer} from "./products/reducer"
const rootReducer = combineReducers({
    products:productsReducer
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());