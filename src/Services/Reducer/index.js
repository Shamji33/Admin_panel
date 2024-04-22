import { combineReducers } from "redux";
import { ProductReducer } from "./Products.reducer";
import { AuthReducer } from "./Auth.reducer";

export const rootReducer = combineReducers({
    ProductReducer,
    AuthReducer,
 
}  
)