import "./category-preview.styles.scss";
import ProductCard from "../product-card/ProductCard.component";
import { Link } from "react-router-dom";
import { FC } from "react";
import { CategoryItem } from "../../store/categories/category.types";

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[]
}

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>
       {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products.filter((_, index) => index < 4).map((product) => (
            <ProductCard key={product.id } product={product} />
        ) )}
      </div>
    </div>
  );
};

export default CategoryPreview;
