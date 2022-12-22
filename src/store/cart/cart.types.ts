import { CategoryItem } from './../categories/category.types';
export enum CART_ACTION_TYPE {
    SET_IS_CART_OPEN = 'SET_IS_CART_OPEN',
    SET_CART_ITEMS = 'SET_CART_ITEMS',
    SET_CART_COUNT = 'SET_CART_COUNT',
    SET_CART_TOTAL = 'SET_CART_TOTAL',
    CLEAR_CART = 'CLEAR_CART'
}

export type CartItem = {
    quantity: number;
} & CategoryItem 