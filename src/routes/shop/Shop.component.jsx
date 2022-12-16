import { useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import { fetchCategoriesAsync } from "../../store/categories/category.action"
import { useDispatch} from "react-redux"
import CategoriesPreview from '../categories-preview/CategoriesPreview.component';
import Category from '../category/Category.component';
import "./shop.styles.scss";

const Shop = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    
    dispatch(fetchCategoriesAsync())
}, [dispatch])

  return (
        <Routes>
            <Route index element={<CategoriesPreview/>}  />
            <Route path="/:category" element={<Category/>} />
        </Routes>
  );
};

export default Shop;
