import { ListProductStyled } from "./style"
import productData from "../../utils/productData"
import { ProductCard } from "./ProductCard"
import arrowLeft from "../../assets/images/icons/arrowLeft.svg"
import arrowRight from "../../assets/images/icons/arrowRight.svg"
import { useRef } from "react"


export const ListProduct = () => {
    const carousel = useRef(null)
    
    const handleLeftClick = () => {
        carousel.current.scrollLeft = 0
    }

    const handleRightClick = () => {
        carousel.current.scrollLeft += carousel.current.offsetWidth + 20
    }

    return (
        <>
            <ListProductStyled ref={carousel}>
                {productData.map(product => 
                    <ProductCard key={product.id} product={product}/>
                )}
            </ListProductStyled>
            <div className="carousel-container--product">
                    <button className="button-left" onClick={handleLeftClick}>
                        <img src={arrowLeft}/>
                    </button>
                    <button className="button-right" onClick={handleRightClick}>
                        <img src={arrowRight}/>
                    </button>
            </div>
        </>
    )
}