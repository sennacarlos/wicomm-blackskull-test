import { styled } from "styled-components";

export const TeamStyled = styled.section`
    margin-top: 60px;
    height: 461px;
    
    position: relative;


    background-image: url("./src/assets/images/teamBanner.svg");
    background-color: rgba(11, 11, 11, 1);

    > img {
        opacity: 20%;
        position: absolute;
        left: 60%;
    }

    .team-container {
        width: 871px;
        margin: 0 auto;
        border: 2px solid transparent;
    }

    .title, .title-emphasis {
        font-size: var(--title-2);
        margin-top: 40px;
    }

    .team-card--container {
        display: flex;
        gap: 20px;
        width: 277px;

        position: relative;
        
        margin-top: 24px;

        cursor: pointer;
    }

    .button-right-01 {
        position: absolute;

        width: 32px;
        height: 32px;
        

        top: 230px;
        right: 200px;

        background-color: var(--grey-4);
        border-radius: 4px;
    }

    .button-left-01 {
        position: absolute;

        width: 32px;
        height: 32px;

        top: 230px;
        left: 200px;

        background-color: var(--grey-4);
        border-radius: 4px;
    }

    button {
        position: absolute;
        bottom: -20px;
        right: 45%;
    }
`