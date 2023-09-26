import { styled } from "styled-components";
import { AnimationModal } from "../../styles/animations";

export const HeaderStyled = styled.header`
    width: 100%;
    height: 104px;

    background-color: var(--blackFixed);

    position: fixed;
    z-index: 1;
    top: 0;
    
    .header-container {
        display: flex;
        align-items: center;

        ul {
            display: flex;

            li {
                width: 103px;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 26px 0 28px;

                border-bottom: 3px solid transparent;
                cursor: pointer;
            }

            li:hover {
                border-bottom: 3px solid var(--brand-1);
                color: var(--whiteFixed);
            }
        }

        .header-container--buttons {
            display: flex;
            justify-content: end;
            gap: 16px;

            margin-left: 16px;

            button {
                background-color: var(--blackFixed);
            }
        }
    }

    .cart-counter--container {
        display: flex;
        align-items: center;

        position: relative;
    }

    .cart-counter {
        width: 25px;
        height: 25px;

        position: absolute;
        right: -20px;
        top: -5px;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 50%;

        background-color: var(--brand-1);

        transition: 1s ease;
        animation: ${AnimationModal};

        cursor: pointer;

        span {
            font-size: var(--text-3);
            font-weight: var(--weight-1);
            color: var(--blackFixed);
        }
    }
`