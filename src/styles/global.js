import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: none;
        list-style: none;
        text-decoration: none;
        font-family: 'Barlow', sans-serif;
    }

    .App {
        max-width: 100%;
        min-height: 100vh;
    }

    :root {
        --brand-1: #FF9601;
        --brand-2: #FFC470;

        --grey-0: #1C1C1E;
        --grey-1: #2C2C2E;
        --grey-2: #3A3A3C;
        --grey-3: #9A9A9A;
        --grey-4: #CACACA;
        --grey-5: #F1F1F1;
 
        --blackFixed: #0B0B0B;
        --whiteFixed: #FFFFFF;


        --title-1: 3.5rem; 
        --title-2: 2.5rem; 
        --title-3: 2rem; 

        --title-Price: 1.375rem;

        --text-1: 1.125rem;
        --text-2: 1rem;
        --text-3: .875rem;
        --text-4: .75rem;

        --weight-1: 700;
        --weight-2: 600;
        --weight-3: 500;
        --weight-4: 400;

    }

    h1, .title {
        font-family: 'Roboto Condensed', sans-serif;
        font-size: var(--title-1);
        font-weight: var(--weight-1);
        font-style: italic;

        color: var(--whiteFixed);
    }

    .title-emphasis {
        font-family: 'Roboto Condensed', sans-serif;
        font-size: var(--title-1);
        font-weight: var(--weight-1);
        font-style: italic;
        
        color: var(--brand-1);
    }

    .title-section {
        font-family: 'Roboto Condensed', sans-serif;
        font-size: var(--title-3);
        font-weight: var(--weight-1);
        font-style: italic;
        
        color: var(--grey-0);
    }

    .title-price {
        font-size: var(--title-Price);
        font-weight: var(--weight-1);
        color: var(--brand-1);
    }

    .title-footer {
        font-size: var(--text-2);
        font-weight: var(--weight-1);
        color: var(--whiteFixed);
    }

    .text-default {
        font-size: var(--text-2);
        font-weight: var(--weight-4);
        color: var(--whiteFixed);
    }

    .text-default--black {
        font-size: var(--text-2);
        font-weight: var(--weight-4);
        color: var(--grey-2);
    }

    .text-section {
        font-size: var(--text-4);
        font-weight: var(--weight-1);
        color: var(--grey-0);
    }

    .text-product {
        font-size: var(--text-4);
        font-weight: var(--weight-2);
        color: var(--blackFixed);
        width: 182px;
    }

    .text-product--subtitle {
        font-size: var(--text-3);
        font-weight: var(--weight-4);
        color: var(--grey-2);
    }

    .text-blog {
       font-size: var(--text-1);
       font-weight: var(--weight-1);
       color: var(--whiteFixed);
    }

    .text-blog--date {
        font-size: var(--text-3);
        font-weight: var(--weight-4);
        color: var(--grey-4);
    }

    .text-footer {
        font-size: var(--text-2);
        font-weight: var(--weight-4);
        color: var(--whiteFixed);
    }

    .text-footer--small {
        font-size: var(--text-3);
        font-weight: var(--weight-4);
        color: var(--grey-3);
    }

    .title-header {
        font-size: var(--text-4);
        font-weight: var(--weight-1);
        color: var(--brand-1);
    }

    .text-header {
        font-size: var(--text-4);
        font-weight: 700;
        color: var(--grey-3);
    }

    .text-header--small {
        font-size: var(--text-4);
        font-weight: var(--weight-3);
        color: var(--grey-4);
    }

    .text-goal {
        font-size: var(--text-3);
        font-weight: var(--weight-1);
        color: var(--blackFixed);
    }


    .container {
        width: 1168px;
        max-width: 100%;
        margin: 0 auto;
    }

    body {
        background-color: var(--whiteFixed);
    }
 
    button {
        cursor: pointer;
        border: none;
    }

    .carousel-container {
        display: flex;
        justify-content: space-between;

        .button-left {
            position: absolute;
            top: 80px;
            left: 100px;

            width: 32px;
            height: 32px;

            background-color: var(--grey-4);
            border-radius: 4px;

        }

        .button-right {
            position: absolute;
            top: 80px;
            right: 100px;

            width: 32px;
            height: 32px;

            background-color: var(--grey-4);
            border-radius: 4px;
        }
    }

    .carousel-container--product {
        display: flex;
        justify-content: space-between;

        .button-left {
            position: absolute;
            top: 180px;
            left: -15px;

            width: 32px;
            height: 32px;

            background-color: var(--grey-4);
            border-radius: 4px;

        }

        .button-right {
            position: absolute;
            top: 180px;
            right: -15px;

            width: 32px;
            height: 32px;

            background-color: var(--grey-4);
            border-radius: 4px;
        }
    }
    
    main {
        margin-top: 104px;
    }

    html {
        scroll-behavior: smooth;
    }

    .modal-backdrop {
        width: 100%;
        height: 100%;

        background-color: rgba(255, 150, 1, 0.4);
        z-index: 3;

        position: fixed;
        top: 0;
        left: 0;
    }
`