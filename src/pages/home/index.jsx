import React, { useContext } from 'react';
import { PromotionalBanner } from '../../components/PromotionalBanner';
import { ProductsCategories } from '../../components/ProductsCategories';
import { ProductsReleases } from '../../components/ProductsReleases';
import { Team } from '../../components/Team';
import { ProductsPromotions } from '../../components/ProductsPromotions';
import { Blog } from '../../components/Blog';
import { Goals } from '../../components/Goals';
import { Warnings } from '../../components/Warnings';
import { About } from '../../components/About';
import { ScrollButton } from '../../components/ScrollButton';
import { CartContext} from '../../providers/CartContext';
import { CartModal } from '../../components/CartModal';

export const Home = () => {
    const { modalOpen } = useContext(CartContext)

    return (
        <main>
            {modalOpen ? <CartModal/> : null}
            <ScrollButton/>
            <PromotionalBanner/>
            <ProductsCategories/>
            <ProductsReleases/>
            <Team/>
            <ProductsPromotions/>
            <Blog/>
            <Goals/>
            <Warnings/>
            <About/>
        </main>
    )
}