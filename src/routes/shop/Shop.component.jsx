import { useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategoriesMap } from "../../store/categories/category.action"
import { useDispatch} from "react-redux"
import CategoriesPreview from '../categories-preview/CategoriesPreview.component';
import Category from '../category/Category.component';
import "./shop.styles.scss";

const Shop = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    
    const getCategoriesMap = async () => {
        const categoryMap = await getCategoriesAndDocuments('categories');
        dispatch(setCategoriesMap(categoryMap))
    }
    getCategoriesMap()
}, [dispatch])

  return (
        <Routes>
            <Route index element={<CategoriesPreview/>}  />
            <Route path="/:category" element={<Category/>} />
        </Routes>
  );
};

export default Shop;
