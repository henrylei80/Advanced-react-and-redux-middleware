import { combineReducers } from 'redux';
import UsersReducer from './user';
const rootReducer = combineReducers({
  users: UsersReducer
});

export default rootReducer;
