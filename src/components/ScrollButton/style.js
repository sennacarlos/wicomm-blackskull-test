import { styled } from "styled-components";

export const ScrollButtonStyled = styled.div`
    width: 125px;
    height: 110px;

    display: flex;
    flex-direction: column;
    align-items: end;

    gap: 10px;

    position: fixed;
    z-index: 2;
    bottom: 60px;
    right: 20px;

    .button-up {
        width: 56px;
        height: 56px;

        border: 1px solid var(--grey-3);
        border-radius: 4px;

        background-color: var(--grey-2); 

        &:hover {
            background-color: var(--brand-1);
            border: 1px solid var(--blackFixed);
            transition: 1s ease;
        }
    }

    button {
        gap: 6px;
    }
`