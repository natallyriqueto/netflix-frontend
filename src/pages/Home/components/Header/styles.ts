import styled from 'styled-components';

export const HeaderContainer = styled.header`
    background-color: transparent;
    height: 5.70rem;
    width: 100%;
    position: absolute;
    z-index: 999;
    top: 0;

    nav {
        max-width: calc(66.66666666666666% - 6rem);   
        margin: auto;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    div {
        display: flex;
        align-items: center;
        gap: 1.75rem;
    }

    img {
        width: 10rem;
        height: 6rem;
    }

    @media (max-width: 1900px) {
        nav {
            max-width: calc(100% - 6rem);        
        }
    }


    @media (max-width: 768px) {
        nav {
            max-width: calc(100% - 2rem);        
        }

        div {
            gap: 1rem;
        }

        img {
            width: 6rem;
            height: 4rem;
        }
    }

`;

export const SignInButton = styled.button`
    background-color: ${props => props.theme.red};
    font-weight: bold;
`;

export const LanguageButton = styled.button`
    background-color: transparent;
    align-items: center;
    display: flex;
    gap: 0.5rem;
    border: 1px solid ${props => props.theme['gray-300']};
`;