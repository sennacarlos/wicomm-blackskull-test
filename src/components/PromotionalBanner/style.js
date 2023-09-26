import { styled } from "styled-components";
import banner from "../../assets/images/promotionalBanner.svg"

export const PromotionalBannerStyled = styled.section`
    width: 100%;
    height: 548px;
    

    position: relative;

    background-image: url(${banner});
    background-size: cover;
    background-position: center;
    
    .banner-container {
        padding: 130px 0 130px 155px;

        .text-default {
            width: 349px;

            margin: 16px 0 32px 0;
        }

        .button-contact {
            position: absolute;
            bottom: -2%;
            right: 7%;

            img {
                margin-right: 6px;
            }
        }
    }
`