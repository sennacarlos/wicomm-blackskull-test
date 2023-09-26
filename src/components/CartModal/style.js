import { styled } from "styled-components";
import { AnimationModal } from "../../styles/animations";

export const CartModalStyled = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    z-index: 4;
    right: 0;
    top: 0;

    width: 400px;
    height: 100vh;

    background-color: var(--whiteFixed);

    animation: ${AnimationModal} .5s;

    .modal-header {
        height: 15%;
        width: 100%;
        padding: 5%;

        display: flex;
        justify-content: space-between;
        align-items: center;

        border-bottom: 1px solid var(--grey-4);

        img {
            width: 34px;
            height: 34px;
        }

        h2 {
            margin-left: -35%;
        }

        button {
            width: 40px;
            height: 40px;

            font-size: var(--text-1);
            font-weight: var(--weight-1);
            color: var(--grey-0);
            
            background: transparent;
        }
    }

    .cart-empty {
        height: 55%;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            font-size: var(--text-2);
            font-weight: var(--weight-1);

            color: var(--grey-0);
        }
    }

    .cart-list {
        margin-left: -20px;
        height: 55%;
        padding: 5%;
       
        gap: 16px;
        overflow-y: auto;
        overflow-x: hidden;
    }

    .modal-infos {
        height: 30%;

        display: flex;
        flex-direction: column;
        gap: 16px;

        box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.1);
        
        padding: 10% 5% 5%;

        div {
            display: flex;
            justify-content: space-between;
            align-items: center;

            margin-bottom: 10px;

            p:first-child {
                font-size: var(--text-1);
                font-weight: var(--weight-1);
            }

            > .title-price {
                font-size: 1.625rem;
            }

        }

        button {
            width: 100%;
            height: 40px;

            font-size: var(--text-3);
            font-weight: var(--weight-1);

            background-color: var(--brand-1);
            border-radius: 4px;

            &:hover {
                background-color: var(--brand-2);
            }
        }
    }

    ::-webkit-scrollbar {
        width: 6px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--brand-2);
    }
`