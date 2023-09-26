import { CartModalStyled } from "./style"
import cartIcon from "../../assets/images/icons/shoppingCart.svg"
import { useContext } from "react"
import { CartContext } from "../../providers/CartContext"
import trashIcon from "../../assets/images/icons/trash.png"
import productImg from "../../assets/images/products/productImage.svg"
import { CartProductCard } from "./CartProductCard"

export const CartModal = () => {
    const { setModalOpen, productCart } = useContext(CartContext)

    const totalCart = productCart.reduce((previousValue, product) => {
        return previousValue + product.price
    }, 0)

    return (
        <div className="modal-backdrop">
            <CartModalStyled>
                <div className="modal-header">
                    <img src={cartIcon}/>
                    <h2 className="title-section">CARRINHO</h2>
                    <button onClick={() => setModalOpen(false)}>X</button>
                </div>
                {!productCart.length ? (
                    <div className="cart-empty">
                        <p>Ops... Seu carrinho está vazio!</p>
                    </div>
                ) : (  
                    <ul className="cart-list">
                        {productCart.map(product => 
                            <CartProductCard key={product.id} product={product}/>
                        )}
                    </ul>
                )}
                <div className="modal-infos">
                    <div>
                        <p>TOTAL</p>
                        <p className="title-price">{totalCart.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
                    </div>
                    <button>FINALIZAR COMPRA</button>
                    <button> CONTINUAR COMPRANDO</button>
                </div>
            </CartModalStyled>
        </div>
    )
}