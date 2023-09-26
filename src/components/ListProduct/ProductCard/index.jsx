import { ProductCardStyled } from "./style"
import favIcon from "../../../assets/images/icons/whishlist.svg"
import cartIcon from "../../../assets/images/icons/shoppingCart.svg"
import { useContext } from "react"
import { CartContext } from "../../../providers/CartContext"
import { toast } from "react-toastify"

export const ProductCard = ({ product }) => {
    const { productCart, setProductCart} = useContext(CartContext)

    const addProductToCart = () => {
        const newCartList = productCart.some(element => element.id == product.id)
        newCartList ? (
            toast.error("Esse produto já foi adicionado ao seu carrinho")
        ) : (
            setProductCart([...productCart, product])
        )
    }
    
    return (
        <ProductCardStyled>
            <div className="product-infos">
                <div className="buttons-product">
                    <img src={favIcon} alt="Favorito"/>
                    <img src={cartIcon} alt="Carrinho" onClick={addProductToCart}/>
                </div>
                <img src={product.img} alt={product.title}/>
                <p className="text-product">{product.title}</p>
                <h5 className="title-price">R$ {product.price.toFixed(2)}</h5>
                <p className="text-product--subtitle">ou 12x de R$ 29,16</p>
            </div>
            <button onClick={addProductToCart}>COMPRAR</button>
        </ProductCardStyled>
    )
}