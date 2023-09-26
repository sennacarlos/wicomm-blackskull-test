import { styled } from "styled-components";

export const WarningsStyled = styled.section`
    display: flex;
    flex-direction: center;
    justify-content: center;

    margin: 64px 0 160px;

    .warnings-list {
        display: flex;
        gap: 20px ;


        li {
            width: 475px;
            height: 280px;
            background: linear-gradient(213.8deg, #9A9A9A -17.86%, #0B0B0B 73%);

            padding: 40px 20px;

            position: relative;

            .title, .title-emphasis {
                font-size: var(--title-2);
                margin-bottom: 24px;
            }

            img {
                position: absolute;
                top: 80px;
                right: 10px;
            }
        
            &:hover img {
                top: 40px;
                transition: 1s ease;
            }
        }
    }
`