import { ListProduct } from "../ListProduct"
import { ProductsPromotionsStyled } from "./style"

export const ProductsPromotions = () => {
    return (
        <div className="container">
            <ProductsPromotionsStyled>
                <h2 className="title-section">PROMOÇÕES</h2>
                <ListProduct/>
            </ProductsPromotionsStyled>
        </div>
    )
}