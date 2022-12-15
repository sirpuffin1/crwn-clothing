import {combineReducers} from 'redux';
import { userReducer } from './user/user.reducer';
import { categoriesReducer } from './categories/category.reducer';

export const rootReduer = combineReducers({
    user: userReducer,
    category: categoriesReducer
})