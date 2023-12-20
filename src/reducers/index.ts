import { combineReducers } from "redux";
import users from "./user";

const rootReducer = combineReducers({
 //All reducers will be here
 users: users
});
export default rootReducer
