import { styled } from "styled-components";

export const ProductsCategoriesStyled = styled.section`
    height: 290px;
    margin-top: 56px;
    
    position: relative;

    .container {
        display: flex;
        flex-direction: column;
    }

    .categories-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 19px;

        scroll-behavior: smooth;
        overflow-x: hidden;
    }
`