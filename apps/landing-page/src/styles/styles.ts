import { createGlobalStyle } from 'styled-components';

export const fontColor = '#292929';
export const paragraphFontColor = '#5A5A5A';
export const primaryColor = '#4AFFDC';
export const secondaryColor = '#9747FF';
export const thirdColor = '#286F70';

export const fontFamily = "'Roboto', sans-serif";

export const Styles = createGlobalStyle`

    @font-face {
        font-family: "Roboto";
        src: url("/fonts/Roboto-Medium.ttf") format("truetype");
        font-style: normal;
    }

    a {
    }

    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #fff;
        overflow-x: hidden;
        font-family: ${fontFamily};
    }

    a:hover {
        color: #18216d;
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: rgb(241, 242, 243);
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 0;

        :focus-within {
            background: none;
            box-shadow: #2e186a 0 0 0 1px;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: ${fontColor};
        font-style: normal;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
            padding-bottom: 2rem;
        }
    }
    
    h1 {
        font-size: 5rem;
        font-weight: 900;
        margin: 4.15rem 0 7rem 0;

        @media only screen and (max-width: 414px) {
            font-size: 2.1875rem;
            line-height: 3rem;
            margin: 5.34375rem 0 7.09375rem 0;
        }
    }
    
    h2{
        font-size: 3.75rem;
        font-weight: 700;
        margin: 0 0 1rem 0;

        background:
                radial-gradient(100% 58% at top   ,${primaryColor}   99%,${fontColor}) calc(0*100%/3) 0,
                radial-gradient(100% 58% at bottom,${fontColor} 99%,${primaryColor}  ) calc(3*100%/3) 0,
                radial-gradient(100% 58% at top   ,${primaryColor}   99%,${fontColor}) calc(6*100%/3) 0,
                radial-gradient(100% 58% at bottom,${fontColor} 99%,${primaryColor}  ) calc(9*100%/3) 0;
        background-size:50% 110%;
        background-repeat:no-repeat;
        -webkit-background-clip:text;
        color:transparent;
        background-clip:text;
        display:inline-block;
        padding:20px;
        animation: move 5s infinite linear;

        @media only screen and (max-width: 414px) {
            font-size: 1.875rem;
            padding-left: 0;
            padding-bottom: 2rem;
            margin: 0;
            background-size:50% 90%;
        }
    }

    @keyframes move {
        to {
            background-position:
                    calc(-6*100%/3) 0,
                    calc(-3*100%/3) 0,
                    calc(0*100%/3) 0,
                    calc(3*100%/3) 0;
        }
    }
    
    h3{
        font-size: 1.75rem;
        font-weight: 900;
        margin: 0;

        @media only screen and (max-width: 414px) {
            font-size: 2.1rem;
        }
    }

    h4{
        font-size: 1.5rem;
        font-weight: 900;
        margin: 0;

        @media only screen and (max-width: 414px) {
            font-size: 1.125rem;
            padding-bottom: 0;
        }
    }

    p {
        color: ${paragraphFontColor};
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 500;
        margin: 0;

        @media only screen and (max-width: 414px) {
            font-size: 1rem;
        }
    }

    a {
        text-decoration: none;
        outline: none;
        color: #2E186A;

        :hover {
            color: #2e186a;
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .content {
        padding-top: 16px;
    }

    .sticky {
        position: fixed;
        top: 0;
        width: 100%;
    }

    .sticky + .content {
        padding-top: 85px;
    }
`;
