import {combineReducers} from 'redux';
import { userReducer } from './user/user.reducer';

export const rootReduer = combineReducers({
    user: userReducer
})