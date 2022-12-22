import './product-card.styles.scss'
import Button, {BUTTON_TYPES_CLASSES} from '../button/Button.component';
import { addItemToCart} from "../../store/cart/cart.action";
import {selectCartItems} from "../../store/cart/cart.selector"
import { useDispatch, useSelector } from "react-redux";
import { FC } from 'react';
import { CategoryItem } from '../../store/categories/category.types';


type ProductCardProps = {
    product: CategoryItem;
}

const ProductCard: FC<ProductCardProps> = ({product}) => {
    const {name, price, imageUrl} = product;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems)
    const addProductToCart = () => dispatch(addItemToCart(cartItems, product))
    
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType={BUTTON_TYPES_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
        </div>
    );
}

export default ProductCard;