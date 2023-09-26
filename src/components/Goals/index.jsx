import goalData from "../../utils/goalData"
import { GoalCard } from "./GoalCard"
import { GoalsStyled } from "./style"


export const Goals = () => {
    return (
        <div className="container">
            <GoalsStyled>
                <h2 className="title-section">OBJETIVOS</h2>
                <ul className="goals-list">
                    {goalData.map(goal =>
                        <GoalCard key={goal.id} goal={goal}/>
                        )}
                </ul>
            </GoalsStyled>
        </div>
    )
}