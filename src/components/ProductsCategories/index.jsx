import { ProductsCategoriesStyled } from "./style"
import categoriesData from "../../utils/categoriesData"
import { ProductCategorieCard } from "./ProductCategorieCard"
import arrowRight from "../../assets/images/icons/arrowRight.svg"
import arrowLeft from "../../assets/images/icons/arrowLeft.svg"
import { useRef } from "react"

export const ProductsCategories = () => {
    const carousel = useRef(null);

    const handleLeftClick = () => {
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    };

    const handleRightClick = () => {
        carousel.current.scrollLeft += carousel.current.offsetWidth
    };

    return (
        <ProductsCategoriesStyled>
            <div className="container">
                <ul className="categories-container" ref={carousel}>
                    {categoriesData.map(product =>
                        <ProductCategorieCard key={product.id} product={product}/>
                    )}
                </ul>
                <div className="carousel-container">
                    <button className="button-left" onClick={handleLeftClick}>
                        <img src={arrowLeft}/>
                    </button>
                    <button className="button-right" onClick={handleRightClick}>
                        <img src={arrowRight}/>
                    </button>
                </div>
            </div>
        </ProductsCategoriesStyled>
    )
}