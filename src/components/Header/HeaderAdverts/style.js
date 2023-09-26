import { styled } from "styled-components";

export const HeaderAdvertsStyled = styled.section`
    width: 100%;
    height: 32px;

    background-color: var(--grey-0);
   

    .headerAdverts-container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 8px 0px;

        div {
            display: flex;
            align-items: center;
            gap: 10px
        }
    }

`