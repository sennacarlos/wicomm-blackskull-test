import { styled } from "styled-components";

export const ProductCardStyled = styled.li`
    width: 277px;
    height: 388px;

    display: flex;
    flex-direction: column;
    border-radius: 4px;

    .product-infos {
        position: relative;
        display: flex;
        flex-direction: column;

        width: 277px;
        height: 341px;
        padding: 0 24px;

        border: 1px solid var(--grey-5);
        border-radius: 4px;

        img {
            align-self: center;
            margin: 32px 0 24px 0;
        }

        h5 {
            margin: 16px 0 4px;
        }

    }

    .buttons-product {
        display: flex;
        flex-direction: column;

        height: 64px;

        position: absolute;
        top: 20px;
        right: 15px;

        padding: 0px;

        img {
            margin: 0 0 16px 0;
            cursor: pointer;
        }
    }

    button {
        height: 40px;
        background-color: var(--brand-1);

        border-radius: 4px;

        color: var(--blackFixed);
        font-weight: var(--weight-1);

        opacity: 0;
        transition: opacity 1s;
    }

    &:hover button {
        opacity: 1;
    }
`