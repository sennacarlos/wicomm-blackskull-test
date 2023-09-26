import { TeamStyled } from "./style"
import logoBlackSkull from "../../assets/images/logo3.svg"
import memberData from "../../utils/memberData"
import { TeamCard } from "./TeamCard"
import arrowLeft from "../../assets/images/icons/arrowLeft.svg"
import arrowRight from "../../assets/images/icons/arrowRight.svg"
import { ButtonDefault } from "../../styles/buttons"

export const Team = () => {
    return (
        <TeamStyled>
            <img src={logoBlackSkull}/>
            <div className="team-container">
                <h2 className="title">CONHEÇA A TROPA <span className="title-emphasis">BLACK SKULL</span></h2>
                <ul className="team-card--container">
                    {memberData.map(member => 
                        <TeamCard key={member.id} member={member}/>    
                    )}
                </ul>
            </div>
            <ButtonDefault buttonSize="medium">VER TODOS</ButtonDefault>
            <div className="carousel-container--product">
                    <button className="button-left-01">
                        <img src={arrowLeft}/>
                    </button>
                    <button className="button-right-01">
                        <img src={arrowRight}/>
                    </button>
            </div>
        </TeamStyled>
    )
}