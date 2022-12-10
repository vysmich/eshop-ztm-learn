import ProductCard from "../product-card/product-card";

import "./category-preview.scss";
import { Link } from "react-router-dom";

const CategoryPreview = ({ title, products }) => (
    <div className='category-preview-container'>
        <h2>
            <Link to={`/shop/${title.toLowerCase()}`}>
                <span className='title'>{title.toUpperCase()}</span>
            </Link>
        </h2>
        <div className='preview'>
            {products
                .filter((_, idx) => idx < 4)
                .map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
        </div>
    </div>
);

export default CategoryPreview;
