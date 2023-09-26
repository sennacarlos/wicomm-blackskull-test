import { styled } from "styled-components";

export const FooterStyled = styled.footer`
    height: 558px;
    background-color: var(--blackFixed);

    .footer-container {
        display: flex;
        height: 500px;
    }

    .footer-left {
        width: 70%;
        border-right: 1px solid var(--grey-2);
        padding: 40px 0 0 0;

        display: flex;

        .footerInfos-company {
            width: 245px;

            img {
                width: 100%;
                height: 72px;
            }

            ul {
                display: flex;
                flex-direction: column;

                p {
                    font-size: var(--text-3);
                    font-weight: var(--weight-4);
    
                    color: var(--whiteFixed);
    
                    align-self: center;

                    margin-top: 32px;
                    margin-bottom: -10px;
                }
            } 
        }

        .footerInfos-institutional {
            width: 100%;
            display: flex;
            flex-direction: column;
            
            padding: 10px 40px;

            gap: 48px;
           
            .institutional-1 {
                display: flex;
                gap: 45px ;
            }

            ul {
                display: flex;
                flex-direction: column;
                gap: 15px ;

                p {
                    font-size: var(--text-2);
                    font-weight: var(--weight-4);
                    color: var(--whiteFixed);
                }
                
                li {
                    max-width: 138px;

                    font-size: var(--text-3);
                    font-weight: var(--weight-4);
                    color: var(--grey-3);
                }
            }

            .institutional-2 {
                display: flex;
                gap: 50px;
            }

            .list-security {
                display: flex;
                flex-direction: row;
            }
        }
    }

    .footer-right {
        width: 20%;
        
    }

    .footer-company {
        border-top: 1px solid var(--grey-2); 
        height: 58px;
    }

    .footer-newsletter {
        width: 300px;
        height: 350px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        padding: 100px 0 0 50px;


        h2 {
            font-size: var(--title-3);
            text-align: center;

            p {
                font-size: var(--title-3);
                margin-bottom: 16px;
            }
        } 

        p {
            text-align: center;
        }

        form {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 16px;

            margin-top: 32px;

            input {
                width: 100%;
                height: 56px;

                background-color: var(--grey-0);
                border: 1px solid var(--grey-3);
                border-radius: 4px;
                
                color: var(--grey-3);

                padding: 21px 16px;

                ::placeholder {
                    font-size: var(--text-4);
                    font-weight: var(--weight-3);
                }
            }

            button {
                align-self: center;
            }
        }
    }

    .footer-copyright {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        padding-top: 20px;

        p {
            font-size: var(--text-2);
            font-weight: var(--weight-4);

            color: var(--whiteFixed);
        }

        div {
            display: flex;
            gap: 40px;
        }
    }
`