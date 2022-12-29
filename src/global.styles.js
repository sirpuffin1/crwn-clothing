import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        padding: 20px 40px;

        @media screen and (max-width: 800px) {
            padding: 10px;
        }
    }

    a {
        text-decoration: none;
        color: black;
    }

    * {
        box-sizing: border-box;
    }

    body {
            margin: 0;
            font-family: 'Open Sans', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            font-stretch: condensed;
            padding: 20px 40px;
            }

        code {
            font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
                monospace;
        }
`;
