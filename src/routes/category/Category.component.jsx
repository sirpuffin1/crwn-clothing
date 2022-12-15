import "./category.styles.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import { selectCategoriesMap } from "../../store/categories/category.selector";
import ProductCard from "../../components/product-card/ProductCard.component";

const Category = () => {
  const { category } = useParams();
  console.log('render/re rendering category component')
  const categoriesMap = useSelector(selectCategoriesMap)
  const [products, setProducts ] = useState(categoriesMap[category])
  

  useEffect(() => {
    console.log('effect fired calling setProducts')
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;
