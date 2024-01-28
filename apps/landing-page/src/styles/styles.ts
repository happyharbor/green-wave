import { createGlobalStyle } from 'styled-components';

export const fontColor = '#292929';
export const primaryColor = '#4AFFDC';
export const secondaryColor = '#EAC638';

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
        padding: 1rem 1.25rem;

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
        font-size: 56px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }
    
    h1 {
        font-size: 5rem;
        font-style: normal;
        font-weight: 900;
        line-height: 6rem; /* 120% */
    }

    p {
        color: #18216d;
        font-size: 21px;        
        line-height: 1.41;
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
`;
