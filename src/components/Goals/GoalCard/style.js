import { styled } from "styled-components";

export const GoalCardStyled = styled.li`
    position: relative;
    width: 277px;
    height: 340px;

    cursor: pointer;
        
    div {
        position: absolute;
        bottom: 0px;

        background-color: var(--brand-1);

        width: 202px;
        height: 40px;

        display: flex;
        align-items: center;
        padding-left: 16px;

        clip-path: polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%)
    }
`