//gom tất cả các reducer lại
import appReducer from "./appReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    app: appReducer
})

export default rootReducer