//components
import ProductCard from "../product-card/product-card";
import { Link } from "react-router-dom";
//styles
import { CategoryPreviewContainer, Title, Preview } from "./category-preview-style";

const CategoryPreview = ({ title, products }) => {
    return (
        <CategoryPreviewContainer>
            <h2>
                <Title to={`/shop/${title.toLowerCase()}`}>{title.toUpperCase()}</Title>
            </h2>
            <Preview>
                {products
                    .filter((_, idx) => idx < 4)
                    .map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </Preview>
        </CategoryPreviewContainer>
    );
};

export default CategoryPreview;
