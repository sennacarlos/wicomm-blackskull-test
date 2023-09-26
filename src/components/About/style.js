import { styled } from "styled-components";

export const AboutStyled = styled.section`
    width: 643px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 0 auto;
    margin-bottom: 64px;

    position: relative;

    p {
        text-align: center;
        margin-top: 24px;
    }

    img {
        width: 164px;
        height: 164px;

        opacity: 10%;

        position: absolute;
        top: -100px;
    }
`