import { ProductCategorieCardStyled } from "./style"

export const ProductCategorieCard = ({ product }) => {
    return (
        <ProductCategorieCardStyled>
            <span><img src={product.img}/></span>
            <p className="text-section">{product.title}</p>
        </ProductCategorieCardStyled>
    )
}