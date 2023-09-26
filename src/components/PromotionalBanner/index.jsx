import { PromotionalBannerStyled } from "./style"
import { ButtonDefault } from "../../styles/buttons"

export const PromotionalBanner = () => {
    return (
        <PromotionalBannerStyled>
            <div className="banner-container">
                <h1>AJUDANDO VOCÊ A TER
                    <p className="title-emphasis">MAIS PERFOMANCE</p>
                </h1>
                <p className="text-default">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                <ButtonDefault buttonSize="emphasis">CONFIRA</ButtonDefault>
            </div>
        </PromotionalBannerStyled>
    )
}