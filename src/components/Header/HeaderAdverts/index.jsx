import { HeaderAdvertsStyled } from "./style"
import truckIcon from "../../../assets/images/icons/truck.svg"

export const HeaderAdverts = () => {
    return (
        <HeaderAdvertsStyled>
            <div className="headerAdverts-container container">
                    <p className="title-header">FALE CONOSCO</p>
                    <div> 
                        <img src={truckIcon} alt="Caminhão"/>
                        <p className="text-header--small">FRETE GRÁTIS A PARTIR DE R$ 199,90 PARA TODO BRASIL</p>
                    </div>
                        <p className="title-header">BLOG.BLACKSKULL</p>
            </div>
        </HeaderAdvertsStyled>
    )
}