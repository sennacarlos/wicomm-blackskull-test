import { ListProduct } from "../ListProduct"
import { ProductsReleasesStyled } from "./style"

export const ProductsReleases = () => {
    return (
        <div className="container">
            <ProductsReleasesStyled>
                <h2 className="title-section">LANÇAMENTOS</h2>
                <ListProduct/>
            </ProductsReleasesStyled>
        </div>
    )
};