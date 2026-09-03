import type { Product } from "../data/data";
import ProductItem from "./ProductItem";

interface ProductListProps {
    products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
    return (
        <div className="product-list">
            {products.map((product, index) => (
                <ProductItem key={index} product={product} />
            ))}
        </div>
    )
}

export default ProductList;