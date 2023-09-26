import { styled } from "styled-components";

export const CartProductCardStyled = styled.li`
    height: 160px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;

    div {
        padding: 5% 0% 10% 5%;
        position: relative;
        margin-left: -20px;
    }

    p:first-child {
        font-size: var(--text-3);
        font-weight: var(--weight-1);

        color: var(--grey-0);
        width: 200px;
        margin-bottom: 8px;
    }

    img {
        width: 35%;
    }

    button {
        width: 40px;
        height: 40px;
                
        position: absolute;
        top: 8%;
        right: -50px;

        background-color: transparent;
        
        img {
            width: 18px;
            height: 18px;
        }
    }
`