import type { Category } from "../data/data";
import ProductList from "./Productlist";

interface CategorySectionProps{
    category: Category
}

const CategorySection = ({ category }: CategorySectionProps) => {
    return(
        <section className="category-section" id={category.id}>
            <div className="section-title">
                <div className="icon">
                    <i className={`fa-solid ${category.icon}`}></i>
                </div>
                <h2>{category.title}</h2>
            </div>

            <ProductList products={category.products}/>
        </section>
    )
}

export default CategorySection;
