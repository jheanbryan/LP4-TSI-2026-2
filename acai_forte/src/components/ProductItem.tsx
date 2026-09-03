import type { Product } from "../data/data";

interface ProductItemProps {
    product: Product
}

const ProductItem = ({ product }: ProductItemProps) => {
    return(
        <div className="product-item">
            <div className="name">{product.name}</div>
            {product.description && (
                <div className="desc">{product.description}</div>
            )}

            {product.prices.map((price, index) => (
                <div key={index} className="price-line">
                    <span className="size">{price.size}</span>
                    <span className="price">
                        {price.fromTag && (
                            <div>
                                <span>{price.fromTag}</span>
                            </div>
                        )}
                        {price.price}
                    </span>
                </div>
            ))}
        </div>

    )
}
export default ProductItem