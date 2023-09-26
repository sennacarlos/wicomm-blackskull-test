import { ScrollButtonStyled } from "./style"
import caretUp from "../../assets/images/icons/caretUp.svg"
import { ButtonDefault } from "../../styles/buttons"
import chatIcon from "../../assets/images/icons/chatDots.svg"

export const ScrollButton = () => {
    const scrollButton = () => {
        window.scrollTo(0, 0)
    }

    return (
        <ScrollButtonStyled>
            <button className="button-up" onClick={scrollButton}>
                <img src={caretUp}/>
            </button>
            <ButtonDefault buttonSize="contact"><img src={chatIcon}/>
                Fale Conosco
            </ButtonDefault>
        </ScrollButtonStyled>
    )
}