import { GoalCardStyled } from "./style"

export const GoalCard = ({ goal }) => {
    return (
        <GoalCardStyled>
            <img src={goal.img}/>
            <div>
                <p className="text-goal">{goal.title}</p>
            </div>
        </GoalCardStyled>
    )
}