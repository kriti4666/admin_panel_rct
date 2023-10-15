import { combineReducers } from "redux";
import { RegisterReducer, loginReducer } from "./auth/reducer";

export const rootReducer = combineReducers({
    RegisterReducer,
    loginReducer,
})