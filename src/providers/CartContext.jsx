import { createContext, useEffect, useState } from "react"
import productData from "../utils/productData"

export const CartContext = createContext({})

export const CartProvider = ({children}) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [productCart, setProductCart] = useState([])

   return (
        <CartContext.Provider value={{ modalOpen, setModalOpen, productCart,
        setProductCart}}>
            {children}
        </CartContext.Provider>
   )
}