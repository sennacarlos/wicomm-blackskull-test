import { styled } from "styled-components";

export const SearchFormStyled = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
    height: 40px;

    background-color: var(--grey-0);
    border: 1px solid var(--grey-2);
    border-radius: 4px;

    input {
        width: 70%;
        
        border: none;

        background-color: var(--grey-0);

        padding: 12px 0px 13px 16px;

        font-size: var(--text-4);
        font-weight: var(--weight-3);
        color: var(--grey-3);
    }

    button {
        background-color: var(--grey-0);
        margin-right: 12px;
    }
`