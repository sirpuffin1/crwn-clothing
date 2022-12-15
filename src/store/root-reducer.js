import {combineReducers} from 'redux';
import { userReducer } from './user/user.reducer';
import { categoriesReducer } from './categories/category.reducer';
import { cartReducer } from './cart/cart.reducer';

export const rootReduer = combineReducers({
    user: userReducer,
    category: categoriesReducer,
    cart: cartReducer
})