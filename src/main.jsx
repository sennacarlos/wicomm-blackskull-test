import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './styles/global.js'
import { Home } from "./pages/home"
import { Header } from './components/Header/index.jsx'
import { Footer } from './components/Footer/index.jsx'
import { CartProvider } from './providers/CartContext.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <ToastContainer position='top-right' autoClose={2000}/>
    <CartProvider>
    <Header/>
    <Home/>
    <Footer/>

    </CartProvider>
  </React.StrictMode>,
)
