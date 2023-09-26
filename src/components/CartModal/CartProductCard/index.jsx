import { CartProductCardStyled } from "./style"
import trashIcon from "../../../assets/images/icons/trash.png"
import { useContext } from "react"
import { CartContext } from "../../../providers/CartContext"

export const CartProductCard = ({product}) => {
    const {productCart, setProductCart} = useContext(CartContext)

    const removeProductCart = () => {
        setProductCart(productCart.filter((element) => element.id !== product.id))
    }

    return (
        <CartProductCardStyled>
            <img src={product.img}/>
            <div>
                <p>{product.title}</p>
                <p className="title-price">R${product.price}</p>
                <button onClick={removeProductCart}><img src={trashIcon}/></button>
            </div>
        </CartProductCardStyled>
    )
}