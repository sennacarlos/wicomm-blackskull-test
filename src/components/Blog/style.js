import { styled } from "styled-components";

export const BlogStyled = styled.section`
    margin-top: 64px;
    height: 540px;
    background: linear-gradient(180deg, #3A3A3C 0%, #0B0B0B 101.48%);

    .container-blog {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 40px 0;

        .title, .title-emphasis {
            font-size: var(--title-3);
        }
    }

    .articles-list {
        display: flex;
        gap: 20px;
    }

    .container {
        position: relative;
    }

    .button-left-01 {
        position: absolute;

        width: 32px;
        height: 32px;

        top: 300px;
        left: -16px;

        background-color: var(--grey-4);
        border-radius: 4px;
    }

    .button-right-01 {
        position: absolute;

        width: 32px;
        height: 32px;

        top: 300px;
        right: -16px;

        background-color: var(--grey-4);
        border-radius: 4px;
    }
`