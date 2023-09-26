import { ButtonDefault } from "../../styles/buttons"
import { WarningsStyled } from "./style"
import packageIcon from "../../assets/images/icons/package.svg"
import currencyIcon from "../../assets/images/icons/currencyCircle.svg"

export const Warnings = () => {
    return (
        <WarningsStyled>
            <ul className="warnings-list">
                <li>
                    <div>
                        <h3 className="title">GARANTA O
                            <p className="title-emphasis">FRETE GRÁTIS</p>
                        </h3>
                        <ButtonDefault buttonSize="medium">CONSULTE</ButtonDefault>
                    </div>
                    <img src={packageIcon}/>
                </li>
                <li>
                    <div>
                        <h3 className="title">SEU DINHEIRO
                            <p className="title-emphasis">DE VOLTA</p>
                        </h3>
                        <ButtonDefault buttonSize="medium">CONSULTE</ButtonDefault>
                    </div>
                    <img src={currencyIcon}/>
                </li>
            </ul>
        </WarningsStyled>
    )
}