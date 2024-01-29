import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme.white};
    }

    body {
        -webkit-font-smoothing: antialiased;     
        background-color: black;
    }

    button {
        padding: 0.4rem 1rem;
        border: none;
        font-size: 0.9rem;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        border-radius: 4px;
        color: ${props => props.theme.white};
    }

    @media (max-width: 768px) {
        html {
            font-size: 87%;
        }
    }
`;