import { HeaderAdverts } from "./HeaderAdverts"
import { HeaderStyled } from "./style"
import LogoBlackSkull from "../../assets/images/logo1.svg"
import { SearchForm } from "./SearchForm"
import userIcon from "../../assets/images/icons/user.svg"
import favIcon from "../../assets/images/icons/whishlist.svg"
import cartIcon from "../../assets/images/icons/shoppingCart.svg"
import { useContext } from "react"
import { CartContext } from "../../providers/CartContext"

export const Header = () => {
    const { setModalOpen, productCart  } = useContext(CartContext)

    return (
            <HeaderStyled>
                <HeaderAdverts/>
                <div className="header-container container">
                    <img src={LogoBlackSkull} alt="Logotipo BlackSkull"/>
                    <nav>
                        <ul>
                            <li className="text-header">CATEGORIA</li>
                            <li className="text-header">VESTUÁRIO</li>
                            <li className="text-header">OBJETIVOS</li>
                            <li className="text-header">PROMOÇÕES</li>
                            <li className="text-header">ATLETAS</li>
                            <li className="text-header">ASSINATURA</li>
                        </ul>
                    </nav>
                    <SearchForm/>
                    <div className="header-container--buttons">
                        <button><img src={userIcon} /></button>
                        <button><img src={favIcon} /></button>
                        <div className="cart-counter--container">
                            <button onClick={() => setModalOpen(true)}><img src={cartIcon} /></button>
                            {!productCart.length ? (
                                null
                            ) : (
                                <p className="cart-counter" onClick={() => setModalOpen(true)}>
                                    <span>{productCart.length}</span>
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </HeaderStyled>
    )
}