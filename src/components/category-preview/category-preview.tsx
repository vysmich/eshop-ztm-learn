//components
import ProductCard from "../product-card/product-card";
import { Link } from "react-router-dom";
import Spinner from "../spinner/spinner";
//hooks
import { useSelector } from "react-redux";
//selectors
import { selectCategoriesIsLoading } from "../../store/categories/categories-selector";
//types
import { FC } from "react";
//styles
import { CategoryPreviewContainer, Title, Preview } from "./category-preview-style";

export type Product = {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
};

export type CategoryPreviewProps = {
    title: string;
    products: Product[];
};

const CategoryPreview : FC<CategoryPreviewProps> = ({ title, products }) => {
    const isLoading = useSelector(selectCategoriesIsLoading);
    return (
        <CategoryPreviewContainer>
            {isLoading ? (
                <Spinner />
            ) : (
                <>
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
                </>
            )}
        </CategoryPreviewContainer>
    );
};

export default CategoryPreview;
