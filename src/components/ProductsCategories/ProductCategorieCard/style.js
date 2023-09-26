import { styled } from "styled-components";

export const ProductCategorieCardStyled = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    span {
        width: 178px;
        height: 178px;

        border-radius: 50%;
        border: 10px solid transparent;

        display: flex;
        justify-content: center;

        background-color: var(--grey-5);

        img {
            transform: scale(1);
            transition: transform 0.3s
        }
    
    }

    span:hover {
        border: 10px solid var(--brand-2);
        background-color: var(--brand-1);
        transition: ease 1s;

        img {
            transform: scale(1.5);
            transition: ease .5s;
        }
    }

    p {
        margin-top: 16px;
    }
`