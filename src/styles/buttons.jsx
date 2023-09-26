import styled, { css } from "styled-components";

export const ButtonDefault = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 4px;
    
    background-color: var(--brand-1);
    color: var(--blackFixed);

    font-weight: var(--weight-1);

    &:hover {
        background-color: var(--brand-2);
        transition: opacity 1s;
    }

    ${({ buttonSize }) => {
        switch (buttonSize) {
            case "emphasis":
                return css`
                    width: 120px;
                    height: 48px;
                    font-size: var(--text-2);
                `
            case "default":
                return css`
                    width: 138px;
                    height: 40px;
                    font-size: var(--text-3);
                `
            case "medium":
                return css`
                    width: 123px;
                    height: 40px;
                    font-size: var(--text-3);
                `
            case "contact":
                return css`
                    width: 124px;
                    height: 40px;
                    font-size: var(--text-3);
                    border-radius: 6px 6px 0px 6px;
                    border: 1px solid var(--grey-2);
                `
        }
    }}
`