import { styled } from "styled-components";

export const TeamCardStyled = styled.li`

    width: 300px;

    .teamcard-infos {
        position: absolute;
        top: 0;
        padding: 40px 20px;

        background-color: rgba(255, 150, 1, 0.80);

        height: 100%;
        width: 100%;

        opacity: 0;

        h5 {
            margin-bottom: 20px;
        }

        &:hover {
            opacity: 1;
            transition: 1s ease;
        }
    }
    
`