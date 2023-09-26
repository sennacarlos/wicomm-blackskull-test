import { TeamCardStyled } from "./style"

export const TeamCard = ({ member }) => {
    return (
        <TeamCardStyled>
            <img src={member.img}/>
                <div className="teamcard-infos">
                    <h5 className="text-blog">{member.name}</h5>
                    <p className="text-footer">{member.description}</p>
                </div>
        </TeamCardStyled>
    )
}